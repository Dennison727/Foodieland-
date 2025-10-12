
function Foodrecipe() {
    const posts = [
        { id: 1,
            image: "/images/Stock8.png",
            title: "Crochet Projects for Noodle Lovers",
            description: "Discover how to turn your passion for noodles into cozy, creative crochet designs.",
            author: "Wade Warren",
            date: "12 November 2025",
        },
        { id: 2,
            image: "/images/Stock1.png",
            title: "10 Vegetarian Recipes To Eat This Month",
            description: "Explore fresh, seasonal recipes that bring color and flavor to your table.",
            author: "Robert Fox",
            date: "12 November 2021",
        },
        { id: 3,
            image: "/images/Man1.png",
            title: "Full Guide to Becoming a Professional Chef",
            description: "Step-by-step advice to build your culinary skills and create unforgettable dishes.",
            author: "Dianne Russell",
            date: "12 November 2025",
        },
        { id: 4,
            image: "/images/Man2.png",
            title: "Simple & Delicious Vegetarian Lasagna",
            description: "Layers of creamy goodness and fresh ingredients—perfect for family dinners.",
            author: "Leslie Alexander",
            date: "12 November 2023",
        },
        { id: 5,
            image: "/images/Man3.png",
            title: "Plantain and Pinto Stew with Aji Verde",
            description: "A hearty, flavorful dish that blends tradition with bold, vibrant sauces.",
            author: "Courtney Henry",
            date: "12 November 2025",
        },
        { id: 6,
            image: "/images/Man4.png",
            title: "We’re Hiring a Communications Assistant!",
            description: "Join a passionate team and help us share stories that inspire change.",
            author: "Albert Flores",
            date: "12 November 2024",
        },
    ];
    const tastyRecipes = [
        { id: 1,
            image: "/images/Mask5.png",
            title: "Chicken Meatballs with Cream Cheese",
            author: "By Andreas Paula",
        },
        { id: 2,
            image: "/images/Mask8.png",
            title: "Traditional Bolognese Ragu",
            author: "By Andreas Paula",
        },
        { id: 3,
            image: "/images/Mask10.png",
            title: "Pork and Chive Chinese Dumplings",
            author: "By Andreas Paula",
        },
    ];
     return (
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
                {posts.map((post) => (
                <div key={post.id} className="flex mb-6 border-b pb-4 gap-4">
                    <img
                    src={post.image}
                    alt={post.title}
                    className="w-28 h-28 rounded-lg object-cover"
                    />
                    <div>
                    <h2 className="font-semibold text-lg mb-1">{post.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">{post.description}</p>
                    <div className="flex items-center text-xs text-gray-500 gap-2">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>
                    </div>
                </div>
                ))}
                <div className="flex justify-center items-center gap-2 mt-8">
                    <button className="px-3 py-1 rounded-full bg-black text-white text-sm">1</button>
                    <button className="px-3 py-1 rounded-full text-gray-700 text-sm hover:bg-gray-100">2</button>
                    <button className="px-3 py-1 rounded-full text-gray-700 text-sm hover:bg-gray-100">3</button>
                    <button className="px-3 py-1 rounded-full text-gray-700 text-sm hover:bg-gray-100">4</button>
                    <span className="text-gray-400">...</span>
                    <button className="px-3 py-1 rounded-full text-gray-700 text-sm hover:bg-gray-100">11</button>
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-lg mb-4">Tasty Recipes</h3>
                <div className="space-y-4 mb-8">
                {tastyRecipes.map((recipe) => (
                    <div key={recipe.id} className="flex items-center gap-3">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                        <h4 className="text-sm font-semibold">{recipe.title}</h4>
                        <p className="text-xs text-gray-500">{recipe.author}</p>
                    </div>
                    </div>
                ))}
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                    src="/images/Mask6.png"
                    alt="Healthy food reminder"
                    className="w-full h-auto"
                />
                </div>
            </div>
        </div>
  );
};
export default Foodrecipe;