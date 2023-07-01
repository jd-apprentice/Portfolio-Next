import { config } from "../../config/index";
import { NextPage } from "next";
import Head from "next/head";
import { Projects } from "../../components";
import { ReactElement } from "react";

const ProjectsSection: NextPage = (): ReactElement => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Jonathan Dyallo - Projects</title>
        <link
          rel="shortcut icon"
          type="image/jpg"
          href="https://raw.githubusercontent.com/jd-apprentice/Portfolio-Next/main/public/favicon.png"
        />
        <meta property="og:image" content={config.github.url} />
        <meta
          name="description"
          content="Projects section - Here I showcase some of the projects I have worked on and highlight the skills and technologies used in each project."
        ></meta>
        <meta
          property="og:description"
          content="Projects section - Here I showcase some of the projects I have worked on and highlight the skills and technologies used in each project."
        />

        <meta
          property="og:title"
          content="Jonathan Dyallo - SRE - Devops"
        />
        <meta property="og:url" content="https://jonathandyallo.vercel.app" />
      </Head>
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <Projects />
      </main>
    </div>
  );
};

export default ProjectsSection;
