import React from "react";
import { workExperience } from "@/data";
import { GlareCard } from "./ui/Glare";
// import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";
// import { testimonials } from "@/data";

const Experience = () => {
  return (
    <div
      className="py-20 w-full z-10 items-center justify-center"
      id="experience"
    >
      {/* <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
        className="justify-center text-center text-purple"
      ></TextRevealCard> */}
      <h1 className="heading text-white  justify-center text-center">
        <span className="text-purple">Work Experience</span>
      </h1>

      <div className="mt-12 grid lg:grid-cols-3 grid-cols-1 gap-10 items-start justify-center">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className="flex md:flex-1 items-center justify-center text-black dark:text-white border-neutral-200 dark:border-slate-800 gap-10"
          >
            <GlareCard className="min-h-[50vh]   flex flex-col items-center justify-center gap-16">
              <div className="flex-1 flex-col items-center lg:flex-row lg:items-center p-3 py-12 md:p-5 lg:p-10 gap-2 h-full">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16 mx-auto lg:mx-0"
                />
                <div className="lg:ms-2 flex-1 text-center lg:text-start">
                  <h1 className="text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="mt-3 font-semibold">{card.desc}</p>
                </div>
              </div>
            </GlareCard>
          </div>
        ))}
      </div>
      {/* <AnimatedTestimonials testimonials={testimonials} /> */}
    </div>
  );
};

export default Experience;
