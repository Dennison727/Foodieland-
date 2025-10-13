import Home from "./UI/Home"
import Contactus from "./Ul_about.jsx/Contactus";
import Subscribe from "./UI/Subscribe";
import Recipes from "./Ul_recipes.jsx/Recipes";
import Navbar from "./UI/Navbar";

function About() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <Contactus />
      </div>
      <div>
        <Subscribe />
      </div>
      <div>
        <Recipes />
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}
export default About;

