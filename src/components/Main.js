import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "IPhone15",
    type: "mobile",
    price: "100000",
    color: "black",
  };
  return (
    <div>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>
          Remove from cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>
    </div>
  );
}

export default Main;
