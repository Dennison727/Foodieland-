
function Chef() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0"> 
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Everyone can be a <br />
                <span className="text-green-600">chef in their own kitchen</span>
            </h1>
            <p className="text-gray-500 mt-6 mb-8 max-w-lg mx-auto lg:mx-0">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore magna aliqua. enim ad minim 
            </p>
            <button className="bg-green-600 text-white py-2 px-4 rounded">Learn More</button>
        </div>
        <div>
            <img src="/images/Chef.png" 
            alt="Chef" 
            className="w-[300px] md:w-[400px] lg:w-[450px] object-contain"/>
        </div>
    </section>
  );
}

export default Chef;