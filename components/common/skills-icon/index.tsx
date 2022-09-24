import React from "react";
import { Tooltip } from "@material-tailwind/react";

type IconsType = {
  text: string;
  children: React.ReactNode;
};

const SkillsIcon: React.FC<IconsType> = ({
  children,
  text,
}: IconsType): React.ReactElement => {
  return (
    <Tooltip
      placement="bottom"
      className="text-dark dark:text-white"
      content={text}
    >
      <div>{children}</div>
    </Tooltip>
  );
};

export default SkillsIcon;
