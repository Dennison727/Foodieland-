
function Industry() {
    return (
        <div className="relative max-w-4xl mx-auto px-6 py-10 pr-24 space-y-12 font-sans">
            <div className="absolute -right-10 top-10 flex flex-col items-center text-gray-500">
                 <span className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                      Share this on:
                 </span>
                 <div className="flex flex-col space-y-5">
                    <a href="https://www.facebook.com" aria-label="Facebook">
                    <img
                        src="/icons/facebook.png"
                        alt="Facebook Icon"
                        className="h-5 w-3 hover:opacity-80"
                    />
                    </a>
                    <a href="https://www.instagram.com" aria-label="Instagram">
                    <img
                        src="/icons/instagram.png"
                        alt="Instagram Icon"
                        className="h-5 w-5 hover:opacity-80"
                    />
                    </a>
                    <a href="https://x.com" aria-label="Twitter">
                    <img
                        src="/icons/twitter.png"
                        alt="Twitter Icon"
                        className="h-5 w-4 hover:opacity-80"
                    />
                    </a>
                </div>
            </div>
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-black">How did you start out in the food industry?</h2>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                    I started my journey with a deep love for flavors and the magic they create. 
                    What began as simple family meals grew into a passion for crafting dishes 
                    that tell stories, bring people together, and inspire joy in every bite.
                </p>
           </div>
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-black">What do you like most about your job?</h2>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                    What I love most is seeing the smiles after the first taste. 
                    Food is more than a meal — it’s a language of love, connection, 
                    and creativity. Every plate is an opportunity to make someone’s day special.
                </p>
           </div>
           <div className="space-y-2">
                <h2 className="text-xl font-semibold text-black">Do you cook at home on your days off?</h2>
                <img
                src="/logo/she.png"
                alt="Cooking at home"
                className="w-full h-80 object-cover rounded-lg mb-3"
                />
                <p className="text-gray-700 leading-relaxed text-[15px]">
                    Yes! Cooking at home is my way to unwind. I experiment, 
                    create new flavors, and sometimes return to my roots with simple comfort food. 
                    The kitchen is always where I feel most alive.
                </p>
           </div>
           <div className="space-y-2">
                <h2 className="text-xl font-semibold text-black">
                What would your advice be to young people looking to get their foot in the door?
                </h2>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                    Stay curious, stay humble, and never stop learning. 
                    The best chefs aren’t born overnight—they’re made through patience, 
                    persistence, and a willingness to grow with every challenge.
                </p>
           </div>
           <div className="bg-gray-100 p-6 italic text-lg rounded-lg border-l-4 border-black">
                “Every dish you create is a reflection of your journey — 
                so make it meaningful, make it unforgettable.”
           </div>
           <div className="space-y-2">
                <h2 className="text-xl font-semibold text-black">
                What is the biggest misconception that people have about being a professional chef?
                </h2>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                    Many think it’s all glamour and fancy plates, but behind every beautiful dish 
                    is dedication, long hours, and hard work. The kitchen is where passion meets pressure, 
                    and that’s where true artistry is born.
                </p>
           </div>
        </div>
    );
}
export default Industry;