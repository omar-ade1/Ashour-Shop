import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
import { useSelector, useDispatch } from "react-redux";
import { AddProductToLike } from "../../store/slices/LikeProductSlice";
import { AddToCart } from "../../store/slices/CartProduct";

const ProductPage = () => {
  const { id } = useParams();
  const [dataProduct, setDataProduct] = useState([]);

  const likedItems = useSelector((state) => state.Slice);
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  // Check If Product Is In The LikedList
  const Check_Product_In_Liked_list = likedItems.find((pro) => {
    return pro.id == dataProduct.id;
  });

  useEffect(() => {
    if (Check_Product_In_Liked_list == undefined) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  });

  // Cart

  const [isInCart, setIsInCart] = useState(false);

  const CartProduct = useSelector((state) => state.Cart);

  const Check_Product_In_Cart = CartProduct.find((pro) => {
    return pro.id == dataProduct.id;
  });
  // Set Liked Products When Open The Page
  useEffect(() => {
    if (Check_Product_In_Cart == undefined) {
      setIsInCart(false);
    } else {
      setIsInCart(true);
    }
  });

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => setDataProduct(res.data));
  }, [id]);

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: false,
    timer: 1500,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  return (
    <>
      {dataProduct.image ? (
        <div className="productPage p-5 border-l-2 w-full">
          <div className="image-text flex xsm:flex-col items-center gap-2 ">
            <div className="img border-r px-4">
              <img className="w-[200px]" src={dataProduct.image} alt="product" />
            </div>
            <div className="text">
              <h3 className="font-bold text-lg">{dataProduct.title}</h3>
              <div className="size flex items-center gap-2 my-5">
                <h4 className="text-lg font-semibold">size: </h4>
                <span className="flex justify-center items-center font-semibold uppercase rounded cursor-pointer hover:bg-[#777] duration-200 hover:text-white w-[30px] h-[30px] p-2 bg-[#eee]">
                  s
                </span>
                <span className="flex justify-center items-center font-semibold uppercase rounded cursor-pointer hover:bg-[#777] duration-200 hover:text-white w-[30px] h-[30px] p-2 bg-[#eee]">
                  m
                </span>
                <span className="flex justify-center items-center font-semibold uppercase rounded cursor-pointer hover:bg-[#777] duration-200 hover:text-white w-[30px] h-[30px] p-2 bg-[#eee]">
                  l
                </span>
                <span className="flex justify-center items-center font-semibold uppercase rounded cursor-pointer hover:bg-[#777] duration-200 hover:text-white w-[30px] h-[30px] p-2 bg-[#eee]">
                  xl
                </span>
              </div>
              <div className="price text-3xl px-2 font-bold text-[#2B3C88]">${dataProduct.price}</div>
              <div className="rating-love flex justify-between items-center">
                {dataProduct.rating && <p className="font-bold">{dataProduct.rating.rate}/5 </p>}
                <FontAwesomeIcon
                  onClick={() => {
                    dispatch(AddProductToLike(dataProduct));

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
                  className={`${
                    isLiked ? "bg-[#2B3C88] text-red-600" : ""
                  } text-2xl relative hover:text-red-500 p-2 border border-[#2B3C88] text-[#2B3C88] rounded-full cursor-pointer  transition-all duration-200`}
                  icon={faHeart}
                />
              </div>
              <div
                onClick={() => {
                  // Add Product To Cart Redux State
                  dispatch(AddToCart(dataProduct));

                  //  If Product Is In The LikedList Set State To True To Change Bg For Liked Icon
                  setIsInCart(true);

                  if (!isInCart) {
                    Toast.fire({
                      icon: "success",
                      title: "successfully added to your cart",
                    });
                  }
                }}
                className={`add-to-cart ${
                  isInCart ? "cursor-no-drop opacity-40 bg-red-400 text-white" : "hover:bg-red-500 hover:text-white"
                } cursor-pointer relative flex items-center justify-around mx-2 my-3 py-2 rounded border border-red-600 text-red-600  transition-all duration-200`}
              >
                <FontAwesomeIcon className="text-xl" icon={faCartShopping} />
                <p className="text-lg font-bold capitalize">add to cart</p>
              </div>
            </div>
          </div>
          <div className="description mt-5 border p-2 rounded max-w-[600px]">
            <h3 className="text-2xl font-bold">Description</h3>
            <p className="font-light">{dataProduct.description}</p>
          </div>
        </div>
      ) : (
        <ProductSkeleton />
      )}
    </>
  );
};

export default ProductPage;
