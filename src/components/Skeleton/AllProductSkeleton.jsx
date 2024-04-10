import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const AllProductSkeleton = () => {
  return (
    <div>
      <div className="mt-7">
        <div className="container">
          <div className="container-products grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => {
              return (
                <div key={i} className="product border hover:shadow-2xl relative rounded-lg p-2 transition-all duration-200">
                  <div className="image w-full h-[200px] m-auto py-4">
                    <Skeleton className="w-full h-full" />
                  </div>
                  <div className="title mt-3 min-h-[40px] max-h-[40px]">
                    <div
                      to={``}
                      className="px-2 block truncate z-10 before:content-[''] before:absolute before:[#ffffff00] before:h-full before:w-full before:top-0 before:left-0 "
                    >
                      <Skeleton />
                    </div>
                  </div>
                  <div className="price">
                    <p className="text-xl px-2 font-bold w-[100px] text-[#2B3C88]">
                      <Skeleton />
                    </p>
                  </div>
                  <div className="rating-love flex justify-between items-center">
                    <p className="font-bold w-1/2">
                      <Skeleton />{" "}
                    </p>
                    <div className="w-[30px] h-[30px]">
                      {" "}
                      <Skeleton className="w-full h-full" circle />
                    </div>
                  </div>
                  <div className="add-to-cart w-[200px] mx-auto my-3">
                    <Skeleton className="w-full h-full py-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductSkeleton;
