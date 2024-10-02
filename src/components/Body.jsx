import RestaurantCard from "./ReastaurantCard";
import SearchBar from "./SearchBar";
import resList from "../utils/mocData";

const Body = () =>  {
    return (
      <div className="">
        <div className="Search-bar mb-12 ">
          <SearchBar />
        </div>
        <div className="grid grid-cols-4 max-w-[1280px] mx-auto gap-10">
          {/* <RestaurantCard resData={resList[0]} /> */}
          {
            resList.map((restaurant) => {
              return <RestaurantCard resData={restaurant} key={restaurant.data.id}/>
            })
          }
        </div>
      </div>
    );
  
  }
  
export default Body