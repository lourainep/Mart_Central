import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images1 = "src/assets/grocery.png"
const images2= "src/assets/hoodie.png"
const images3= "src/assets/flower.png"
const images4= "src/assets/xmas.png"
const images5= "src/assets/pan.png"
const images6= "src/assets/candles.png"


const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Grocery & Essentials',
      image: 'src/assets/grocery.png',
    },
    {
      id: 2,
      name: 'Furnitures',
      image: 'src/assets/furnitures.png',
    },
    {
      id: 3,
      name: 'Gadgets',
      image: 'src/assets/gadgets.png',
    },
    {
      id: 4,
      name: 'Jewelries',
      image: 'src/assets/jewelries.png',
    },
    {
      id: 5,
      name: 'Sports',
      image: 'src/assets/sports.png',
    },
    {
      id: 6,
      name: 'Men',
      image: 'src/assets/men.png',
    },
    {
      id: 7,
      name: 'Women',
      image: 'src/assets/women.png',
    },
    {
      id: 8,
      name: 'Toys',
      image: 'src/assets/toys.png',
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
