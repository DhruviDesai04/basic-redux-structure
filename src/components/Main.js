import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("**data in main", data);
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

      <div>
        <button onClick={() => dispatch(productList())}>
          Get Product List
        </button>
      </div>
    </div>
  );
}

export default Main;
