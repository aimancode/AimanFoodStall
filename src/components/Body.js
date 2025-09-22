import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
// import Footer from "./components/Footer";


const Body = () => {
      const [listofRestaurants, setListofRestaurants] = useState([]);
      const [filteredRestaurants, setFilteredRestaurants] = useState([])
      const [searchText, setSearchText] = useState("");

      const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

      useEffect(() => {
            // Fetch data when the component mounts
            const fetchData = async () => {
                  try {
                        const response = await fetch(
                              "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
                        );
                        const json = await response.json();
                        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                  } catch (error) {
                        console.error("Error fetching restaurant data:", error);
                  }
            };



            fetchData();
      }, []);



      const filterTopRated = () => {
            const filteredList = listofRestaurants.filter(res => {
                  return res.info.avgRating > 4.5;
            });
            setFilteredRestaurants(filteredList);
      };

      const onlineStatus = useOnlineStatus();

if (onlineStatus === false)
      return (
            <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
                  looks like you are offline !!
                  Please Check Your Internet Connection.
            </h1>
);


      return (
            <div className="body">
                  <div className="filter flex">
                        <div className="search m-4 p-4">
                              <input className="searchBox border border-solid border-black" type="text" value={searchText} onChange={(e) => {
                                    setSearchText(e.target.value);
                              }} />
                              <button
                               className="px-4 py-2 bg-green-100 m-4 rounded-lg"

                                    onClick={() => {
                                          const filteredRestaurants = listofRestaurants.filter((res) => 
                                                { return res.info.name.toLowerCase().includes(searchText.toLowerCase()) }
                                          );
                                          setFilteredRestaurants(filteredRestaurants);
                                    }}>
                                    Search
                              </button>

                        </div >
                        <div className="search m-4 p-4 flex items-center" >
                        <button onClick={filterTopRated}
                        className="px-4 py-2 bg-gray-100 m-4 rounded-lg">
                              Top Rated Restaurants
                        </button>
                        </div>
                  </div>
                  <div/>
                  <div className="flex flex-wrap">
                        {filteredRestaurants.length === 0 ? (
                              <Shimmer />
                        ) : (
                        filteredRestaurants.map((restaurant) => (
                                    <Link 
                                    key={restaurant?.info?.id}
                                    to="<RestaurantMenu/>">
                                         
                                          {/* if restaurant is promoted then add a promoted label to it  */}
                                         
                                          {restaurant?.info?.availability?.opened ? (<RestaurantCardPromoted resData={restaurant}/>):
                                          ( <RestaurantCard resData={restaurant}/>)
                                          }
                                          </Link>
                              ))
                        )}
                  </div>
            </div>
      );
};

export default Body;

