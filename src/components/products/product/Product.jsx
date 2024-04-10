import { useEffect, useState } from "react";
import axios from "axios";
import AllProductSkeleton from "../../Skeleton/AllProductSkeleton";
import ProductPart from "./ProductPart";

const Product = () => {
  const [dataProduct, setDataProduct] = useState([]);



  // FETCH PRODUCTS DATA
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then((res) => setDataProduct(res.data));
  }, []);

  
  return (
    <>
      {dataProduct.length > 0 ? (
        <div className="mt-7">
          <div className="container">
            <div className="container-products grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3">
              {dataProduct.map((product, index) => {
                return (
                  <ProductPart product={dataProduct[index]} key={index}/>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <AllProductSkeleton />
      )}
    </>
  );
};

export default Product;
