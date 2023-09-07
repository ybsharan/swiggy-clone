import { ITEM_IMG_CDN_URL } from '../constants';

const FoodItem = ({ name, description, imageId, price }) => {
  return (
    <div className='cart-items-list'>
      <div className='cart-item-details'>
        <h3 className='cart-item-title'>{name}</h3>
        <p className='cart-item-cost'>
          {price > 0
            ? new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
              }).format(price / 100)
            : ' '}
        </p>
        <p className='cart-item-desc'>{description}</p>
      </div>
      <div className='cart-img-wrapper'>
        <img className='menu-item-img' src={ITEM_IMG_CDN_URL + imageId} />
        <button className='remove-btn'>Remove</button>
      </div>
    </div>
  );
};

export default FoodItem;
