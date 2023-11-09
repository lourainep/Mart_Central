import React from 'react';

const CategoryList = () => {
  const categories = [
    'Groceries',
    'Furnitures',
    'Gadgets',
    'Jewelries',
    'Sports',
    'Men',
    'Women',
    'Toys',
  ];

  return (
    <div className="flex flex-wrap gap-2 bg-primary text-textw ">
      {categories.map((category, index) => (
        <button
          key={index}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 hover:underline text-white ml-[5%] rounded-md text-sm"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
