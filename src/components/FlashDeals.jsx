import images1 from  "../assets/laptop.png"
import images2 from "../assets/hoodie.png"
import images3 from "../assets/flower.png"
import images4 from "../assets/xmas.png"
import images5 from "../assets/pan.png"
import images6 from "../assets/candles.png"
import images7 from "../assets/laptop.png"
import images8 from "../assets/hoodie.png"


const products = [
  {
    name: 'Lenovo Laptop IdeaPad',
    image: [images1],
    originalPrice: '$299.00',
    discountedPrice: '$199.00',
  },
  {
    name: 'Orange Hoodie',
    image: [images2],
    originalPrice: '$10.45',
    discountedPrice: '$5.75',
  },
  {
    name: 'Wreath Handmade',
    image: [images3],
    originalPrice: '$15.00',
    discountedPrice: '$12.00',
  },
  {
    name: 'Spooky Women Christmas Santa',
    image: [images4],
    originalPrice: '$142.59',
    discountedPrice: '$99.99',
  },
  {
    name: 'Copper Chef 8" Round Fry Pan',
    image: [images5],
    originalPrice: '$142.59',
    discountedPrice: '$99.99',
  },
  {
    name: 'Scented Candles for Men',
    image: [images6],
    originalPrice: '$14.90',
    discountedPrice: '$12.90',
  },
  {
    name: 'Lenovo Laptop IdeaPad',
    image: [images7],
    originalPrice: '$299.00',
    discountedPrice: '$199.00',
  },
  {
    name: 'Orange Hoodie',
    image: [images8],
    originalPrice: '$10.45',
    discountedPrice: '$5.75',
  },
];

const FlashDeals = () => {
  return (
    <div className="bg-white p-4 sm:p-8 md:p-12 -mt-[5%]">
      <h1 className="text-2xl font-semibold text-center mb-8">Flash Deals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img src={product.image} alt={product.name} className="w-40 mx-auto mb-4" />
            <div className="text-green font-extrabold text-lg">
              Now {product.discountedPrice}
            </div>
            <div className="text-stone text-xs font-medium">
              {product.originalPrice}
            </div>
            <div className="text-black text-xs font-medium mt-2">
              {product.name}
            </div>
            <button className="text-black font-bold text-base border bg-white w-full mt-2.5 px-5 py-3.5 rounded-full border-solid border-black">
              Options
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlashDeals;
