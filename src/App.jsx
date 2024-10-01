// import React from "react";
// import ReactDOM from "react-dom/client"


/* 

Header
---logo
---nav-items
Body
---Search
---Restaurants Container
---Restaurant Card
    --img
    --Name of res, star rating , cuisine
    --
Footer
---Copyright
---Links
---Address
---Contacts

*/



const Header = () => {
  return (
    <div className="header flex justify-between items-center p-3 mb-4 max-w-[1280px] mx-auto">
      <div className="logo">
        <img className="logo h-12 w-18" src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png"/>
      </div>
        <ul className="nav-items flex list-none space-x-5 font-semibold cursor-pointer">
          <li className=" hover:text-orange-400">Home</li>
          <li className=" hover:text-orange-400">About Us</li>
          <li className=" hover:text-orange-400">Contacts Us</li>
          <li className=" hover:text-orange-400">Cart</li>
        </ul>
    </div>
  )  
}



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

const SearchBar = () => {
  return (
    <div className="search-bar w-[100%] flex space-x-1 max-w-[1280px] mx-auto ">
      <input 
        type="Search"
        placeholder="Search..."
        className="border border-red-400 focus:outline-none px-3 w-[94%] h-10 rounded"
      />
      <button className="h-10 w-[6%] font-semibold border-red-400 bg-orange-400 rounded hover:text-white">Search</button>
    </div>
  )
}

const resList = [
  {
  type : "Reastaurant",
  data : {
      "id": "620953",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/13/05b1b7a6-a456-4781-a18a-1fce0992e592_620953.JPG",
      "locality": "Karbighiya",
      "areaName": "Kankarbagh",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    "avgRating": 4.3,
    "parentId": "2456",
    "avgRatingString": "4.3",
    "totalRatingsString": "814",
    "promoted": true,
    "adTrackingId": "cid=19044376~p=0~adgrpid=19044376#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=620953~eid=5d2e39c5-17a2-44cd-bd9c-93ba35b081a9~srvts=1727710069754~collid=45995",
    "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 1.4,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "1.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-10-01 02:00:00",
      "opened": true
    },
    "badges": {
    "imageBadges": [
      {
      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
      "description": "Delivery!"
      },
      {
      "imageId": "Rxawards/_CATEGORY-Pizza.png",
      "description": "Delivery!"
      }
    ],
    "textExtendedBadges": [
      {
      "iconId": "Ratnesh_Badges/free%20del%20icon.png",
      "shortDescription": "Free Delivery",
      "fontColor": "#7E808C"
      }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
    "description": "Delivery!"
    }
    },
    {
    "attributes": {
    "imageId": "Rxawards/_CATEGORY-Pizza.png",
    "description": "Delivery!"
    }
    }
    ]
    },
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "iconId": "Ratnesh_Badges/free%20del%20icon.png",
    "description": "",
    "shortDescription": "Free Delivery",
    "fontColor": "#7E808C"
    }
    }
    ]
    },
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings" : {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "19044376"
  },
  },
  {
    type : "Reastaurant",
    data : {
    "id": "869089",
    "name": "Annu Pal Hotel",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/11/d2a2a35e-c998-4f29-8912-45f5e56aea85_869089.jpg",
    "locality": "Budh Vihar",
    "areaName": "Kankarbagh",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Chinese",
    "Snacks",
    "Biryani"
    ],
    "avgRating": 3.5,
    "parentId": "509549",
    "avgRatingString": "3.5",
    "totalRatingsString": "168",
    "promoted": true,
    "adTrackingId": "cid=18860447~p=1~adgrpid=18860447#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=869089~eid=63d74318-e1a5-4540-8724-56154255005d~srvts=1727717390721~collid=45995",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-09-30 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "18860447"
      },
  },
  {
    type : "Reataurant",
    data : {
      "id": "654087",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/60497022-434e-4d21-bc0e-813fea770ae5_654087.JPG",
      "locality": "SP Verma Road",
      "areaName": "Lodipur",
      "costForTwo": "₹350 for two",
      "cuisines": [
      "Burgers",
      "American"
      ],
      "avgRating": 4.2,
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 28,
      "lastMileTravel": 3.5,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "3.5 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-10-01 06:00:00",
      "opened": true
      },
      "badges": {
      "imageBadges": [
      {
      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
      "description": "Delivery!"
      },
      {
      "imageId": "Rxawards/_CATEGORY-Burger.png",
      "description": "Delivery!"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "textBased": {},
      "imageBased": {
      "badgeObject": [
      {
      "attributes": {
      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
      "description": "Delivery!"
      }
      },
      {
      "attributes": {
      "imageId": "Rxawards/_CATEGORY-Burger.png",
      "description": "Delivery!"
      }
      }
      ]
      },
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
      "aggregatedRating": {
      "rating": "--"
      }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {},
  }
]


function Body() {
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

const AppLayout = () => {
  return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
  )
}


export default AppLayout
