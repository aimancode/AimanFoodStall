import { CDN_URL } from "../Utils/constants.js";
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all ">
            <div>
        <img
          className="w-[250px] h-[150px] rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="Biryani"
        />
      </div>

            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <hr />
            <em>{cuisines.join(', ')}</em>
            <h4 className="avg-rating">
                <span className="icons">
                    <AiOutlineStar />
                </span>
                <span>{avgRating} stars</span>
            </h4>
            <h4 className="item-price">
                <span>{costForTwo}</span>
            </h4>
            <h4 className="time">
                <span className="icons">
                    <FiClock />
                </span>
                {deliveryTime}
            </h4>
        </div>
    );
};

// higher order function
// input - restaurantCArd  =>restaurentCardPromoted
export const  withPromotedLabel = (RestaurantCard) =>{
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-black text-white p-2 m-2 rounded-lg">opened</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;