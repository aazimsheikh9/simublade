import React from "react";
import W from "../../assets/w.png";
import Signal from "../../assets/signal.png";
import Color from "../../assets/color.png";

export default function ServicesInner() {
  return (
    <div className="bg-[#E0E0E0] rounded-lg p-8 max-w-sm lg:max-w-none lg:w-1/3">
      <div className="bg-[#FFFDFA] border-[#E0E0E0] border rounded-md w-16 h-16 mb-5 "></div>
      <div className="text-2xl font-bold">UI Design</div>
      <div className="text-sm mt-5 mb-10">
        Delve into the minds of your audience, gain insight, With UX research,
        your strategy takes flight.{" "}
      </div>
      <div className="flex space-x-3">
        <img className="w-8 h-8" src={W} alt="" />
        <img className="w-8 h-8" src={Signal} alt="" />
        <img className="w-8 h-8" src={Color} alt="" />
      </div>
    </div>
  );
}
