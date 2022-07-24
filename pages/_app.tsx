import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { Footer, Navigation } from '../components';
import { ThemeProvider } from 'next-themes';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const MyApp = ({ Component, pageProps }: AppProps) => {
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
