import HeroText from "@/components/HeroText";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-[200vh] flex-col items-center justify-start xl:p-24 py-20 px-6 ">
      <div className="flex flex-col pb-20 items-center justify-start ">
        <h1 className="text-5xl mx-auto font-extrabold xl:text-8xl h-[100px] text-center ">
          Dubb with {""}
          <span className="  text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:drop-shadow-[0_5px_10px_rgba(255,255,255,0.45)] drop-shadow-[0_5px_10px_rgba(0,0,0,0.50)] -z-10">
            <HeroText />
          </span>
        </h1>

        <p className="text-lg lg:text-2xl mt-4 font-medium lg:font-bold text-center leading-6 lg:leading-8 w-3/4">
          Think of cross-cultural communication with video dubbing solution.
          <span className="  text-gray-500 ">
            {""} We script, create, and voiceover English videos in native
            Indian languages, ensuring your content resonates with your audience
            effortlessly.
          </span>
        </p>
      </div>

      <div className="hidden sm:flex items-center w-[700px] text-left space-x-3  h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-xs dark:shadow-gray-400 rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700 flex gap-2 ">
        <input
          type="text"
          className="bg-inherit border-none outline-none ring-transparent focus:border-none focus:outline-none focus:ring-transparent w-full"
        />

        <button className="max-w-[100]px w-1/6 p-2 hover:bg-slate-800 border-gray-500 border rounded-lg">
          Convert

        </button>

      </div>
    </main>
  );
}
