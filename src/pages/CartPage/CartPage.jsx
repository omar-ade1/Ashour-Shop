import { Link } from "react-router-dom";
import CartProduct from "./CartProduct/CartProduct";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.25,
    },
  },
  exit: {
    opacity: 0,
  },
};

const CartPage = () => {
  const CartItems = useSelector((state) => state.Cart);
  const [result, setResult] = useState();
  useEffect(() => {
    let listOfPrices = [];
    CartItems.forEach((pro) => {
      listOfPrices.push(pro.count * pro.price);
    });
    const resultListOfPrices = listOfPrices.reduce((a, c) => {
      return a + c;
    }, 0);
    setResult(resultListOfPrices.toFixed(2));
  }, [CartItems]);

  return (
    <div className="mt-7">
      <AnimatePresence>
        {CartItems.length ? (
          <motion.div variants={variants} initial="hidden" animate="show" exit="exit">
            <div className="grid grid-cols-6 gap-4 mdT0:hidden">
              <h3 className="text-xl font-bold capitalize ml-3 col-span-3">item</h3>
              <h3 className="text-xl font-bold capitalize ml-3">Quantity</h3>
              <h3 className="text-xl font-bold capitalize ml-3">Unit Price</h3>
              <h3 className="text-xl font-bold capitalize ml-3">Sub-total</h3>
            </div>
            <CartProduct />
            <div className="links-and-total-price w-fit ml-auto mr-3 mt-5">
              <div className="total text-3xl font-bold">
                Total: <span className="ml-2  text-[#2B3C88]">${result}</span>
              </div>
              <div className="links flex gap-5 mt-5">
                <Link className="block bg-[#edf2f7] hover:bg-[#E2E8F0] transition duration-200 shadow-xl border font-semibold p-2 rounded" to="/">
                  Countinue Shopping
                </Link>
                <Link className="block text-white bg-red-500 hover:bg-red-600 transition duration-200 shadow-xl border font-semibold p-2 rounded">
                  Checkout
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div variants={variants} initial="hidden" animate="show" exit="exit" className="w-fit mx-auto">
            <p className="text-xl capitalize mb-5 text-[#777]">no items in your cart</p>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link className="block w-fit bg-[#edf2f7] hover:bg-[#E2E8F0] transition duration-200 shadow-xl border font-semibold p-2 rounded" to="/">
                Countinue Shopping
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartPage;
