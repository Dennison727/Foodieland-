
function Foodie () {
  return (
    <section className="max-w-6x1 mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-12 bg-white rounded-2x1 shadow-md">
        <div className="space-y-1 bg-blue-50 p-6 rounded-2xl">
            <div className="flex space-x-2 items-center rounded-full bg-gray-100 px-3 py-1 w-fit mb-4">
                <img src="/icons/scrroll.png" alt="Scroll"/>
                <span className="text-sm font-semibold mb-2">Hot Recipes</span>
            </div>
           <h1 className="text-4xl font-bold mb-4">Spicy delicacies <br /> Chicken wings
           </h1>
           <p className="text-gray-500 mb-6 leading-relaxed text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore magna
              aliqut enim ad minim
          </p>
          <div className="flex space-x-4">
                <div className="flex space-x-2 items-center rounded-full bg-yellow-100 px-3 py-1">
                    <img src="/icons/Timer.png" alt="Clock"/>
                    <span className="text-gray-500 text-sm">30 minutes</span>
                </div>
                <div className="flex space-x-2 items-center rounded-full bg-yellow-100 px-3 py-1">
                    <img src="/icons/ForkKnife.png" alt="Serving"/>
                    <span className="text-gray-500 text-sm">Chicken</span>
                </div>
          </div>
          <div className="flex space-x-4 items-center mt-15">
                <img src="/images/Ellipse.png" 
                alt="Ellipse" 
                className="w-10 h-10 rounded-full object-cover justify-center" />
                <div>
                <p className="text-gray-600 font-semibold">Dennis Quaid</p>
                <p className="text-gray-500 font-light">15 March 2024</p>
                </div>
                <button className="ml-auto bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
                   View Recipes 
                   <img src="/icons/PlayCircle.png" alt="Arrow Right" className="inline-block ml-2" />
                </button>
          </div>
        </div>
        <div className="relative">
            <img src="/images/Mask Group.png" 
            alt="Foodie" 
            className="rounded-2xl shadow-md object-cover w-full h-[400px]" />
        </div>
    </section>   
  );
}
export default Foodie;
