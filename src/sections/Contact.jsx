import React from "react";
// import cube from "../assets/images/cube.png"
import {call , fb, insta, map, sms, twitter, yt } from "../assets/icons"

const Contact = () => {
  return (
    <>
      <section id="contact" className="w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 h-fit p-4 lg:p-20 justify-center items-center">
        <div className="w-full flex justify-center items-center lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-20">
          <div className="flex justify-center items-center w-full flex-col gap-4">
            <h1 className="text-green-600 font-bold text-[35px]">Contact Info</h1>
            <div id="phone" className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600">
              <span className="bg-green-400 p-3 rounded-full"><img src={call} width={22} height={22} /></span>+91 9054249254
            </div>
            <div id="mail" className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600">
              <span className="bg-green-400 p-3 rounded-full"><img src={sms} width={22} height={22} /></span>contact@yourmail.com
            </div>
            <div id="address" className="flex justify-center items-center gap-4 text-lg font-semibold text-gray-600">
              <span className="bg-green-400 p-3 rounded-full"><img src={map} width={22} height={22} /></span>203, Envato Labs, Behind Alis Street, Australia
            </div>
            <div id="logo" className="flex justify-center items-center gap-4 mt-10">
              <span className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600"><img src={fb} width={25} height={251} /></span>
              <span className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600"><img src={insta} width={25} height={251} /></span>
              <span className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600"><img src={yt} width={25} height={251} /></span>
              <span className="bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-600"><img src={twitter} width={25} height={251} /></span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <input type="text" placeholder="Enter Your Name" className="px-4 py-4 w-full border border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none  focus:border-green-900" id="" name="name" />
            <input type="text" placeholder="Enter Your Email Address" className="px-4 py-4 w-full border border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-900" id="" name="email" />
            <textarea type="text" placeholder="Enter Your Message" className="px-4 py-4 w-full border border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-900" cols="30" rows="5" />
            <button className="bg-green-700 text-white px-4 py-3 w-full rounded-lg hover:bg-black cursor-pointer">Submit</button>
          </div>
        </div>
      </section>
      {/* <img src={cube} className="w-full h-72 absolute top-[3550px] hidden xl:block" /> */}
    </>
  );
};

export default Contact;
