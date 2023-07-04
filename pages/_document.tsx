import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from "next/script";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <Script
                        defer
                        src='https://static.cloudflareinsights.com/beacon.min.js'
                        data-cf-beacon='{"token": "a4042df51fae48da8652c57f0e6dbd70"}'
                        strategy="afterInteractive"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}