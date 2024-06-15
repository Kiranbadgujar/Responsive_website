import React from "react";
import { call, fb, insta, map, sms, twitter, yt } from "../assets/icons"

const Footer = () => {
  return (
    <section className="w-full text-white bg-black flex flec-col lg:flex-row justify-between items-start gap-10 lg:gap-4 px-10 py-14 lg:px-20 lg:py-28">
      <div className="flex flex-col justify-center items-start gap-2 w-full lg:w-[40%]">
        <h1 className="text-green-500 font-bold text-4xl">Company Logo</h1>
        <p className="text-white text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolore quidem officiis molestiae necessitatibus fuga sed. Libero sit quis quia?</p>
        <div className="flex justify-center items-center gap-4 mt-7" id="logos">
          <span className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-slate-100"><img src={fb} width={25} height={251} /></span>
          <span className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-slate-100"><img src={insta} width={25} height={251} /></span>
          <span className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-slate-100"><img src={yt} width={25} height={251} /></span>
          <span className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-slate-100"><img src={twitter} width={25} height={251} /></span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]">
        <ul className="flex flex-col justify-center items-start gap-3">
          <h1 className="text-xl font-semibold">Page</h1>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">Home</li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">Service</li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">Testimonial</li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">About</li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">Contact</li>
        </ul>
      </div>
  
    </section>
  );
};
1
export default Footer;
