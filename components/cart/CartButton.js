import styles from "./CartButton.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../store/cartSlice";
import { closeMenu } from "../../store/hamburgerSlice";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";

const CartButton = () => {
  const [buttonBump, setButtonBump] = useState(false);
  const dispatch = useDispatch();
  const { cartQuantity } = useSelector((state) => state.cart);

  const toggleCartHandler = () => {
    dispatch(toggleCart());
    dispatch(closeMenu());
  };

  useEffect(() => {
    if (cartQuantity === 0) return;
    setButtonBump(true);

    const timer = setTimeout(() => {
      setButtonBump(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [cartQuantity]);

  const buttonClass = `${styles.button} ${buttonBump ? styles.bump : ""}`;

  return (
    <button className={buttonClass} onClick={toggleCartHandler}>
      <span>
        <FaShoppingCart /> 
      </span>
      {cartQuantity > 0 && <span className={styles.badge}>{cartQuantity}</span>}
    </button>
  );
};

export default CartButton;
