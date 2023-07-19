import React, { useState } from "react";
import { Logo } from "../../assets/index";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  /* console.log(showMenu); */

  return (
    <div className="w-full h-24 mx-auto max-w-screen-xl px-5 sticky top-0 bg-bodyColor z-50 flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={Logo} width={100} height={100} alt="logo" />
      </div>
      <div>
        <ul className="hidden mdl:flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-grey-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 flex items-center justify-center rounded-full
         text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-hidden absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
            >
              <MdClose className="w-8 h-8 flex justify-end" />
            </span>

            <ul className="flex flex-col gap-16 text-center pt-20">
              {navLinksdata.map((item) => (
                <li
                  key={item._id}
                  className="text-base font-normal text-grey-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  
                >
                  <Link
                    onClick={()=>setShowMenu(false)}
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
