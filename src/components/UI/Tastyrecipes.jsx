
function Tastyrecipes() {
   const recipes = [
      {
         id: 1,
         image: "/images/Mask1.png",
         title: "Big and juicy Wagyu beef Cheeeseburger",
         img: "/icons/Timer.png",
         time: "30 minutes",
         img2: "/icons/ForkKnife.png",
         text: "Snack",
      },
      {
         id: 2,
         image: "/images/Mask2.png",
         title: "Fresh Lime Roasted Salmon with Ginger Sauce",
         img: "/icons/Timer.png",
         time: "30 minutes",
         img2: "/icons/ForkKnife.png",
         text: "Fish",
      },
      {
         id: 3,
         image: "/images/Mask3.png",
         title: "Strawberry Oatmeal Pancakes with Honey Syrup",
         img: "/icons/Timer.png",
         time: "30 minutes",
         img2: "/icons/ForkKnife.png",
         text: "Breakfast",
      },
      {
         id: 4,
         image: "/images/Mask4.png",
         title: "Fresh and Healthy Mixed Mayonnaise Salad",
         img: "/icons/Timer.png",
         time: "30 minutes",
         img2: "/icons/ForkKnife.png",
         text: "Healthy",
      },
      {
         id: 5,
         image: "/images/Mask5.png",
         title: "Chicken Meatballs with Creamy Cheese",
         img: "/icons/Timer.png",
         time: "30 minutes",
         img2: "/icons/ForkKnife.png",
         text: "Meat",
      },
      {
         id: 6,
         image: "/images/Mask6.png",
         title: "Healthy Vegetable Salad with Salmon and Eggs",
         img: "/icons/Timer.png",
         time: "30 minutes",
         img2: "/icons/ForkKnife.png",
         text: "Salad",
      },
      {
         id: 7,
         image: "/images/Mask7.png",
         title: "Fruity Pancake with Orange & Blueberry",
         img: "/icons/Timer.png",
         time: "25 minutes",
         img2: "/icons/ForkKnife.png",
         text: "Sweet",
      },
    {
         id: 8,
         image: "/images/Mask8.png",
         title: "The Best Easy One Pot Chicken and Rice",
         img: "/icons/Timer.png",
         time: "25 minutes",
         img2: "/icons/ForkKnife.png",
         text: "Snack",
      },
        {
         id: 9,
         image: "/images/Mask9.png",
         title: "The Creamiest Creamy Chicken and Bacon Pasta",
         img: "/icons/Timer.png",
         time: "30 minutes",
         img2: "/icons/ForkKnife.png",
         text: "Noodle",
      }
   ];

   return (
       <section className="py-16 bg-white items-center justify-center">
           <div>
               <div className="flex flex-col items-center justify-center mt-10"> 
                   <h2 className="text-4xl font-bold mb-4 text-gray-900">Simple and tasty recipes</h2> 
                   <p className="text-gray-500 mt-3 mb-12 max-w-2xl mx-auto">
                       Foodieland is pure paradise for food lovers! From sizzling street eats to Insta-worthy desserts
                       every corner is a flavor & adventure, Grab your crew, snap those pics, and taste your way through happiness!
                   </p>
               </div>
               <div>
                   <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-6 md:px-12">
                       {recipes.map(recipe => (
                           <div key={recipe.id} className="bg-gradient-to-b from-white to-blue-50 shadow-md rounded-2xl overflow-hidden 
                           hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                <div className="relative">
                                    <img src={recipe.image}
                                     alt={recipe.title} 
                                     className="w-full h-50 object-cover" />
                                </div>
                                <div className="p-5 text-left">
                                   <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-3">
                                    {recipe.title}</h3>
                                   <div className="flex items-center gap-3 text-sm text-gray-500">
                                       <img src={recipe.img} alt={recipe.time} className="mr-2" />
                                       <span className="flex items-center gap-1">{recipe.time}</span>
                                       <img src={recipe.img2} alt={recipe.text} className="mr-2" />
                                       <span className="flex items-center gap-1">{recipe.text}</span>
                                   </div>
                               </div>
                           </div>
                       ))}
                   </div>
               </div>
           </div>
       </section>
   );
}

export default Tastyrecipes;