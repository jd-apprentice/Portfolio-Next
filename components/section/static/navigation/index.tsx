import Link from "next/link";
import React, { ReactElement } from "react";
import { Language, Music, Theme } from "@/components";

/**
 * @description Here goes the theme button, music and home buttons
 * @returns { ReactElement } Navigation Component
 */

const Navigation: React.FC = (): ReactElement => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Home
          </a>
        </Link>
        <Theme />
        <Music />
        <Language />
      </div>
    </div>
  );
};

export default Navigation;
