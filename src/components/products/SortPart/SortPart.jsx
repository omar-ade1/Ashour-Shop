import { NavLink } from "react-router-dom";
import "./sortPart.css";
import { useSelector } from "react-redux";
import {motion,AnimatePresence} from "framer-motion"
const SortPart = () => {

  const likedItems = useSelector((state) => state.Slice);
  const CartProduct = useSelector(state => state.Cart)


  


  return (
    <div>
      <h4 className="text-sm uppercase">Sort By</h4>
      <div className="sort-and-pages mt-4 flex mdT0:flex-col mdT0:items-stretch mdT0:gap-y-5 justify-between items-center">
        <div className="sort flex smMdT0:justify-center flex-wrap items-center gap-3 smMdT0:text-sm">
          <select className="selectSort" name="category" id="sort_by_category">
            <option value="category">category</option>
          </select>

          <select className="selectSort" name="shipping" id="sort_by_shipping">
            <option value="shipping">shipping</option>
          </select>

          <select className="selectSort" name="delivery options" id="sort_by_delivery_options">
            <option value="delivery options">delivery options</option>
          </select>
        </div>

        <div className="links_to_pages">
          <ul className="flex smMdT0:mx-auto gap-2 w-fit smMdT0:text-sm rounded bg-[#E9EEFF]">
            <li>
              <NavLink className="block capitalize p-[6px] px-[20px]" to="/">
                showAll
              </NavLink>
            </li>
            <li>
              <NavLink className={`block relative capitalize p-[6px] px-[20px]`} to="/saved">
                saved
              <AnimatePresence>
                  {likedItems.length == 0 ? "" : <motion.span initial={{scale: 0}} animate={{scale:1}} exit={{scale:0}} className="absolute top-0 right-0 bg-red-500 w-[20px] h-[20px] rounded-full flex justify-center items-center text-white font-bold">{likedItems.length}</motion.span>}
              </AnimatePresence>
              </NavLink>
            </li>
            <li>
              <NavLink className="block relative capitalize p-[6px] px-[20px]" to="/cart">
                buy now
                <AnimatePresence>
                  {CartProduct.length == 0 ? "" : <motion.span initial={{scale: 0}} animate={{scale:1}} exit={{scale:0}} className="absolute top-0 right-0 bg-red-500 w-[20px] h-[20px] rounded-full flex justify-center items-center text-white font-bold">{CartProduct.length}</motion.span>}
              </AnimatePresence>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SortPart;
