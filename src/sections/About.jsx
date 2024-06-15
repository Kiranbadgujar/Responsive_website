import React from "react";
import { aboutgrids } from "../exports/index"
import AboutGrid from "../components/AboutGrid";

const About = () => {
  return (
    <section id="about" className="w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit px-7 py-4 lg:px-16 lg:py-12">
      <div className="flex justify-center items-start flex-col gap-8 lg:w-1/2">
        <h1 className="text-green-600 font-bold text-6xl">
          Hosting solution with benefits.
        </h1>
        <p className="text-slate-05 text-2xl">
          Turn your ideas into reality with Static. With a lot of powerful
          features, we guarantee simplicity and clarity.
        </p>
        <button className="bg-green-800 text-white px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer">
          Read More
        </button>
      </div>
      <div className="flex justify-between items-center w-full lg:w-1/2 flex-wrap">
        {aboutgrids.map((grid) => (
          <div key={grid.label} className="w-full lg:w-1/2">
            <AboutGrid {...grid} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
