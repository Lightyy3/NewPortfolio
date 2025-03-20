import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

import { TypewriterEffectSmooth } from "./ui/Typewriter";

const Hero = () => {
  const words = [
    {
      text: "Crafting",
    },
    {
      text: "Engaging",
    },
    {
      text: "Experiences",
    },
    {
      text: "from",
    },
    {
      text: "Concepts",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "to",
    },
    {
      text: "Reality",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="pb-20 pt-36">
      {/* <LampDemo />
      <LampContainer
        children="Hi! I'm Adrian, a Next.js Developer based in Croatia."
        className="mt-8 bg-gradient-to-br from-slate-300  py-4 bg-clip-text text-center text-4xl font-medium tracking-tight  md:text-7xl"
      /> */}
      <div className=""></div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p> */}

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TypewriterEffectSmooth
            words={words}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          {/* <TextGenerateEffect
            words="Crafting Engaging Experiences from Vision to Reality"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          /> */}

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Alex, a Web Developer. Glad to meet you!
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
