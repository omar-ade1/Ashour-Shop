import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <header className="shadow-xl fixed w-full left-0 z-[100] bg-white">
      <div className="container py-5 flex flex-wrap justify-between items-center">
        <div className="logo order-1 flex items-center gap-2">
          {children}
          <Link to="/"><h1 className="font-bold text-3xl text-[#32469B] ">Ashour</h1></Link>
        </div>

        <div className="search order-2 xsm:order-4 xsm:w-full xsm:mt-5 relative w-[300px]">
          <FontAwesomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777]" icon={faMagnifyingGlass} />
          <input 
            className="pl-10 pr-2 py-[2px] bg-[#EBEBEB] w-full rounded-full text-lg  placeholder:text-[#777] border-2 focus:outline-none focus:border-[#32469B] duration-300"
            type="search"
            placeholder="Search Items"
          />
        </div>

        <div className="tools order-3 flex items-center gap-4">
          <div className="sign-in-button">
            <Link to="/sign-in" className="block py-[2px] px-[10px] text-[#32469B] font-bold rounded border-2 border-[#32469B] hover:bg-[#32469B] hover:text-white duration-300">
              Sign in
            </Link>
          </div>
          <NavLink to="/cart" className="cart-icon block">
            <FontAwesomeIcon className="text-2xl text-[#a0aec0] hover:text-[#32469B] duration-300 cursor-pointer" icon={faCartShopping} />
          </NavLink>
          <div className="profill">
            <FontAwesomeIcon className="text-2xl text-[#a0aec0] hover:text-[#32469B] duration-300 cursor-pointer" icon={faUser} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
