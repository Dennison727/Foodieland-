
function Contactus() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-6 py-12 gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                src="/images/Chef1.png"
                alt="Chef"
                className="w-full max-w-sm object-contain"
                />
            </div>
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
                Contact us
                </h2>
                <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                    type="text"
                    placeholder="Enter your name..."
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <input
                    type="email"
                    placeholder="Your email address..."
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                    type="text"
                    placeholder="Enter subject..."
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <select
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                    defaultValue="Advertising"
                    >
                    <option>Advertising</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                    <option>Other</option>
                    </select>
                </div>

                <textarea
                    placeholder="Enter your messages..."
                    rows="4"
                    className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>

                <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition w-full md:w-auto"
                >
                    Submit
                </button>
                </form>
            </div>
       </section>
    );
}
export default Contactus;