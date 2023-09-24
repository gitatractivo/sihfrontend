
import HeroText from "@/components/HeroText";
import { Button } from "@mui/material";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-[200ch] flex-col items-center justify-start p-24">
      <h1 className="font-extrabold text-8xl ">
        Dubb with {""}
        <span className="  text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
          <HeroText />
        </span>
      </h1>

      <p className="text-2xl mt-4 font-bold text-center w-3/4">
        Think of cross-cultural communication with video dubbing solution.
        <span className="  text-gray-500 ">
          {""} We script, create, and voiceover English videos in native Indian
          languages, ensuring your content resonates with your audience
          effortlessly.
        </span>
      </p>
      {/* <ToggleButton /> */}
    </main>
  );
}
