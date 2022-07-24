import { config } from "../../config";
import Image from "next/image";
import Box from "../box";
import {
  SiTypescript,
  SiReact,
  SiSass,
  SiSolidity,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiHeroku,
  SiVercel,
  SiVim,
  SiLinux,
} from "react-icons/si";
import useTranslation from "next-translate/useTranslation";
import { ReactElement } from "react";

/**
 * @ToDo Map the skills
 * @description Skills section
 * @returns { ReactElement } A preview of the skills section
 */

const Skills: React.FC = (): ReactElement => {
  const { t } = useTranslation("index");
  return (
    <>
      <div className="flex justify-center place-items-center">
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
      <h2 className="ml-5 text-2xl">{t("skills")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <Box
          title={t("languages")}
          icons={[<SiTypescript />, <SiSolidity />]}
        />
        <Box
          title="Frontend"
          icons={[<SiReact />, <SiNextdotjs />, <SiSass />]}
        />
        <Box title="Backend" icons={[<SiNodedotjs />, <SiExpress />]} />
        <Box title="DBs" icons={[<SiMongodb />, <SiPostgresql />]} />
        <Box
          title={t("other")}
          icons={[<SiDocker />, <SiVim />, <SiLinux />]}
        />
        <Box
          title={t("cloud")}
          icons={[<SiHeroku />, <SiVercel />, <SiFirebase />]}
        />
      </div>
    </>
  );
};

export default Skills;
