
function Categories() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex flex-col items-center justify-center mt-10">
                    <h2 className="text-2xl font-bold mb-6 ">Categories</h2>
                    <button className=" bg-blue-400 text-white px-5 py-2 rounded-full transition hover:bg-blue-500 mb-4">
                        View All Categories
                    </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6">
                    <div className="flex flex-col items-center space-y-2 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition">
                        <img src="/images/Rice.png" alt="Rice" />
                        <span className="font-bold">Breakfast</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 bg-green-50 p-4 rounded-lg shadow-md hover:shadow-lg transition">
                        <img src="/images/Vegan.png" alt="Vegan" />
                        <span className="font-bold">Vegan</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 bg-red-50 p-4 rounded-lg shadow-md hover:shadow-lg transition">
                        <img src="/images/Meat.png" alt="Salad" />
                        <span className="font-bold">Meat</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 bg-yellow-50 p-4 rounded-lg shadow-md hover:shadow-lg transition">
                        <img src="/images/Dessert.png" alt="Dessert"/>
                        <span className="font-bold">Dessert</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2 bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition">
                        <img src="/images/lunch.png" alt="lunch" />
                        <span className="font-bold">Lunch</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Categories;