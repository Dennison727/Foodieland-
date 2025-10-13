
function Directions () {
    return (
       <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Directions</h2>
      <ol className="space-y-10">
        <li className="space-y-4">
          <div className="flex items-start space-x-3">
            <input type="radio" name="main" className="w-4 h-4 rounded-full accent-green-300" />
            <span className="text-lg font-bold">1.</span>
            <div>
              <h3 className="text-lg font-semibold">Prepare the ingredients</h3>
              <p className="text-gray-600 mt-1">
                Wash and chop all vegetables: 2 carrots, 2 celery stalks, 1 onion, 2 potatoes,
                 and 2 cloves of garlic. Keep them separated for easy access during cooking.
              </p>
            </div>
          </div>
          <img
            src="/logo/she.png"
            alt="Cooking process"
            className="w-full rounded-md shadow-md"
          />
          <p className="text-gray-600 mt-2">
             Prepping your ingredients ahead of time 
             makes the cooking process smoother and more efficient.
          </p>
        </li>
        <li className="space-y-4">
          <div className="flex items-start space-x-3">
            <input type="radio" name="main" className="w-4 h-4 rounded-full accent-green-300" />
            <span className="text-lg font-bold">2.</span>
            <div>
              <h3 className="text-lg font-semibold">Sauté the aromatics</h3>
              <p className="text-gray-600 mt-1">
                Heat 2 tablespoons of olive oil in a large pot over medium heat. 
                Add chopped onion and garlic. Cook for 3–4 minutes until translucent and fragrant.
              </p>
            </div>
          </div>
        </li>
        <li className="space-y-4">
          <div className="flex items-start space-x-3">
            <input type="radio" name="main" className="w-4 h-4 rounded-full accent-green-300" />
            <span className="text-lg font-bold">3.</span>
            <div>
              <h3 className="text-lg font-semibold">Add vegetables and simmer</h3>
              <p className="text-gray-600 mt-1">
               Add carrots, celery, and potatoes to the pot. Pour in 6 cups of vegetable broth, bring to a boil, 
               then reduce heat and let it simmer for 20–25 minutes until vegetables are tender.
              </p>
            </div>
          </div>
        </li>
      </ol>
    </section>
    );
}
export default Directions;