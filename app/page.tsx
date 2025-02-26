"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";

import Footer from "@/components/Footer";

import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

import React from "react";

import { GlobeDemo } from "@/components/ui/GlobeDemo";

import { FocusCards } from "@/components/ui/FocusCards";

import { CardDemo, CardSkeletonContainer } from "@/components/ui/AnimatedCard";

const Home = () => {
  const CARDS = [
    {
      title: "NextJS",
      src: "/next.svg",
    },
    {
      title: "Typescript",
      src: "/ts.svg",
    },
    {
      title: "Tailwind CSS",
      src: "/tail.svg",
    },
    {
      title: "ThreeJS",
      src: "/three.svg",
    },
    {
      title: "React",
      src: "/re.svg",
    },
    {
      title: "GSAP",
      src: "/gsap.svg",
    },
    {
      title: "Java",
      src: "/java.svg",
    },
    {
      title: "PostreSQL",
      src: "/sql.svg",
    },
    {
      title: "NodeJS",
      src: "/node4.svg",
    },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <GlobeDemo />

        <Hero />
        <FocusCards cards={CARDS} />
        <CardDemo />

        <RecentProjects />
        <Experience />

        <Footer />
      </div>
    </main>
  );
};

export default Home;
