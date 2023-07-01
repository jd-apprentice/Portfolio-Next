import type { NextPage } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import { About } from "@/components";
import { config } from "@/config/index";

const Home: NextPage = (): ReactElement => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Jonathan Dyallo - SRE - Devops</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://raw.githubusercontent.com/jd-apprentice/Portfolio-Next/main/public/favicon.png"
        />
        <meta property="og:image" content={config.github.url} />
        <meta
          name="description"
          content="I'm a sre - devops. Also a person with a lot of desire to progress and develop the skills that the labor market requires."
        ></meta>
        <meta
          property="og:description"
          content="I'm a sre - devops. Also a person with a lot of desire to progress and develop the skills that the labor market requires."
        />
        <meta
          property="og:title"
          content="Jonathan Dyallo - SRE - Devops"
        />
        <meta property="og:url" content="https://jonathandyallo.vercel.app" />
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About />
      </main>
    </div>
  );
};

export default Home;
