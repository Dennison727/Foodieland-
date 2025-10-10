
function Checkout() {
  const testimony = [
    { id: 1, 
        img: "/images/Post1.png",
    },
    { id: 2, 
        img: "/images/Post2.png",
    },
    { id: 3, 
        img: "/images/Post3.png", 
    },
    {
      id: 4, 
      img: "/images/Post4.png",
    },
    { id: 5, 
      img: "/images/Post2.png",
    },
  ];
    return (
        <section className="bg-blue-50 py-16 text-center px-6 md:px-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Check out<span className="text-black">@foodieland on instagram</span>
                    </h2>
                    <p className="text-gray-500 mt-3 mb-12 max-w-2xl mx-auto">
                       🍔✨ Foodieland is pure paradise for food lovers! From sizzling street eats to Insta-worthy desserts 
                       every corner is a flavor & adventure 😋🔥, Grab your crew, snap those pics, and taste your way through happiness!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center mb-10">
                        {testimony.map(testimony => (
                            <div key={testimony.id}
                             className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                                <img src={testimony.img} alt={testimony.id}
                                className="w-full h-full object-cover transform hover:scale-150 transition duration-300"/>
                            </div>
                        ))}
                    </div>
                    <button className="flex items-center justify-center mx-auto bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-100 transition">
                         Our instagram
                         <a href="https://www.instagram.com">
                            <img src="/icons/instagram.png"
                             alt="instagram"
                             className="ml-2"/>
                         </a>
                    </button>
        </section>
    );
}
export default Checkout;
   
