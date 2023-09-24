"use client";
import { TypeAnimation } from "react-type-animation";

type Props = {};

const HeroText = (props: Props) => {
  return (
    <TypeAnimation
      sequence={["VIKARA.",1000,"",200]}
      wrapper="span"
      speed={5}
      preRenderFirstString={true}
      repeat={Infinity}
    />
  );
};

export default HeroText;
