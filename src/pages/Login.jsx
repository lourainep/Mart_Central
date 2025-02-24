import React from 'react';

const Menu = () => {
  // Replace this sample data with your actual menu items
  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Mozzarella Sticks', price: 180 },
        { name: 'Buffalo Wings', price: 220 },
        // Add more items here
      ],
    },
    {
      category: 'Main Course',
      items: [
        { name: 'Chicken Alfredo Pasta', price: 320 },
        { name: 'Beef Burger', price: 280 },
        // Add more items here
      ],
    },
    // Add more categories here
  ];

  const handleClick = (itemName) => {
    // Perform an action when an item is clicked, e.g., add to cart, display details, etc.
    console.log(`Clicked item: ${itemName}`);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuItems.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <div className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="border border-gray-200 rounded-md p-4 cursor-pointer transition duration-300 hover:bg-gray-100"
                  onClick={() => handleClick(item.name)}
                >
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-gray-500">{`₱${item.price}`}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
