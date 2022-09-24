import { config } from "../../../config";
import Image from "next/image";
import Box from "../../common/box";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiHeroku,
  SiVercel,
  SiVim,
  SiLinux,
  SiDigitalocean,
  SiGnubash,
  SiMaterialui,
} from "react-icons/si";
import useTranslation from "next-translate/useTranslation";
import { ReactElement } from "react";
import { SkillsIcon } from "../..";

/**
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
          icons={[<SkillsIcon text="Typescript" children={<SiTypescript />} />]}
        />
        <Box
          title="Frontend"
          icons={[
            <SkillsIcon text="React" children={<SiReact />} />,
            <SkillsIcon text="Nextjs" children={<SiNextdotjs />} />,
            <SkillsIcon text="Matierla UI" children={<SiMaterialui />} />,
          ]}
        />
        <Box
          title="Backend"
          icons={[
            <SkillsIcon text="Nodejs" children={<SiNodedotjs />} />,
            <SkillsIcon text="Express" children={<SiExpress />} />,
          ]}
        />
        <Box
          title="DBs"
          icons={[
            <SkillsIcon text="MongoDB" children={<SiMongodb />} />,
            <SkillsIcon text="PostgreSQL" children={<SiPostgresql />} />,
          ]}
        />
        <Box
          title={t("other")}
          icons={[
            <SkillsIcon text="Docker" children={<SiDocker />} />,
            <SkillsIcon text="Vim" children={<SiVim />} />,
            <SkillsIcon text="Linux" children={<SiLinux />} />,
            <SkillsIcon text="Bash" children={<SiGnubash />} />,
          ]}
        />
        <Box
          title={t("cloud")}
          icons={[
            <SkillsIcon text="Digital Ocean" children={<SiDigitalocean />} />,
            <SkillsIcon text="Heroku" children={<SiHeroku />} />,
            <SkillsIcon text="Vercel" children={<SiVercel />} />,
          ]}
        />
      </div>
    </>
  );
};

export default Skills;
