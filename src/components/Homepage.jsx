import Foodie from "./UI/foodie";
import Home from "./UI/Home";  
import Categories from "./UI/Categories";  
import Tastyrecipes from "./UI/Tastyrecipes"; 
import Chef from "./UI/Chef"; 
import Checkout from "./UI/Checkout";
import Delicious from "./UI/Delicious";

function Homepage() {
  return (
    <div>
        <div>
            <Home />
        </div>
        <div>
            <Foodie />
            <Categories />
        </div>
        <div>
            <Tastyrecipes />
            <Chef />
            <Checkout />
        </div>
        <div>
            <Delicious />
        </div>
    </div>
  );
}
export default Homepage;