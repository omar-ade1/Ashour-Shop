import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./nav.css";
// ANIMATION FOR PARENT ELEMENT THAT CONTAINS MANY CHILD
const variantsParent = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
// ANIMATION FOR CHILD ELEMENT TO DROP FROM TOP TO ORGINAL POSITION
const variantsChild = {
  hidden: {
    y: "-100px",
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

// NavBar Component
function Nav() {
  // TRUE => SHOW LINKS  FALSE => HIDE LINKS
  const [showLinks, setShowLinks] = useState(false);

  // TRUE => SHOW OTHERS  FALSE => HIDE OTHERS
  const [showOthers, setShowOthers] = useState(false);

  // THIS FOR ADD OR REMOVE BACKGROUND-COLOR TO HEADER WHEN SCROLL BY CLASS BG-HEADER
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        document.querySelector("header").classList.add("bg-header");
      } else {
        document.querySelector("header").classList.remove("bg-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  // CLOSE THE MENU WHEN CLICK ON OTHER MENU
  useEffect(() => {
    if (showLinks) {
      setShowOthers(false)
    }
    if (showOthers) {
      setShowLinks(false)
    }
  },[showLinks,showOthers])

  // FOR IF (The Menu Is Opend And The User Resize The Window ) => Close The Menu {Others And Links}
  const [mediaCheckerForMenuLinks] = useState(window.matchMedia("(max-width: 639px)"));
  const [mediaCheckerForMenuOthers] = useState(window.matchMedia("(max-width: 1023px)"));
  
  // FOR IF (The Menu Is Opend And The User Resize The Window ) => Close The Menu {Others And Links}
  useEffect(() => {
    const handleResize = () => {
      if (!mediaCheckerForMenuLinks.matches) {
        setShowLinks(false)
      }
      if (!mediaCheckerForMenuOthers.matches) {
        setShowOthers(false)
      }
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize",handleResize)
    }

  },[mediaCheckerForMenuLinks,mediaCheckerForMenuOthers])

  return (
    <>
      <AnimatePresence>
        {/* THIS IS A OVERLAY SHOWED WHEN MENU OF LINKED OPENED */}
        {showLinks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed w-screen h-screen bg-[#00000069] top-0 left-0"
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.header
        variants={variantsParent}
        initial="hidden"
        animate="show"
        className="py-3 mt-5 fixed w-full z-[200] bg-white left-0 transition-colors duration-300"
      >
        <div className="container flex items-center justify-between ">
          {/* START LOGO */}
          <motion.div className="logo xsm:w-[calc(100%-70px)]" variants={variantsChild}>
            <h2 className="text-2xl font-bold">Ashour Store</h2>
          </motion.div>
          {/* END LOGO */}

          {/* START PART OF LINKS AND MENU OF IT */}

          {/* START MENU THAT SHOW FROM 800px TO 0px */}
          <div className="container_of_menu_and_links">
            <motion.div
              onClick={() => setShowLinks(!showLinks)}
              variants={variantsParent}
              initial="hidden"
              animate="show"
              className="iconMenu relative w-[20px] h-[18px] hidden xsm:flex flex-col justify-between items-end group cursor-pointer"
            >
              <motion.span
                variants={variantsChild}
                className={`block w-full rounded-full h-[4px] bg-black transition-all duration-300 ${showLinks ? "span spanOne bg-red-600" : ""}`}
              ></motion.span>
              <motion.span
                variants={variantsChild}
                className={`block w-[10px] group-hover:w-full rounded-full h-[4px] bg-black transition-all duration-300
            ${showLinks ? "opacity-0" : "opacity-100"}
            `}
              ></motion.span>
              <motion.span
                variants={variantsChild}
                className={`block w-full rounded-full h-[4px] bg-black transition-all duration-300 ${showLinks ? "span spanTwo bg-red-600" : ""}`}
              ></motion.span>
            </motion.div>
            {/* END MENU THAT SHOW FROM 800px TO 0px */}

            {/* START LINKS  */}
            <motion.ul
              variants={variantsParent}
              className={`flex xsm:hidden ${showLinks ? "showLinks space-x-0 divide-y-2  divide-[#ababab]" : ""} items-center space-x-5`}
            >
              <motion.li variants={variantsChild}>
                <NavLink to="/" className="navLink">
                  <p>Home</p>
                </NavLink>
              </motion.li>
              <motion.li variants={variantsChild}>
                <NavLink to="/e" className="navLink">
                  <p>contact</p>
                </NavLink>
              </motion.li>
              <motion.li variants={variantsChild}>
                <NavLink to="/e" className="navLink">
                  <p>about</p>
                </NavLink>
              </motion.li>
              <motion.li variants={variantsChild}>
                <NavLink to="/e" className="navLink">
                  <p>sign up</p>
                </NavLink>
              </motion.li>
            </motion.ul>
            {/* END LINKS  */}
          </div>
          {/* END PART OF LINKS AND MENU OF IT */}

          {/* START PART OF OTHERS [SEARCH BAR ,CART AND LIKE] AND MENU OF IT */}
          <div className="container_of_menu_and_others relative">
            {/* MENU THAT SHOW FROM 800px TO 0px */}
            <motion.div
              onClick={() => setShowOthers(!showOthers)}
              variants={variantsParent}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.2 }}
              className="iconMenu relative w-[20px] h-[20px] hidden mdT0:flex flex-col justify-between items-center cursor-pointer hover:bg-slate-100 rounded-full noBorderBox p-[2px] "
            >
              <motion.span variants={variantsChild} className="block w-[5px] rounded-full h-[5px] bg-black"></motion.span>
              <motion.span variants={variantsChild} className="block w-[5px] rounded-full h-[5px] bg-black"></motion.span>
              <motion.span variants={variantsChild} className="block w-[5px] rounded-full h-[5px] bg-black"></motion.span>
            </motion.div>
            {/* END MENU THAT SHOW FROM 800px TO 0px */}

            {/* START OTHRE LIKE SEARCH AND CART */}
            <motion.div variants={variantsParent} className={`other flex justify-between items-center gap-[10px] mdT0:hidden ${showOthers ? "showOthers space-x-0 divide-y-2  divide-[#ababab]" : ""} `}>
              <motion.div variants={variantsChild} className="search relative w-[220px] mdT0:hidden ">
                <input
                  type="search"
                  className=" border bg-[#F5F5F5] py-1 px-2 rounded-md w-full placeholder:text-sm placeholder:text-black placeholder:opacity-[.6] focus:outline-none focus:border-green-300"
                  placeholder="what are you looking for ?"
                />

                <motion.div
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex justify-center items-center "
                  animate={{ translateY: "-50%" }}
                  whileTap={{
                    scale: 1.3,
                    originX: 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[13px]" />
                </motion.div>
              </motion.div>

              <motion.div variants={variantsChild} className="like cursor-pointer transition-all duration-300 hover:bg-red-100 p-1 rounded-2xl ">
                <FontAwesomeIcon icon={faHeart} />
              </motion.div>

              <motion.div variants={variantsChild} className="cart cursor-pointer transition-all duration-300 hover:bg-red-100 p-1 rounded-2xl ">
                <FontAwesomeIcon icon={faCartShopping} />
              </motion.div>
            </motion.div>
            {/* END OTHRE LIKE SEARCH AND CART */}
          </div>
          {/* END PART OF OTHERS [SEARCH BAR ,CART AND LIKE] AND MENU OF IT */}
        </div>
        <hr className="mt-5 border-t-[2px] " />
      </motion.header>
    </>
  );
}

export default Nav;
