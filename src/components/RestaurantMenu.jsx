import {useState,  useEffect } from "react"; 
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 

    const {resId} = useParams();
    

    useEffect( () => {
        const fetchMenu = async() => {
            try {
                const data = await fetch( MENU_API + resId)
                const json =await data.json();
                setResInfo(json.data?.cards[1]?.card?.card?.info)
            } catch (error) {
                console.error("Error fetching the menu: ",error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchMenu();
    },[]);

    

    if (isLoading) {
        return <Spinner/>;
    }

    // const [itemsCard] = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    const menuItems = resInfo?.menuItems || [];
    console.log(menuItems);
    
    return (
        <div>
            <h1>{resInfo?.name}</h1>
            <h3>{resInfo?.cuisines.join(", ")}</h3>
            <h3>{resInfo?.costForTwoMessage}</h3>
            <ul>
            {menuItems.length > 0 ? (
                    menuItems.map((item) => (
                        <li key={item.id}>{item?.name}</li>
                    ))
                ) : (
                    <li>No Menu items Available</li>
                )}
            </ul>
        </div>
    )
}

export default RestaurantMenu;