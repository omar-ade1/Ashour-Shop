import { useSelector } from "react-redux";
import ProductPart from "../../components/products/product/ProductPart";

const SavedPage = () => {
  const likedProducts = useSelector((state) => state.Slice);
  return (
    <div className="mt-7">
      <div className="container">
      {likedProducts.length ?
        (
          <div className="container-products grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-3">
            {likedProducts.map((product,index) => {
              return (
                <ProductPart product={product} key={index}/>
              )
            })}
        </div>
        )
      :
        (
        <h1 className="text-xl text-[#777] capitalize text-center">No saved items</h1>
        )
      }
      </div>
    </div>
  );
};

export default SavedPage;
