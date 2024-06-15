import React, { useEffect, useState } from "react";
import { menu, close } from "../assets/icons"

const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [icontoggle, setIconToggle] = useState(false);
  const [menuclass, setMenuClass] = useState('');

  const toggleMenu = () => {
    setToggle(!toggle);
  }

  const toggleIcon = () => {
    setIconToggle(!icontoggle);
  }

  useEffect(() => {
    setMenuClass(toggle ? 'transition-opacity ease-in-out duration-300 transform translate-y-0 opacity-100' : 'transition-opacity ease-in-out duration-300 transform translate-y-full opacity-0'), [toggle]
  })

  return (
    <section className="w-full bg-black text-white flex justify-between items-center px-8 lg:px-16 py-8 sticky top-0 z-40">
      <h1 className="text-green-600 text-3xl font-bold ">Company Logo</h1>
      <div className="hidden lg:flex justify-end items-center gap-2">
        <ul className="flex justify-center items-center gap-3">
          <li className=""><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white"
            href="/">Home</a></li>
          <li className=""><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white" href="#about">Service</a></li>
          <li className=""><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white" href="#testimonial">Testimonial</a></li>
          <li className=""><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white" href="#pricing">Pricing</a></li>
          <li className=""><a className="text-lg text-slate-100 cursor-pointer rounded-sm px-5 py-2 hover:bg-green-600 hover:text-white" href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="lg:hidden flex flex-col">
        {icontoggle ? (
          <img src={close} alt="close icon" width={40} height={40} onClick={() => { toggleMenu(); toggleIcon(); }} />
        ) : (
          <img src={menu} alt="menu icon" width={40} height={40} onClick={() => { toggleMenu(); toggleIcon(); }} />
        )}

        {toggle && (<div id="mob-menu" className={`bg-green-500 text-white py-4 absolute top-20 right-0 w-full ${menuclass}`}>
          <ul className="flex flex-col justify-center items-center gap-2">
            <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center cursor-pointer">Home</li>
            <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center cursor-pointer">service</li>
            <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center cursor-pointer">Testimonial</li>
            <li href="#pricing" className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center cursor-pointer">Pricing</li>
            <li className="text-xl text-white font-semibold hover:bg-green-600 hover:text-white w-full py-3 text-center cursor-pointer">Contact</li>
          </ul>
        </div>)}
      </div>
    </section>
  );
};

export default Header;
