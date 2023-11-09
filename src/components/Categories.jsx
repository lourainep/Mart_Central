import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images1  from "../assets/grocery.png"
import images2 from "../assets/furnitures.png"
import images3 from "../assets/gadgets.png"
import images4 from "../assets/jewelries.png"
import images5 from "../assets/sports.png"
import images6 from "../assets/men.png"
import images7 from "../assets/women.png"
import images8 from "../assets/toys.png"



const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Grocery & Essentials',
      image: [images1],
    },
    {
      id: 2,
      name: 'Furnitures',
      image: [images2],
    },
    {
      id: 3,
      name: 'Gadgets',
      image: [images3],
    },
    {
      id: 4,
      name: 'Jewelries',
      image: [images4],
    },
    {
      id: 5,
      name: 'Sports',
      image: [images5],
    },
    {
      id: 6,
      name: 'Men',
      image: [images6],
    },
    {
      id: 7,
      name: 'Women',
      image: [images7],
    },
    {
      id: 8,
      name: 'Toys',
      image: [images8],
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Extra small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 mb-5">
      <Slider {...sliderSettings}>
        {categories.map((category) => (
          <div key={category.id}>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <button className="bg-yellow-400 text-white py-2 px-4 rounded-md hover:bg-yellow-500">
                  Explore
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
