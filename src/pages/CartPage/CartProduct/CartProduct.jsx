import {useSelector} from "react-redux"
import CartProductPart from "./CartProductPart";

const CartProduct = () => {

  const CartProduct = useSelector(state => state.Cart)

  
  return (
    <div>
      {CartProduct.map((pro) => {
        return (
          <CartProductPart key={pro.id} product={pro} />
        )
      })}
    </div>
  )
}

export default CartProduct