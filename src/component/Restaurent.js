import { FoodItem } from "./FoodItem";
import Menu from '../Menu';

export const Restaurent = () => {
  return (
    <>
      <h1>Hello Restaurent</h1>
      <div className="food-container">
      {
        Menu.map((item, idx) => {
          return <FoodItem idx={item.id} item={item} />    
        })
      }    
      </div> 
    </>
  );
};