import { useState, useEffect } from "react";

const Filter = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    // listOfRestaurants && listOfRestaurants.length > 0 ?
    return  (
        <div className="mb-4 max-w-[1280px] mx-auto">
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info?.avgRating > 4.5
              );
              setListOfRestaurants(filteredList);
            }}
            className="border rounded-3xl p-3 font-semibold cursor-pointer"
          >
            Ratings 4.0+
          </button>
        </div>
    )
}

export default Filter