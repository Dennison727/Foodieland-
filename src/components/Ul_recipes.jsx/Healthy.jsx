
function Healthy () {
    return (
        <div className=" min-h-screen flex justify-center py-12 px-4">
            <div className="relative max-w-6xl w-full bg-white rounded-2xl p-10 shadow-sm">
                <div className="absolute top-10 right-10 flex items-center gap-6">
                    <button className="flex flex-col items-center">
                        <div className="bg-[#ebf7fb] p-5 rounded-full hover:scale-105 transition">
                            <img src="/icons/Print.png" alt="Print" className="w-5 h-5" />
                        </div>
                        <span className="text-xs mt-2 font-medium text-gray-600 uppercase">
                            PRINT
                        </span>
                    </button>
                    <button className="flex flex-col items-center">
                        <div className="bg-[#ebf7fb] p-5 rounded-full hover:scale-105 transition">
                            <img src="/icons/Share.png" alt="Share" className="w-5 h-5" />
                        </div>
                        <span className="text-xs mt-2 font-medium text-gray-600 uppercase">
                            Share
                        </span>
                    </button>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                    Healthy Japanese Fried Rice 
                </h1>
                <div className="flex flex-wrap items-center gap-8 mb-10 text-gray-600">
                    <div className="flex items-center gap-3">
                        <img
                            src="/images/Ellipse.png"
                            alt="Ellipse"
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="font-semibold text-gray-800">John Smith</p>
                            <p className="text-sm">15 March 2022</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/icons/Timer.png" alt="Prep Time" className="w-4 h-4" />
                        <span className="text-sm">
                            <strong>Prep Time:</strong> 15 Minutes
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/icons/Timer.png" alt="Cook Time" className="w-4 h-4" />
                        <span className="text-sm">
                            <strong>Cook Time:</strong> 15 Minutes
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/icons/ForkKnife.png" alt="Food Type" className="w-4 h-4" />
                        <span className="text-sm">Chicken</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-start gap-10">
                    <div className="relative flex-1">
                        <img
                            src="/images/friedrice.png"
                            alt="Fried Rice"
                className="w-full rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <a href="https://youtu.be/n4CJRoRwXas?si=hj_DyOMoyA-l7eyS">
                        <img
                            src="/icons/Play.png"
                            alt="Play Icon"
                            className="w-16 h-16 md:w-20 md:h-20 opacity-90 hover:opacity-100 transition duration-300"
                        />
                    </a>    
                </div>
            </div>
            <div className="bg-[#e8f7fb] rounded-2xl p-8 w-full md:w-80">
                <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Nutrition Information
                </h3>
                <ul className="divide-y divide-gray-200 text-gray-700">
                <li className="flex justify-between py-2">
                    <span>Calories</span> <span className="font-medium">219.9 kcal</span>
                </li>
                <li className="flex justify-between py-2">
                    <span>Total Fat</span> <span className="font-medium">10.7 g</span>
                </li>
                <li className="flex justify-between py-2">
                    <span>Protein</span> <span className="font-medium">7.9 g</span>
                </li>
                <li className="flex justify-between py-2">
                    <span>Carbohydrate</span> <span className="font-medium">22.3 g</span>
                </li>
                <li className="flex justify-between py-2">
                    <span>Cholesterol</span> <span className="font-medium">37.4 mg</span>
                </li>
                </ul>
                <p className="pt-10">hello </p>
            </div>
            </div>
            <p className="mt-10  text-gray-600 leading-relaxed text-[15px] max-w-5xl">
                Foodieland is pure paradise for food lovers! From sizzling street eats to 
                Insta-worthy desserts every corner is a flavor & adventure, Grab your crew,
                 snap those pics, and taste your way through happiness!
            </p>
        </div>
        </div>
    );
}
export default Healthy;