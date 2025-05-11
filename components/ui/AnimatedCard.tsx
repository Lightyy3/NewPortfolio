"use client";

import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

export function CardDemo() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </Card>
  );
}

const ANIMATION_DURATION = 4; // duration in seconds

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [".circle-1", { scale, transform }, { duration: 0.8 }],
    [".circle-2", { scale, transform }, { duration: 0.8 }],
    [".circle-3", { scale, transform }, { duration: 0.8 }],
    [".circle-4", { scale, transform }, { duration: 0.8 }],
    [".circle-5", { scale, transform }, { duration: 0.8 }],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <img src="/tail.svg" className="h-4 w-4" />
        </Container>
        <Container className="h-8 w-8 circle-2">
          <img src="/re.svg" className="h-6 w-6 dark:text-white" />
        </Container>
        <Container className="h-8 w-8 circle-3">
          <img src="/next.svg" className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="h-8 w-8 circle-4">
          <img src="/ts.svg" className="h-6 w-6" />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <img src="/three.svg" className="h-4 w-4" />
        </Container>
      </div>

      {/* Synchronized Line Animation */}
      <motion.div
        className="absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
        initial={{ height: 0 }}
        animate={{ height: "160px" }}
        transition={{
          duration: ANIMATION_DURATION,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{ width: "1px" }}
      >
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </motion.div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        />
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("max-w-sm w-full mx-auto p-8 rounded-xl group", className)}
    >
      {children}
    </div>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-[20rem] rounded-xl z-40", className)}>{children}</div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-16 w-16 rounded-full flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};
