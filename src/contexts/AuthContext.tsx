import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/apiClient";
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import Router from 'next/router';

type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  user: User | undefined;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

let authChannel: BroadcastChannel;

export function signOut() {
  destroyCookie(undefined, 'nextauth.token');
  destroyCookie(undefined, 'nextauth.refreshToken');

  authChannel.postMessage('signOut');
  Router.push('/');
}

export const AuthContext = createContext({} as AuthContextData);


export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel('auth');

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          document.location.reload();
          break;

        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();

    // if (token) {
    //   api.get('/me')
    //     .then(response => {
    //       const { email, permissions, roles } = response.data;

    //       setUser({ email, permissions, roles });
    //     })
    //     .catch(() => {
    //       signOut();
    //     });
    // }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/auth/login', {
        email, password
      });
      console.log({ response });

      const { access_token, permissions, roles } = response.data;

      setCookie(undefined, 'nextauth.token', access_token, {
        maxAge: 60 * 60 * 24 * 1, //1d
        path: '/'
      });

      // setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
      //   maxAge: 60 * 60 * 24 * 30, //30d
      //   path: '/'
      // });

      setUser({
        email, permissions, roles
      });

      api.defaults.headers['Authorization'] = `Bearer ${access_token}`;

      Router.push('/home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}