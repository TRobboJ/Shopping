import styles from './CartButton.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../store/cartSlice';

const CartButton = () => {
  const dispatch = useDispatch()

  // const cartQuantity = useSelector(state=>state.cart.totalQuantity)
  const cartQuantity = 0

  const toggleCartHandler = () => {
    dispatch(toggleCart())
    
  }

  


  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>Cart</span>
      {cartQuantity > 0 && <span className={styles.badge}>{cartQuantity}</span>}
    </button>
  );
};

export default CartButton;
