import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { ButtonStyle } from "./style";
import useTranslation from "next-translate/useTranslation";

const ProjectPage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation("index");

  return (
    <>
      <div>
        <div className="relative w-full h-64">
          <Image
            src="https://wallpapercave.com/wp/3CehTud.jpg"
            alt="Project Image"
            layout="fill"
            objectFit="cover"
            onLoadingComplete={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-gray-500 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        <div className="max-w-2xl mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">DBN-Tools</h1>
          <p className="text-gray-600 mb-8">{t("dbn_tools_about")}</p>
          <div className="flex space-x-4">
            <a
              target="_blank"
              href="https://github.com/jd-apprentice/dbn-tools"
              rel="noopener noreferrer"
            >
              <Button {...ButtonStyle}>
                <FontAwesomeIcon icon={faCode} className="mr-2" />
                {t("view_code")}
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-full h-64">
          <Image
            src="https://cdn.discordapp.com/attachments/875262629516546089/1085370998796324864/WaifuLand.jpg"
            alt="Project Image"
            layout="fill"
            objectFit="cover"
            onLoadingComplete={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-gray-500 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        <div className="max-w-2xl mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Waifuland</h1>
          <p className="text-gray-600 mb-8">{t("waifuland_about")}</p>
          <div className="flex space-x-4">
            <a
              target="_blank"
              href="https://github.com/jd-apprentice/waifuland-fe"
              rel="noopener noreferrer"
            >
              <Button {...ButtonStyle}>
                <FontAwesomeIcon icon={faCode} className="mr-2" />
                {t("view_code")}
              </Button>
            </a>
            <a
              target="_blank"
              href="https://app.jonathan.com.ar/"
              rel="noopener noreferrer"
            >
              <Button {...ButtonStyle}>
                <FontAwesomeIcon icon={faDesktop} className="mr-2" />
                {t("view_demo")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
