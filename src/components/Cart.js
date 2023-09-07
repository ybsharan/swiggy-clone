import { useSelector, useDispatch } from 'react-redux';
import FoodItem from './FoodItem';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h3>Cart Items</h3>
      <button className='btn' onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      <div className='all-cart-items'>
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
