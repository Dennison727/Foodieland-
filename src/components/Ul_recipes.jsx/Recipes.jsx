
function Recipes(props) {
    const testimony = [
        { id: 1, 
            Image: "/images/Stock1.png",
            title: "Mixed Tropical Fruit Salad with Superfood Boosts",
            img: "/icons/Timer.png",
            time: "25 minutes",
            img2: "/icons/ForkKnife.png",
            text: "Healthy",

        },
        { id: 2, 
            Image: "/images/Stock2.png",
            title: "Big and juicy Wagyu beef Cheeseburger",
            img: "/icons/Timer.png",
            time: "30 minutes",
            img2: "/icons/ForkKnife.png",
            text: "Western",
        },
        { id: 3, 
            Image: "/images/Stock3.png", 
            title: "Healthy Japanese Fried Rice with Asparagus",
            img: "/icons/Timer.png",
            time: "20 minutes",
            img2: "/icons/ForkKnife.png",
            text: "Healthy",
        },
        { id: 4, 
            Image: "/images/Stock4.png",
            title: "Cauliflower Walnut Vegetarian Taco Meat",
            img: "/icons/Timer.png",
            time: "35 minutes",
            img2: "/icons/ForkKnife.png",
            text: "Eastern",
        } 
    ];
    return(
        <section className="bg-gray-50 py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold mb-6">You may like these recipe too</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {testimony.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={item.Image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <div className="flex items-center mt-2">
                                    <img src={item.img} alt="Timer" className="w-4 h-4 mr-1" />
                                    <span className="text-gray-600">{item.time}</span>
                                    <img src={item.img2} alt="ForkKnife" className="w-4 h-4 mr-1 ml-4" />
                                    <span className="text-gray-600">{item.text}</span>
                                </div>
                            </div>
                        </div>
                    ))}
              </div>
            </div>
        </section>
    );
}
export default Recipes;