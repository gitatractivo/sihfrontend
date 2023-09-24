"use client";
import { TypeAnimation } from "react-type-animation";

type Props = {};

const HeroText = (props: Props) => {
  return (
    <TypeAnimation
      sequence={["VIKARA.", 1000, "", 200]}
      wrapper="span"
      speed={5}
      preRenderFirstString={true}
      repeat={Infinity}
      style={{ zIndex: -1000 }}
      cursor={false}
      className="-z-10 abosolute"
    />
  );
};

export default HeroText;
