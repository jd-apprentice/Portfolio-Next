import { config } from "../../../config";
import Image from "next/image";
import Box from "../../common/box";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiVercel,
  SiVim,
  SiLinux,
  SiDigitalocean,
  SiGnubash,
  SiMaterialui,
  SiNestjs,
  SiChakraui,
  SiFirebase,
  SiNginx,
  SiRust,
} from "react-icons/si";
import useTranslation from "next-translate/useTranslation";
import { ReactElement } from "react";
import { SkillsIcon } from "@/components";

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
          icons={[
            <SkillsIcon text="Typescript" children={<SiTypescript />} />,
            <SkillsIcon text="Rust" children={<SiRust />} />,
            <SkillsIcon text="Bash" children={<SiGnubash />} />,
          ]}
        />
        <Box
          title="Frontend"
          icons={[
            <SkillsIcon text="React" children={<SiReact />} />,
            <SkillsIcon text="Material UI" children={<SiMaterialui />} />,
            <SkillsIcon text="Chakra UI" children={<SiChakraui />} />,
          ]}
        />
        <Box
          title="Backend"
          icons={[
            <SkillsIcon text="Nodejs" children={<SiNodedotjs />} />,
            <SkillsIcon text="Express" children={<SiExpress />} />,
            <SkillsIcon text="Nestjs" children={<SiNestjs />} />,
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
            <SkillsIcon text="Nginx" children={<SiNginx />} />,
          ]}
        />
        <Box
          title={t("cloud")}
          icons={[
            <SkillsIcon text="Digital Ocean" children={<SiDigitalocean />} />,
            <SkillsIcon text="Firebase" children={<SiFirebase />} />,
            <SkillsIcon text="Vercel" children={<SiVercel />} />,
          ]}
        />
      </div>
    </>
  );
};

export default Skills;
