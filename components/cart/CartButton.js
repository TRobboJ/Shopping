import styles from './CartButton.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../store/cartSlice';
import { closeMenu } from '../../store/hamburgerSlice';
import { FaShoppingCart } from 'react-icons/fa'

const CartButton = () => {
  const dispatch = useDispatch()

  const {cartQuantity} = useSelector(state=>state.cart)

  const toggleCartHandler = () => {
    dispatch(toggleCart())
    dispatch(closeMenu())
  }

  


  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span><FaShoppingCart /> Cart</span>
      {cartQuantity > 0 && <span className={styles.badge}>{cartQuantity}</span>}
    </button>
  );
};

export default CartButton;
