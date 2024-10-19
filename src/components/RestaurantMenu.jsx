import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const Restaurantmenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, []);



  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6010893&lng=77.4464163&restaurantId=516420&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);
    console.log(json?.data.cards[2]?.card.card.info.name);
    console.log(json?.data.cards[2]?.card.card.info.city);
    console.log(json?.data.cards[2]?.card.card.info.costForTwo);
    setResInfo(json.data)
  };

  if (isLoading === null) {
    return <Spinner/>;
  }

  const name = resInfo?.cards[2]?.card?.card?.info.name;
  const cuisines = resInfo?.cards[2]?.card?.card?.info.cuisines;
  const costForTwoMessage = resInfo?.cards[2]?.card?.card?.info.costForTwoMessage;

  return  (
    <div className="">
      <h1>{name}</h1>
      <h1>{costForTwoMessage}</h1>
      {/* <h2>{cuisines.join(", ")}</h2> */}
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  )  
  ;
};

export default Restaurantmenu;
