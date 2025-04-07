"use client";
import { cn } from "@/lib/utils";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { TextGenerateEffectDemo } from "./text-fades";

export function TypewriterEffectDemo({ className }: { className?: string }) {
  const words = [
    {
      text: "安心",
    },
    {
      text: "実績",
    },
    {
      text: "迅速",
    },
    {
      text: "メンテナンス",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div
      className={cn(
        "flex items-center justify-center md:mr-12 w-full h-full",
        className
      )}
    >
      <div>
        <TypewriterEffect words={words} className="text-4xl pb-10" />
        <TextGenerateEffectDemo />
      </div>
    </div>
  );
}
