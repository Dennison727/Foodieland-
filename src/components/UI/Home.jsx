
function Home(props) {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <nav className="flex justify-between items-center w-full">
          <div>
            <img
              src="/logo/Foodieland.png"
              alt="Foodieland Logo"
              className="h-7 w-auto"
            />
          </div>
          <ul className="flex space-x-8">
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-800 font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="/recipe" className="text-gray-600 hover:text-gray-800 font-bold">
                Recipes
              </a>
            </li>
            <li>
              <a href="/blog" className="text-gray-600 hover:text-gray-800 font-bold">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-gray-800 font-bold">
                Contact
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-600 hover:text-gray-800 font-bold">
                About Us
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 justify-center items-center">
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
        </nav>
      </header>
    </div>
  );
}

export default Home;
