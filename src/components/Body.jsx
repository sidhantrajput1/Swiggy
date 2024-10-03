import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const Body = () => {
  
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4309684&lng=77.5060438&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const json = await response.json();
        
       
        console.log(json);

      
        const restaurants = json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (restaurants) {
          setListOfRestaurants(restaurants);
        } else {
          throw new Error("Restaurants data not found");
        }
      } catch (err) {
        console.error("Error fetching restaurants:", err);
        setError(err.message);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);

  
  if (error) {
    return <h1>{error}</h1>;
  }


  if (isLoading) {
    return <Spinner/>;
  }

  return (
    listOfRestaurants && listOfRestaurants.length > 0 ? (
      <div className="max-w-[1280px] mx-auto">
        <div className="Search-bar mb-10 ">
          <SearchBar />
        </div>
        <div className="mb-4">
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info?.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            }}
            className="border rounded-3xl p-3 font-semibold cursor-pointer"
          >
            Ratings 4.0+
          </button>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {listOfRestaurants.map((restaurant, idx) => {
            return <RestaurantCard resData={restaurant} key={idx} />;
          })}
        </div>
      </div>
    ) : (
      <h1>No restaurants found</h1>
    )
  );
};

export default Body;
