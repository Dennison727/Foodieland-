import Recipe from "../Recipe";

function Ingredients () {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
             <div className="md:col-span-2">
                    <h2 className="text-2x1 font-bold mb-4">Ingredients</h2>
                    <div className="mb-8">
                        <h3 className="text-sm font-bold mb-4">For main dish</h3>
                        <ul className="divide-y divide-gray-200 space-y-7">
                            <li className="flex items-center gap-2">
                                <input type="radio" name="main" className="w-4 h-4 rounded-full accent-green-300" />
                                <span className="text-gray-800 ">2 boneless chicken breasts</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="radio" name="main" className="w-4 h-4 rounded-full accent-green-300" />
                                <span className="text-gray-800 ">1 tablespoon olive oil</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="radio" name="main" className="w-4 h-4 rounded-full accent-green-300" />
                                <span className="text-gray-800 ">Salt, to taste</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="radio" name="main" className="w-4 h-4 rounded-full accent-green-300" />
                                <span className="text-gray-800 ">Black pepper, to taste</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="radio" name="main" className="w-4 h-4 rounded-full accent-green-300" />
                                <span className="text-gray-800 ">1 teaspoon paprika</span>
                            </li>
                            <li className="flex items-center gap-2">
                               <input type="radio" name="main" className="w-4 h-4 rounded-full accent-green-300" />
                                <span className="text-gray-800 ">1 cup sliced mushrooms</span> 
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">For the sauce</h3>
                        <ul className="space-y-7 divide-y divide-gray-200">
                            <li className="flex items-center gap-2">
                                <input type="radio" name="main"  className="w-4 h-4 rounded-full border-gray-300 accent-green-300"/>
                                <span className="text-gray-600 ">Lorem ipsum dolor sit amet</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="radio" name="main" className="w-4 h-4 rounded-full border-gray-300 accent-green-300" />
                                <span className="text-gray-600 ">Lorem ipsum dolor sit amet</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <input type="radio" name="main" className="w-4 h-4 rounded  accent-green-300" />
                                <span className="text-gray-600 ">Lorem ipsum dolor sit amet</span>
                            </li> 
                        </ul>
                    </div>
             </div> 
             <aside className="flex flex-col space-y-6 w-full max-w-xs">
                <h2 className="text-2x1 font-bold mb-4">Other Recipe</h2>
                <div className="flex flex-row items-start gap-3 cursor-pointer">
                    <div className="flex-shrink-0">
                        <img 
                            src="/images/Mask5.png" 
                            alt="Meatballs" 
                            className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                   </div>
                   <div className="flex flex-col justify-center flex-1">
                    <h3 className="text-base font-semibold text-gray-800 leading-snug">
                        Chicken Meatball with Creamy Chees...
                        </h3>
                    <p className="text-sm text-gray-500 mt-1">By James Fox</p>
                   </div>
                </div>
                 <div className="flex flex-row items-start gap-3 cursor-pointer">
                    <div className="flex-shrink-0">
                        <img 
                            src="/images/Mask9.png" 
                            alt="Meatballs" 
                            className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                   </div>
                   <div className="flex flex-col justify-center flex-1">
                    <h3 className="text-base font-semibold text-gray-800 leading-snug">
                       The Creamiest Creamy Chicken past
                        </h3>
                    <p className="text-sm text-gray-500 mt-1">By James Fox</p>
                   </div>
                </div>
                 <div className=" flex flex-row items-start gap-3 cursor-pointer">
                    <div className="flex-shrink-0">
                        <img 
                            src="/images/Mask8.png" 
                            alt="Meatballs" 
                            className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                   </div>
                   <div className="flex flex-col justify-center flex-1">
                    <h3 className="text-base font-semibold text-gray-800 leading-snug">
                        The Best Easy One pot Chicken and Rice
                        </h3>
                    <p className="text-sm text-gray-500 mt-1">By James Fox</p>
                   </div>
                </div>
                <img 
                    src="/images/Mask6.png" 
                    alt="Healthy Food" 
                    className="w-full h-47 object-cover rounded-lg flex-shrink-0"
                />
             </aside>    
        </section>
    );
}
export default Ingredients;