import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import {useState , useEffect}  from "react"
import  resList from "./../utils/mocData"

const Body = () =>  {
  // Local State React variable - Super power variable
  const [listOfRestaurants, setListOfRestraunts] = useState(resList);


    return (
      <div className="max-w-[1280px] mx-auto">
        <div className="Search-bar mb-10 ">
          <SearchBar />
        </div>
        <div className="mb-4">
          <button 
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunts(filteredList);
          }} 
          className="border rounded-3xl p-3 font-semibold cursor-pointer">
            Ratings 4.0+
          </button>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {/* <RestaurantCard resData={resList[0]} /> */}
          {
            listOfRestaurants.map((restaurant) => {
              return <RestaurantCard resData={restaurant} key={restaurant.data.id}/>
            })
          }
        </div>
      </div>
    );
  
  }
  
export default Body