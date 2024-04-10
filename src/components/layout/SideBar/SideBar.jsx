import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SideBar = (props) => {
  const [data, setData] = useState([
    {
      "id": "a929",
      "title": "Health and Beauty",
      "opened": false,
      "nameOfCat": ["Make up", "Hair Care", "Health Care", "Fragrances"]
    },
    {
      "id": "a929",
      "title": "Home And Office",
      "opened": false,
      "nameOfCat": ["Office Products", "Large Appliances", "Furniture", "Small Appliances"]
    },
    {
      "id": "a929",
      "title": "Phones And Tablets",
      "opened": false,
      "nameOfCat": ["Mobile Phones", "Tablets", "Mobile Accessories"]
    },
    {
      "id": "a929",
      "title": "computing",
      "opened": false,
      "nameOfCat": ["Computers", "Data Storage", "Computer Accessories", "Printers"]
    },
    {
      "id": "a929",
      "title": "Electronics",
      "opened": false,
      "nameOfCat": ["Television & Video", "Cameras & Photos", "Home Audio", "Generators & Portable Power"]
    },
    {
      "id": "a929",
      "title": "Fashion",
      "opened": false,
      "nameOfCat": ["Women's Fashion", "Men's Fashion", "Watches", "Sunglasses"]
    },
    {
      "id": "a929",
      "title": "Gaming",
      "opened": false,
      "nameOfCat": ["Playstation", "Xbox", "Nintendo"]
    },
  ]);

  const handleOpen = (index) => {
    const newData = [...data];
    newData[index] = { ...newData[index], opened: !newData[index].opened };
    setData(newData);
  };


  const [mediaCheckerForMenuLinks] = useState(window.matchMedia("(max-width: 860px)"));
  
  // FOR IF (The Menu Is Opend And The User Resize The Window ) => Close The Menu {Others And Links}
  useEffect(() => {
    const handleResize = () => {
      if (!mediaCheckerForMenuLinks.matches) {
        props.setShowSideBar();(false)
      }
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize",handleResize)
    }

  },[mediaCheckerForMenuLinks])






  // useEffect(() => {
  //   axios.get("http://localhost:3000/category").then((res) => setData(res.data));
  // }, []);

  return (
    <>
      <div
        className={`sideBar pl-3 w-[200px] smMdT0:min-h-screen smMdT0:fixed ${
          props.showSideBar ? "smMdT0:w-[200px] z-[1000]" : "smMdT0:w-[0px] smMdT0:pl-0"
        }  bg-white top-0 transition-all duration-300 overflow-hidden `}
      >
        {/*  */}
        <div className="items-center hidden smMdT0:flex gap-3 mb-3">
          <FontAwesomeIcon
            onClick={() => {
              props.setShowSideBar();
            }}
            className="text-2xl hover:bg-[#eee] px-2 rounded cursor-pointer text-red-600"
            icon={faXmark}
          />
          <h1 className="font-bold text-2xl text-[#32469B] ">Ashour</h1>
        </div>
        {/*  */}
        <h3 className="text-[#32469B] font-bold">All Categories</h3>
        <div className="categories mt-3 divide-y-2 divide-[#fff]">
          {data.map((cat, index) => {
            return (
              <div
                onClick={() => {
                  handleOpen(index);
                }}
                key={index}
                className="category"
              >
                <div className="title p-2 flex hover:bg-[#ddd] justify-between items-center cursor-pointer ">
                  <h4 className="text-[#4A5568]">{cat.title}</h4>
                  <span
                    className={` text-[#4A5568] ${cat.opened == true ? "rotate-0" : "rotate-180"} transition-all duration-500`}
                  >^</span>
                </div>
                <div
                  className={`links-of-category ${
                    cat.opened == true ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  } transition-all duration-500 overflow-hidden `}
                >
                  {cat.nameOfCat.map((link, index2) => {
                    return (
                      <div className="pl-5 py-1 divide-y-2" key={index2}>
                        <Link className="block hover:underline decoration-[.5px] font-light  ">{link}</Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
