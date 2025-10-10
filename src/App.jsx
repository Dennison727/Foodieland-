import Homepage from './components/Homepage'
import Recipe from './components/Recipe'
import Blog from './components/Blog'
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/recipe" element={<Recipe />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
        </Routes>
    </Router>
  )
}
export default App;
