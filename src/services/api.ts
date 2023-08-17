import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { signOut } from "../contexts/AuthContext";
import { AuthTokenError } from "./errors/AuthTokenError";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

let isRefreshing = false;
let failedRequestQueue = [] as any;

export function setupAPIClient(ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'https://liber-back.wolftechti.com.br/api',
    headers: {
      Authorization: `Bearer ${cookies['nextauth.token']}`
    }
  });

  api.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (error.response.data === 'token.expired') {
          //   cookies = parseCookies(ctx);

          //   const { 'nextauth.refreshToken': refreshToken } = cookies;
          //   const originalConfig = error.config!;

          //   if (!isRefreshing) {
          //     isRefreshing = true;

          //     api.post('/refresh', {
          //       refreshToken,
          //     }).then(response => {
          //       const { token } = response.data;

          //       setCookie(ctx, 'nextauth.token', token, {
          //         maxAge: 60 * 60 * 24 * 30, //30d
          //         path: '/'
          //       });

          //       setCookie(ctx, 'nextauth.refreshToken', response.data.refreshToken, {
          //         maxAge: 60 * 60 * 24 * 30, //30d
          //         path: '/'
          //       });

          //       api.defaults.headers['Authorization'] = `Bearer ${token}`;

          //       failedRequestQueue.forEach((request: any) => request.resolve(token));
          //       failedRequestQueue = [];
          //     })
          //       .catch(err => {
          //         failedRequestQueue.forEach((request: any) => request.reject(err));
          //         failedRequestQueue = [];

          //         if (typeof window) {
          //           signOut();
          //         }
          //       })
          //       .finally(() => {
          //         isRefreshing = false;
          //       });
          //   }
          //   return new Promise((resolve, reject) => {
          //     failedRequestQueue.push({
          //       resolve: (token: string) => {
          //         originalConfig.headers['Authorization'] = `Bearer ${token}`;

          //         resolve(api(originalConfig));
          //       },
          //       reject: (err: AxiosError) => {
          //         reject(err);
          //       }
          //     });
          //   });
          // } else {
          if (typeof window) {
            signOut();
          } else {
            return Promise.reject(new AuthTokenError);
          }
        }
      }

      return Promise.reject(error);

    });
  return api;
}