import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Footer, Navigation } from '../components'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <ThemeProvider attribute="class" enableSystem={false}>
    <Navigation/>
    <Component {...pageProps} />
    </ThemeProvider>
    <Footer />
  </>
  )
}

export default MyApp
