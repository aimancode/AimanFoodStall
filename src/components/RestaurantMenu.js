import { useEffect, useState } from "react";
import { resData } from "../Utils/mockData";
import RestaurantCategories from "./RestaurantCategories";
import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    // const params = useParams();
    // console.log(params);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const menuData = { resData };
        setResInfo(menuData.resData.data.cards[0]);
    };

    if (resInfo === null) return <Shimmer />
    const itemCards = resInfo?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

    const categories = resInfo?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);


    return (

        <div className="text-center ">
            {categories.map((category, idx) => (
                <RestaurantCategories
                    key={category?.card?.card?.id || idx}
                    data={category?.card?.card}
                />
            ))}


            {/* <ul>
            {itemCards.map((item) => (
                <li className=" cursor-pointer p-4 m-4 hover:bg-white-200 w-[400px]" key={item.card.info.id}>
                    {item.card.info.name} - {item.card.info.defaultPrice}
                    <br />
                </li>
            ))}
        </ul> */}
        </div>
    );
};
export default RestaurantMenu;