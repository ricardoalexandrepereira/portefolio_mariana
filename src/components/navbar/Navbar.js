import React from "react";
import { Logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-full h-24 mx-auto sticky top-0 bg-bodyColor z-50 flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={Logo} width={100} height={100} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map((navlink) => (
            <li
              className="text-base font-normal text-grey-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={navlink._id}
            >
              <Link
                activeClass="active"
                to={navlink.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navlink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
