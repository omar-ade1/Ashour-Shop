import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { AddProductToLike } from "../../../store/slices/LikeProductSlice";
import { AddCount, AddToCart } from "../../../store/slices/CartProduct";
import { useEffect, useState } from "react";
import {motion} from "framer-motion"

const ProductPart = ({ product }) => {

  // Redux State For Liked Product
  const likedItems = useSelector((state) => state.Slice);
  const dispatch = useDispatch();

  // For Liked Product
  const [isLiked,setIsLiked] = useState(false)


  // ALERT WHEN CLICK ON ADD TO CART
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: false,
    width: 450,
    timer: 1500,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });


  // Check If Product Is In The LikedList
  const Check_Product_In_Liked_list = likedItems.find((pro) => {
      return pro.id == product.id
    })
  
  // Set Liked Products When Open The Page
  useEffect(() => {
    if (Check_Product_In_Liked_list ==undefined) {
      setIsLiked(false)
    } else {
      setIsLiked(true)
    }
  })

  // Cart
  const CartProduct = useSelector(state => state.Cart)
  const [isInCart, setIsInCart] = useState(false)

  const Check_Product_In_Cart = CartProduct.find((pro) => {
    return pro.id == product.id
  })
  // Set Liked Products When Open The Page
  useEffect(() => {
    if (Check_Product_In_Cart ==undefined) {
      setIsInCart(false)
    } else {
      setIsInCart(true)
    }
  })

  return (
    <div className="product border hover:shadow-2xl relative rounded-lg p-2 transition-all duration-200">
      <div className="image w-fit m-auto py-4">
        <img className="h-[200px]" src={product.image} alt="product" />
      </div>
      <div className="title mt-3 min-h-[40px] max-h-[40px]">
        <Link
          to={`/product/${product.id}`}
          className="px-2 block truncate z-10 before:content-[''] before:absolute before:[#ffffff00] before:h-full before:w-full before:top-0 before:left-0 "
        >
          {product.title}
        </Link>
      </div>
      <div className="price">
        <p className="text-3xl px-2 font-bold text-[#2B3C88]">${product.price}</p>
      </div>
      <div className="rating-love flex justify-between items-center">
        <p className="font-bold">{product.rating.rate}/5</p>
        <motion.div
          whileTap={{ scale: 1.2 }}
          whileHover={{scale:1.1}}
        >
        <FontAwesomeIcon
          onClick={() => {
            dispatch(AddProductToLike(product));
            
            //  If Product Is In The LikedList Set State To True To Change Bg For Liked Icon
            if (Check_Product_In_Liked_list == undefined) {
              setIsLiked(true)
            }
            // If Product Is Not In The LikedList Set State To False To Change Bg For Liked Icon
            else {
              setIsLiked(false)
            }

            // Alert When Add Product In To Liked List
            Toast.fire({
              icon: "success",
              title: isLiked ? "Successfully Removed From Your Favourite" : "Successfully Added To Your Favourite",
            });
          }}
          className={`${
            isLiked ? "bg-[#2B3C88] text-red-600" : ""
          } text-2xl relative hover:text-red-500 p-2 border border-[#2B3C88] text-[#2B3C88] rounded-full cursor-pointer  transition-all duration-200`}
          icon={faHeart}
        />
        </motion.div>
      </div>
      <div
        onClick={() => {
          
          dispatch(AddToCart(product));
          dispatch(AddCount())
            
          //  If Product Is In The LikedList Set State To True To Change Bg For Liked Icon
            setIsInCart(true)
          
          
          if (!isInCart) {
            Toast.fire({
              icon: "success",
              title: "successfully added to your cart",
            });
          }

          
        }}
        className={`add-to-cart ${isInCart? "cursor-no-drop opacity-40 bg-red-400 text-white" : "hover:bg-red-500 hover:text-white"} cursor-pointer relative flex items-center justify-around mx-2 my-3 py-2 rounded border border-red-600 text-red-600  transition-all duration-200`}
      >
        <FontAwesomeIcon className="text-xl" icon={faCartShopping} />
        <p className="text-lg font-bold capitalize">add to cart</p>
      </div>
    </div>
  );
};

export default ProductPart;
