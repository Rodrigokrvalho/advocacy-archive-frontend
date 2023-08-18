import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { signOut } from "../contexts/AuthContext";
import { AuthTokenError } from "./errors/AuthTokenError";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

let isRefreshing = false;
let failedRequestQueue = [] as any;

export function setupAPIClient(ctx?: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
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

        if (typeof window) {
          signOut();
        } else {
          return Promise.reject(new AuthTokenError);
        }
      }

      return Promise.reject(error);

    });
  return api;
}