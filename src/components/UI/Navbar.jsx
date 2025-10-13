
function Navbar(props) {
    return (
        <section>
            <nav className="flex justify-between items-center p-4 bg-white shadow-md">
               <div className="flex flex-col items-center">
                   <img src="/logo/Foodieland.png" 
                   alt="Logo" 
                   className="mr-2" 
                   />
                   <p className="text-sm font-semibold text-gray-800 mt-1">Paradise For Food Lovers!</p>
               </div>
               <ul className="flex space-x-4 items-center mt-4 md:mt-0">
                   <li>
                        <a href="/recipe" className="text-gray-600 hover:text-orange-500 transition">
                            Recipes
                        </a>
                   </li>
                   <li>
                        <a href="/blog" className="text-gray-600 hover:text-orange-500 transition">
                            Blog
                        </a>
                   </li>
                   <li>
                        <a href="/contact" className="text-gray-600 hover:text-orange-500 transition">
                            About us 
                        </a>
                   </li>
                   <li>
                        <a href="/about" className="text-gray-600 hover:text-orange-500 transition">
                           Contact 
                        </a>
                   </li>
               </ul>
               <div className="flex space-x-4 justify-center items-center">
                    <a href="https://www.facebook.com" aria-label="Facebook">
                    <img
                        src="/icons/facebook.png"
                        alt="Facebook Icon"
                        className="h-5 w-3 hover:opacity-80"
                    />
                    </a>
                    <a href="https://www.instagram.com" aria-label="Instagram">
                    <img
                        src="/icons/instagram.png"
                        alt="Instagram Icon"
                        className="h-5 w-5 hover:opacity-80"
                    />
                    </a>
                    <a href="https://x.com" aria-label="Twitter">
                    <img
                        src="/icons/twitter.png"
                        alt="Twitter Icon"
                        className="h-5 w-4 hover:opacity-80"
                    />
                    </a>
                </div>
           </nav>
                <div className="text-center p-4 bg-white mt-4">
                    <p className="text-gray-600 text-sm font-medium">
                        &copy; 2024 Foodieland. All rights reserved.
                    </p>
                </div>
        </section>
    );
}
export default Navbar;