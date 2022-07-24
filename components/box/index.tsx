import React from "react";
import { BoxType } from "../../models";

const Box: React.FC<BoxType> = (props: BoxType) => {
  const { title, icons } = props;
  return (
    <div className="font-thin text-4xl m-5 flex-column rounded-2xl border-4 border-gray-900 dark:border-white p-2">
      <h3 className="text-center text-2xl">{title}</h3>
      <div className="flex justify-evenly mt-5">{icons}</div>
    </div>
  );
};

export default Box;
