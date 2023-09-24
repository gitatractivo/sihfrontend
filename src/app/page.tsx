import ToggleButton from "@/components/ToggleButton";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-[200ch] flex-col items-center justify-between p-24">
      <p className="font-extrabold text-8xl ">
        What is the {""}
        <span className=" text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          title?
        </span>
      </p>
      {/* <ToggleButton /> */}
    </main>
  );
}
