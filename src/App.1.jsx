import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./components/layout/Header/Header";
import SideBar from "./components/layout/SideBar/SideBar";
import ProductsPage from "./components/products/productsPage/ProductsPage";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className={`${showSideBar ? "h-screen overflow-hidden" : ""}`}>
      <div
        className={`overLay ${
          showSideBar ? "" : "opacity-0 -z-10"
        } transition-all duration-300 w-screen h-screen fixed top-0 left-0 bg-[#0000009c] z-[200]`}
      ></div>
      <Header>
        <FontAwesomeIcon
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
          className="text-xl hidden smMdT0:block"
          icon={faBars}
        />
      </Header>
      <div className="shop pt-[100px] flex gap-10">
        <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <ProductsPage />
      </div>
    </div>
  );
}
