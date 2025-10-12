import Home from "./UI/Home";
import Article from "./Ul_blog.jsx/Article";
import Foodrecipe from "./Ul_blog.jsx/Foodrecipe";
import Subscribe from "./UI/Subscribe";  
import Navbar from "./UI/Navbar";


function Bloglist() {
  return (
    <div>
        <div>
           <Home />
        </div>
        <div>
          <Article />
        </div>
        <div>
          <Foodrecipe />
        </div>
        <div>
          <Subscribe/>
        </div>
        <div>
          <Navbar />
        </div>
    </div>
  );
}
export default Bloglist;