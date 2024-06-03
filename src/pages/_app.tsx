
import "@/styles/app.scss";
import "@/styles/globals.css";

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { AppContextReducer } from "@/reducers/app.reducer";
import { SWRConfig } from 'swr';
import { swrConfig } from "@/config/swrConfig";
import Head from "next/head";
import { ConfigProvider } from 'antd';
import { themeAntDesign } from "@/config/antDesignConfig";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<>
  <Head>
    <meta  />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Base quizz </title>
  </Head>
    <SWRConfig value={swrConfig}>
      <AppContextReducer> 
      <ConfigProvider theme={themeAntDesign}>
          <Component {...pageProps} />
      </ConfigProvider>
      </AppContextReducer>
    </SWRConfig>
  </>)
}

