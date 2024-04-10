import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Header from "./components/layout/Header/Header";
import SideBar from "./components/layout/SideBar/SideBar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import Footer from "./components/layout/Footer/Footer";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    showSideBar ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    return () => {
      document.body.style.overflow = "auto" 
    }
  },[showSideBar])

// let state = 

  return (
    <SkeletonTheme baseColor="#eee" highlightColor="#ddd">
      <div className={`${showSideBar ? "max-h-screen" : ""}`}>
        
        <div
          onClick={() => setShowSideBar(false)}
          className={`overLay ${
            showSideBar ? "z-[200]" : "opacity-0 -z-10"
          } transition-all duration-300 w-screen h-screen fixed top-0 left-0 bg-[#0000009c]`}
        ></div>
        <Header>
          <FontAwesomeIcon
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
            className="text-xl hidden smMdT0:block cursor-pointer"
            icon={faBars}
          />
        </Header>
        <div className="shop pt-[130px] pb-[50px] flex gap-10">
          <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
          <Outlet />
        </div>
        <Footer />
      </div>
    </SkeletonTheme>
  );
}

export default App;
