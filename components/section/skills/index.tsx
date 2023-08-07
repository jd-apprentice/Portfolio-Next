import { config } from "../../../config";
import Image from "next/image";
import Box from "../../common/box";
import {
  SiTypescript,
  SiReact,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiVercel,
  SiVim,
  SiLinux,
  SiDigitalocean,
  SiGnubash,
  SiNestjs,
  SiNginx,
  SiPython,
  SiAutohotkey,
  SiGithubactions,
  SiAmazonaws,
  SiNextdotjs,
  SiJest,
  SiAnsible,
  SiFastapi,
  SiPlanet,
  SiTerraform,
  SiMicrosoftazure,
  SiDebian,
  SiArchlinux,
  SiProxmox,
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
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Box
          title={t("languages")}
          icons={[
            <SkillsIcon text="Typescript" children={<SiTypescript />} />,
            <SkillsIcon text="Python" children={<SiPython />} />,
            <SkillsIcon text="Bash" children={<SiGnubash />} />,
          ]}
        />
        <Box
          title="Frontend"
          icons={[
            <SkillsIcon text="Nextjs" children={<SiNextdotjs />} />,
            <SkillsIcon text="React" children={<SiReact />} />,
          ]}
        />
        <Box
          title="Backend"
          icons={[
            <SkillsIcon text="Express" children={<SiExpress />} />,
            <SkillsIcon text="Nestjs" children={<SiNestjs />} />,
            <SkillsIcon text="FastApi" children={<SiFastapi />} />,
          ]}
        />
        <Box
          title="DBs"
          icons={[
            <SkillsIcon text="MongoDB" children={<SiMongodb />} />,
            <SkillsIcon text="Planetscale" children={<SiPlanet />} />,
          ]}
        />
        <Box
          title={t("other")}
          icons={[
            <SkillsIcon text="Docker" children={<SiDocker />} />,
            <SkillsIcon text="Vim" children={<SiVim />} />,

            <SkillsIcon text="Nginx" children={<SiNginx />} />,
          ]}
        />
        <Box
          title={t("cloud")}
          icons={[
            <SkillsIcon text="Digital Ocean" children={<SiDigitalocean />} />,
            <SkillsIcon text="AWS" children={<SiAmazonaws />} />,
            <SkillsIcon text="Azure" children={<SiMicrosoftazure />} />,
          ]}
        />
        <Box
          title={t("automation")}
          icons={[
            <SkillsIcon text="Github Actions" children={<SiGithubactions />} />,
            <SkillsIcon text="Ansible" children={<SiAnsible />} />,
            <SkillsIcon text="Terraform" children={<SiTerraform />} />,
          ]}
        />
        <Box
          title={t("testing")}
          icons={[<SkillsIcon text="Jest" children={<SiJest />} />]}
        />
        <Box
          title="OS"
          icons={[
            <SkillsIcon text="Debian" children={<SiDebian />} />,
            <SkillsIcon text="Arch" children={<SiArchlinux />} />,
            <SkillsIcon text="Proxmox" children={<SiProxmox />} />,
          ]}
        />
      </div>
    </>
  );
};

export default Skills;
