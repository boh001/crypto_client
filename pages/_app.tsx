import Layout from 'components/Layout'
import type { AppProps /*, AppContext */ } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/GlobalStyles'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  )
}


export default MyApp