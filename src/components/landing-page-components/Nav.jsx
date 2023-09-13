import { useState } from "react";
import logo from "../../assets/logo.svg";
import { BsSearch } from "react-icons/bs";
import { TbMenu } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="absolute right-0 left-0 top-0">
      <div className="container">
        <div className="h-[80px] flex items-center justify-between">
          <a href="/" className="flex items-center gap-4">
            <img src={logo} alt="logo" />
            <span className="text-2xl font-bold text-[#ffffff]">MovieBox</span>
          </a>

          <div className="border border-[#ffffff] text-[#FFFFFF] lg:flex w-[50%] h-[50px] rounded-lg overflow-hidden hidden">
            <input
              type="text"
              placeholder="What do you want to watch?"
              className="flex-1 h-full px-3 outline-none bg-transparent"
            />
            <div className="w-[10%] flex items-center justify-center text-[#ffffff]">
              <BsSearch fontSize={20} />
            </div>
          </div>

          <div className="flex items-center gap-4 text-[#ffffff]">
            <a href="#">Sign in</a>

            <div className="h-[35px] w-[35px] bg-[#BE123C] text-white flex items-center justify-center rounded-[50%] cursor-pointer">
              {open ? (
                <AiOutlineClose fontSize={25} onClick={toggleClick} />
              ) : (
                <TbMenu fontSize={25} onClick={toggleClick} />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
