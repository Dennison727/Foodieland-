
function Article () {
    return (
        <div className="max-w-4xl mx-auto text-center py-12 px-4">
            <h1 className="text-4xl font-bold mb-3">Blog & Article</h1>
            <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center">
                <div className="flex w-full max-w-md rounded-full overflow-hidden border border-gray-300">
                    <input
                        type="text"
                        placeholder="Search article, news or recipe..."
                        className="flex-grow px-4 py-2 outline-none text-sm"
                    />
                    <button className="bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Article;