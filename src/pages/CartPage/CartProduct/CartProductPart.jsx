import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeCount, RemoveFromCart } from "../../../store/slices/CartProduct";
import Swal from "sweetalert2";
import { AddProductToLike } from "../../../store/slices/LikeProductSlice";
import {motion} from "framer-motion"



const CartProductPart = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [subTotal, setSubTotal] = useState(product.price * quantity);

  const CartProduct = useSelector(state => state.Cart)



  // Redux State For Liked Product
  const likedItems = useSelector((state) => state.Slice);
  const [isLiked, setIsLiked] = useState(false);

  const Check_Product_In_Liked_list = likedItems.find((pro) => {
    return pro.id == product.id;
  });

  // Set Liked Products When Open The Page
  useEffect(() => {
    if (Check_Product_In_Liked_list == undefined) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  });

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




  // todo Bard Ai Helped Me in This
  const handleChangeQuantity = (event) => {
    const newQuantity = +event.target.value;
    setQuantity(newQuantity);
    setSubTotal(newQuantity * product.price);
    dispatch(ChangeCount({ id: product.id, count: newQuantity }));
  };

  
  useEffect(() => {
  setSubTotal(product.price * product.count)
},[])

  const dispatch = useDispatch();

  return (
    <div  className="grid grid-cols-6 gap-4 mdT0:grid-cols-3 mt-6 p-3">
      <div className="image-and-title flex mdT0:flex-col mdT0:items-center col-span-3 gap-10 shadow-xl border rounded">
        <div className="image min-w-[150px] max-w-[150px] p-3">
          <img className="w-full object-fit" src={product.image} alt="prdouct" />
        </div>
        <div className="text p-2">
          <h3 className="font-semibold">{product.title}</h3>
          <motion.div whileHover={{scale:1.2}} whileTap={{scale:1.3}}
            onClick={() => {
              dispatch(AddProductToLike(product));

              //  If Product Is In The LikedList Set State To True To Change Bg For Liked Icon
              if (Check_Product_In_Liked_list == undefined) {
                setIsLiked(true);
              }
              // If Product Is Not In The LikedList Set State To False To Change Bg For Liked Icon
              else {
                setIsLiked(false);
              }

              // Alert When Add Product In To Liked List
              Toast.fire({
                icon: "success",
                title: isLiked ? "Successfully Removed From Your Favourite" : "Successfully Added To Your Favourite",
              });
            }}
            className={`flex gap-3 ${
              isLiked ? "bg-[#2B3C88] text-white" : ""
            } items-center mt-5 cursor-pointer mdT0:mx-auto text-[#2B3C88] border border-[#2B3C88] w-fit p-1 rounded  select-none`}
          >
            <FontAwesomeIcon icon={faHeart} />
            <p>save item</p>
          </motion.div>

          <div
            onClick={() => {
              dispatch(RemoveFromCart(product));
              Toast.fire({
                icon: "success",
                title: "Successfully Removed From Your Cart",
              });


            }}
            className="remove-from-cart flex mdT0:mx-auto gap-3 items-center mt-5 cursor-pointer text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition duration-200 w-fit p-1 rounded"
          >
            <FontAwesomeIcon icon={faTrash} />
            <p>remove item</p>
          </div>
        </div>
      </div>

      <div className="quantity flex justify-center items-center shadow-xl border rounded">
        <motion.select whileHover={{scale:1.2}}
          className="border rounded p-2"
          onChange={(event) => {
            handleChangeQuantity(event)
          }}
          name="quantity"
          id="quantity"
          defaultValue={product.count}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
            return (
              <option key={num} value={num}>
                {num}
              </option>
            );
          })}
        </motion.select>
      </div>

      <div className="unit-price flex justify-center items-center shadow-xl border rounded text-xl px-2 font-bold ">${product.price}</div>

      <div className="sub-total flex justify-center items-center shadow-xl border rounded text-[#2B3C88] text-2xl mdT0:text-xl px-2 font-bold">
        ${subTotal.toFixed(2)}
      </div>
      </div>
  );
};

export default CartProductPart;
