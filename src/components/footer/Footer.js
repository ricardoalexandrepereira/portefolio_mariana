import React from "react";
import { Logo } from "../../assets";
import {FaFacebookF, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col -gap-1">
        <img className="w-40" src={Logo} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          <span className="bannerIcon">
            <FaInstagram />
          </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-md uppercase text-designColor tracking-wide">
            Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6">
            <a href="https://react-slick.neostack.com/docs/example/custom-arrows/" target="_blank" rel="noreferrer">
                <li>
                    <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                     About 
                        <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                        transition-transform duration-300"></span>
                    </span>
                </li>
            </a>

            <li>
            <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    Portefolio 
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>

            <li>
            <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    Services 
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>

            <li>
            <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    Blog 
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>

            <li>
            <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    Contact 
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>
        </ul>
      </div>


      <div className="w-full h-full">
      <h3 className="text-md uppercase text-designColor tracking-wide">
            Resourses
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6">
            <li>
                <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    Authentication 
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>

            <li>
            <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    System status
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>

            <li>
            <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    Terms of Service
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>

            <li>
            <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    Pricing 
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>

            <li>
            <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    Over Right
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>
        </ul>
      </div>


      <div className="w-full h-full">
      <h3 className="text-md uppercase text-designColor tracking-wide">
            Developers
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6">
            <li>
                <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    Documentation 
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>

            <li>
            <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    Authentication
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>

            <li>
            <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    API Reference
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>

            <li>
            <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    Support 
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>

            <li>
            <span  className="w-full text-sm hover:text-designColor duration-300 cursor-pointer relative group">
                    Open Source
                    <span className="absolute w-full h-[1px] inline-flex text-designColor -bottom-1 left-0 -translate-x-[-100%] group-hover:translate-x-0
                    transition-transform duration-300"></span>
                </span>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
