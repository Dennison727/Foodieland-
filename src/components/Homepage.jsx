import Foodie from "./UI/foodie";
import Home from "./UI/Home";  
import Categories from "./UI/Categories";  
import Tastyrecipes from "./UI/Tastyrecipes"; 
import Chef from "./UI/Chef"; 
import Checkout from "./UI/Checkout";
import Delicious from "./UI/Delicious";
import Subscribe from "./UI/Subscribe";
import Navbar from "./UI/Navbar";

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
            <Subscribe />
        </div>
        <div>
            <Navbar />
        </div>
    </div>
  );
}
export default Homepage;