import Link from "next/link";
import React, { useEffect, useState } from "react";
import LightDarkSwitch from "./LightDarkSwitch";

export interface IHeader {
  appName: string;
}

const Header: React.FC<IHeader> = ({ appName }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const RenderThemeChanger = () => {
    if (!mounted) return null;
    return <LightDarkSwitch />;
  };

  return (
    <div className="bg-white dark:bg-dark text-black dark:text-white p-4 h-[8vh] sm:h-[18vh]">
      <div className="flex flex-row justify-between max-w-[50rem] mx-auto items-center">
        <Link href={"/messages"}>
          <p className="font-bold text-lg">{appName}</p>
        </Link>
        <div className="flex flex-row space-x-4 items-center">
          <Link href={"/about"}>
            <p className="text-sm font-light">ABOUT</p>
          </Link>

          {RenderThemeChanger()}
        </div>
      </div>
    </div>
  );
};

export default Header;
