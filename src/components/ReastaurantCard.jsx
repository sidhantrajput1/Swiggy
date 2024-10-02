

const RestaurantCard = ( {resData }) => {
    // console.log(props);
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.data;
    const {deliveryTime} = resData.data.sla;
    
    return (
      <div className=" w-72 h-72 rounded-md cursor-pointer border-red-400 border transition-transform transform hover:scale-95">
        <img className="res-logo h-40 w-full rounded-md " src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="food-img" />
        <div className="pl-3">
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime} Mintues</h4>
        </div>
      </div>
    )
  }

export default RestaurantCard