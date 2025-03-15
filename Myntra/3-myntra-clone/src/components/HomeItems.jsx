import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { IoIosAddCircle } from "react-icons/io";
import { IoRemoveCircle } from "react-icons/io5";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button className="btn btn-add-bag btn-danger" onClick={handleRemove}>
          <IoRemoveCircle />
          Remove
        </button>
      ) : (
        <button
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          <IoIosAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItems;
