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
    <Tooltip content={text}>
      <div>{children}</div>
    </Tooltip>
  );
};

export default SkillsIcon;
