import { useCart } from "../context/CartContext";
import "./CartCard.css";

export const CartCard = ({ product }) => {
  const { name, price, image } = product;
  const { removeFromCart, productCount } = useCart();

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <p>{productCount}</p>
      <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  );
};