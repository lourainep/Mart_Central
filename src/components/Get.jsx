

function Get() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto py-2">
          <ul className="flex items-center justify-between space-x-4">
            <li className="text-3xl font-semibold">
              Get it all right here
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black hover:underline">View all</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <button className="text-2xl font-semibold mb-4">Electronics</button>
            <p>Explore the latest gadgets and electronics.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <button className="text-2xl font-semibold mb-4">Home</button>
            <p>Discover items to make your home cozy.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <button className="text-2xl font-semibold mb-4">Sports & outdoors</button>
            <p>Get active with sports and outdoor gear.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <button className="text-2xl font-semibold mb-4">Toys</button>
            <p>Shop for toys for all ages.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <button className="text-2xl font-semibold mb-4">Grocery</button>
            <p>Stock up on your grocery essentials.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <button className="text-2xl font-semibold mb-4">Fashion</button>
            <p>Find the latest trends in fashion.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <button className="text-2xl font-semibold mb-4">Auto & tires</button>
            <p>Upgrade your vehicle with auto and tire products.</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <button className="text-2xl font-semibold mb-4">Health & wellness</button>
            <p>Take care of your health and wellness.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Get;
