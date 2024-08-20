import React, { useContext } from "react";
import "./FoodDisplay.css";
import FoodItem from "../../FoodtItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";


const FoodDisplay = ({category }) => {
  const {food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Les meilleurs plats près de chez vous</h2>
      <div className="food-display-list">
        {food_list.map((item, index)=>{
            if(category==="All" || category===item.category){

                return <FoodItem key={index} id={item._id} image={item.image} description={item.description} name={item.name} price={item.price}/>
            }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
