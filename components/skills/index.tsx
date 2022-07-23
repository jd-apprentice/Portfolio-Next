import { config } from "../../config";
import Image from "next/image";

const Skills = () => {
  return (
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
  );
};

export default Skills;
