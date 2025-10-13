import Home from "./UI/Home"
import Guide from "./Ul_contact.jsx/Guide";
import Industry from "./Ul_contact.jsx/Industry";
import Subscribe from "./UI/Subscribe";
import Recipes from "./Ul_recipes.jsx/Recipes";
import Navbar from "./UI/Navbar";

function Contact() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <Guide />
        <Industry />
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
export default Contact;