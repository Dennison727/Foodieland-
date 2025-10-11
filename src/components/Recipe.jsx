import Home from "./UI/Home"
import Navbar from "./UI/Navbar";
import Healthy from "./Ul_recipes.jsx/Healthy";
import Ingredients from "./Ul_recipes.jsx/ingredients";
import Direction from "./Ul_recipes.jsx/Directions";
import Subscribe from "./UI/Subscribe";

function Recipe() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <Healthy />
        <Ingredients />
        <Direction />
      </div>
      <div>
        <Subscribe />
      </div>
    </div>
  );
}
export default Recipe;