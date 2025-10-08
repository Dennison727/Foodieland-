
function Home () {
  return (
    <div>
        <div className="flex justify-between items-center p-4 bg-white shadow-md"> 
            <nav className="flex justify-between items-center w-8/1">
                <div>
                    <img src="/logo/Foodieland.png" alt="Foodie" className="h-7 w-auto"/>
                </div>
                <ul className="flex space-x-8">
                    <li><a href="#" className="text-gray-600 hover:text-gray-800 font-bold">Home</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800 font-bold">Recipes</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800 font-bold">Blog</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800 font-bold">Contact</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800 font-bold">About us</a></li>
                </ul>
                <div className="flex space-x-4 justify-center items-center">
                    <div>
                        <img src="/icons/facebook.png" alt="Facebook" className="w-auto"/> 
                    </div>
                    <div>
                        <img src="/icons/instagram.png" alt="Instagram" className="w-auto"/>
                    </div>
                    <div>
                        <img src="/icons/twitter.png" alt="Twitter" className="w-auto"/>
                    </div>
                </div>
            </nav>
        </div>
    </div>    
  );
}
export default Home;