import { CDN_URL } from "../utils/constants";

const RestaurantCard = ( {resData }) => {

  // console.log(resData?.data);
  console.log(resData?.info);
    // console.log(props);
    const {name , cuisines ,avgRating, costForTwo , cloudinaryImageId } = resData?.info || resData?.data;
    // console.log(name,cuisines,avgRating,costForTwo,deliveryTime);

    // const {deliveryTime} = resData.data.sla;
    let newCuisines = cuisines.length > 3 ? [cuisines[0], cuisines[1], cuisines[2]] : cuisines;
    
    return (
      <div className=" w-72 h-72 rounded-md cursor-pointer border-red-400 border transition-transform transform hover:scale-95">
        <img className="res-logo h-40 w-full rounded-md " 
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="food-img" />
        
        <div className="pl-3">
          <h3>{name}</h3>
          <h4>{newCuisines.join(", ")}</h4>
          <h4>{avgRating} Stars</h4>
          <h4>{costForTwo}</h4>
        </div>
      </div>
    )
  }

export default RestaurantCard