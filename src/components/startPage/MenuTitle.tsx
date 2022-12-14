import React from "react";

interface MenuTitleProps {
  title: string;
  subtitle: string;
}

export default function MenuTitle({ title, subtitle }: MenuTitleProps) {
  return (
    <div className="mb-2 rounded-md border-slate-500 bg-slate-900/90 p-2 text-white sm:p-3 md:p-4 lg:p-5 xl:p-6 ">
      <div className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        {title}
      </div>
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        {subtitle}
      </div>
    </div>
  );
}
