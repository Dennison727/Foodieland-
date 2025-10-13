
function Guide() {
    return(
        <section className="max-w-4xl mx-auto py-12 px-5 ">
            <h1 className="text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                Full Guide To Becoming a Professional Chef
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
                <img 
                    src="/images/Ellipse.png" 
                    alt="Dennis Smith" 
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                    <span className="font-medium text-gray-800">Dennis Smith</span>
                    <span className="hidden sm:inline"></span>
                    <span className="text-gray-500 ml-2">15 March 2024</span>
                </div>
            </div>
            <div className="border-1-4 border-blue-500 pl-4 mb-10">
                <p className="text-gray-700 text-xl italic leading-relaxed tracking-wide font-light">
                    Learn the key steps to becoming a Professional chef - from mastering techniques
                    to building a rewarding culinary career.
                </p>
            </div>
            <div className="w-full">
                <img 
                    src="/images/Man1.png" 
                    alt="Chef"
                    className="w-full rounded-2x1 object-cover shadow-sm"
                />
            </div>
        </section>
    );
}
export default Guide;