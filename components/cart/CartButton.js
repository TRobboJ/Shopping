import styles from './CartButton.module.scss';
// import {uiActions} from '../../store/ui-slice';
import { useSelector, useDispatch } from 'react-redux';
import { openMenu, closeMenu } from '../../store/hamburgerSlice'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const menuIsOpen = useSelector(state=>state.hamburger.menuIsOpen)
  // const cartQuantity = useSelector(state=>state.cart.totalQuantity)
  const cartQuantity = 0

  const toggleCartHandler = () => {
    // dispatch(uiActions.toggleCart())
    
  }

  function testReducers() {
    if (menuIsOpen) {
      dispatch(closeMenu())
    }
    if (!menuIsOpen) {
      dispatch(openMenu())
    }
    console.log(menuIsOpen)
  }


  return (
    <button className={styles.button} onClick={testReducers}>
      <span>Cart</span>
      {cartQuantity > 0 && <span className={styles.badge}>{cartQuantity}</span>}
    </button>
  );
};

export default CartButton;
