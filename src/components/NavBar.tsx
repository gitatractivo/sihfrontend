"use client";
import { Avatar } from "@mui/material";
import ToggleButton from "./ToggleButton";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="  flex justify-between px-20 py-3 w-full items-center shadow-md shadow-gray-200 dark:shadow-gray-950 backnavdrop">
      <div className="first flex gap-3">
        <div className="flex gap-3 ">
          <Avatar className="w-[25px] h-[25px]" />
          <p className="font-bold text-lg">VIKARA</p>
        </div>
      </div>
      <div className="second flex gap-2">
        <ToggleButton />
        <Avatar className="w-[25px] h-[25px]" />
      </div>
    </nav>
  );
};

export default NavBar;
