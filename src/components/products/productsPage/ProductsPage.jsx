import SortPart from "../SortPart/SortPart"
import Related from "../related/Related"
import { Outlet } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div className="border w-full p-3">
      <SortPart />
      <Related />
      <Outlet />
    </div>
  )
}

export default ProductsPage