import React, { ReactElement } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { config } from "../../config/index";
import Link from "next/link";

/**
 * @description About Section
 * @returns {ReactElement} The about section which contains most of the information
 */

const About: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-black-900 lg:text-5xl dark:text-white">
            Jonathan Dyallo
          </h1>
          <h3 className="text-2xl font-bold text-black-900 lg:text-3xl dark:text-white">
            {t("job")}
          </h3>
          <div className="flex items-center justify-center md:justify-center lg:justify-start xsm:justify-center sm:justify-center space-x-2 mt-2">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:focus:bg-blue-700"
            >
              <a href={t("resume-link")} target={"_blank"}>
                {t("resume")}
              </a>
            </button>
          </div>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">{t("about-me")}</p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={config.github.url}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
          />
        </div>
      </div>
      <Link href={"/skills"}>
        <div className="flex items-center justify-center md:justify-center lg:justify-start xsm:justify-center sm:justify-center space-x-2 mt-2">
      <button
        type="button"
        className="mt-3 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:focus:bg-blue-700"
      >
        {t("button_skills")}
      </button>
      </div>
      </Link>
    </div>
  );
};

export default About;
