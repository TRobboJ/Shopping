import styles from './CartButton.module.scss';
// import {uiActions} from '../../store/ui-slice';
// import { useSelector, useDispatch } from 'react-redux';

const CartButton = (props) => {
//   const dispatch = useDispatch()
//   const cartQuantity = useSelector(state=>state.cart.totalQuantity)
    const cartQuantity = 0
  const toggleCartHandler = () => {
    // dispatch(uiActions.toggleCart())
    
  }
  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
