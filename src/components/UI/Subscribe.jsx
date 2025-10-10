
function Subscribe(props) {
  return (
    <section className="w-full flex justify-center items-center mt-10">
        <div className="relative w-full max-w-5xl">
            <img src="/images/Subscribe.png"
             alt="Delicious Food" 
             className="w-full h-auto rounded-2x1 object-cover"
             /> 
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                    Deliciousness to your inbox
                </h2>
                <p className="text-gray-500 mb-6 max-w-md mx-auto md:mx-0">
                    Foodieland is pure paradise for food lovers! From sizzling street eats to Insta-worthy desserts 
                    every corner is a flavor & adventure, Grab your crew, snap those pics, and taste your way through happiness!
                </p>
                <form className="flex items-center justify-center md:justify-start  bg-white rounded-md shadow-sm overflow-hidden w-full max-w-md mx-auto md:mx-0">
                    <input type="email" 
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 text-gray-700 outline-none"
                    />
                    <button type="submit" className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
}
export default Subscribe;