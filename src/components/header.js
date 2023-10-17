import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.log("***result", result);
  return (
    <div>
      <div className="cart-div">
        <span>{result.length}</span>
      </div>
    </div>
  );
};

export default Header;
