import { config } from "../../config/index";
import { NextPage } from "next";
import Head from "next/head";
import { Skills } from "../../components";
import { ReactElement } from "react";

const SkillsSection: NextPage = (): ReactElement => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Jonathan Dyallo - Skills</title>
        <link rel="shortcut icon" type="image/jpg" href="https://raw.githubusercontent.com/jd-apprentice/Portfolio-Next/main/public/favicon.png" />
        <meta property="og:image"
          content={config.github.url} />
        <meta name="description"
          content="Skills section - Here I list most of the skills I use in my daily basis and my personal projects"></meta>
        <meta property="og:description"
          content="Skills section - Here I list most of the skills I use in my daily basis and my personal projects"/>
        <meta property="og:title" content="Jonathan Dyallo - Fullstack Developer" />
        <meta property="og:url" content="https://jonathandyallo.vercel.app" />
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <Skills />
      </main>
    </div>
  );
};

export default SkillsSection;
