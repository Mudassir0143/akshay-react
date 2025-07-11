// import { RESTAURANT_LIST } from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { use, useEffect, useState } from "react";
import { RESTAURANT_LIST } from "../../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(RESTAURANT_LIST);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    //  setlistOfRestaurants(json.data.cards);
  };
  return listOfRestaurants === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* Search Box and Button */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // filter the restaurant cards and update the ui
              // SearchText
              const filterRestaurant = listOfRestaurants.filter((res) =>
                res.resName
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setlistOfRestaurants(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>

        {/* Filter Button */}
        <button
          className="filter-btn"
          onClick={() => {
            // filter Logic here
            const filterList = listOfRestaurants.filter(
              (res) => res.rating > 4
            );
            setlistOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurant
        </button>

        {/* <button
          className="filter-btn1"
          onClick={() => {
            // filter Logic here
            const filterFastDilivery = listOfRestaurants.filter(
            
              (res) => res.deliveryTime?.split(" ") [0] < 40 // 40 < '38 minutes' 
            );
            setlistOfRestaurants(filterFastDilivery);
          }}
        >
          Fast Delivery Restaurant
        </button> */}
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            resName={restaurant.resName}
            cusine={restaurant.cusine}
            imageUrl={restaurant.imageUrl}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
