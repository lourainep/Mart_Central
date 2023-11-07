const images1 = "src/assets/laptop.png"
const images2= "src/assets/hoodie.png"
const images3= "src/assets/flower.png"
const images4= "src/assets/xmas.png"
const images5= "src/assets/pan.png"
const images6= "src/assets/candles.png"



const FlashDeals = () => {
  return (
    
    <div className="self-center flex w-full max-w-[1344px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
      <div className="flex flex-col">
        <div className="justify-center text-black ml-20  font-semibold text-xl">
          Flash Deals
        <div className="justify-center text-neutral-500 text-sm font-light mt-3">
          Up to 65% OFF
       </div>
      </div>
    </div>
        <div className="flex flex-col flex-1 mt-[5.2%] max-md:mt-10 ">
            <img src={images1} alt="laptop" /> 
        <div className="self-center flex  max-w-full items-start gap-2.5">
            <div className="justify-center text-green text-center text-base font-extrabold">
              Now $199.00
          </div>
          <div className="justify-center text-stone text-xs font-medium">
            $299.00
          </div>
        </div>
        <div className="text-black text-center text-xs font-medium mt-2">
          Lenovo Laptop IdeaPad 
        </div>
        <button className="justify-center text-black text-base font-bold border bg-white w-full  mt-2.5 px-5 py-3.5 rounded-[50px] border-solid border-black">
          Options
        </button>
        </div>
      <div className="flex flex-col flex-1 mt-[7%] max-md:mt-10">
        <img src={images2} alt="hoodie" /> 
        <div className="self-center flex  max-w-full items-start gap-2.5">
          <div className="justify-center text-green text-center text-base font-extrabold">
            Now $5.75
          </div>
          <div className="justify-center text-stone text-xs font-medium">
            $10.45
          </div>
        </div>
        <div className="text-black text-center text-xs font-medium mt-2">
          Orange Hoodie
        </div>
        <button className="justify-center text-black text-base font-bold border bg-white w-full  mt-2.5 px-5 py-3.5 rounded-[50px] border-solid border-black">
          Options
        </button>
      </div>
      <div className="flex flex-col flex-1 mt-[2.2%] max-md:mt-10">
        <img src={images3} alt="hoodie" /> 
        <div className="self-center flex  max-w-full items-start gap-2.5">
          <div className="justify-center text-green text-center text-base font-extrabold">
            Now $12.00
          </div>
          <div className="justify-center text-stone text-xs font-medium">
            $15.00
          </div>
        </div>
        <div className="text-black text-center text-xs font-medium mt-2">
          Wreath Handmade
        </div>
        <button className="justify-center text-black text-base font-bold border bg-white w-full  mt-2.5 px-5 py-3.5 rounded-[50px] border-solid border-black">
          Options
        </button>
      </div>
      <div className="flex flex-col flex-1 mt-[3.5%] max-md:mt-10 ">
            <img src={images4} alt="xmas" /> 
        <div className="self-center flex  max-w-full items-start gap-2.5">
            <div className="justify-center text-green text-center text-base font-extrabold">
              Now $99.99
          </div>
          <div className="justify-center text-stone text-xs font-medium">
            $142.59
          </div>
        </div>
        <div className="text-black text-center text-xs font-medium mt-2">
          Spooky Women Christmas Santa 
        </div>
        <button className="justify-center text-black text-base font-bold border bg-white w-full  mt-2.5 px-5 py-3.5 rounded-[50px] border-solid border-black">
          Options
        </button>
        </div>
      <div className="flex flex-col mt-[4.8%] max-md:mt-10">
        <img src={images5} alt="" />
        <div className="self-center flex  max-w-full items-start gap-3.5 mt-2">
          <div className="justify-center text-green text-center text-base font-extrabold">
            Now $99.99
          </div>
          <div className="justify-center text-stone text-xs font-medium">
            $142.59
          </div>
        </div>
        <div className="text-black text-center text-xs font-medium ml-4 max-md:ml-2.5">
          Copper Chef 8" Round Fry Pan
          <br />
        </div>
        <button className="justify-center text-black text-base font-bold border bg-white w-full  mt-2.5 px-5 py-3.5 rounded-[50px] border-solid border-black">
          Options
        </button>
      </div>
      <div className="flex flex-col flex-1 mt-[2%]">
        <img src={images6} alt="" />
        <div className="self-center flex max-w-full items-start gap-3.5 mt-2.5">
          <div className="justify-center text-green text-center text-base font-extrabold">
            Now $12.90
          </div>
          <div className="justify-center text-stone text-xs font-medium">
            $14.90
          </div>
        </div>
        <div className="justify-center text-black text-center text-xs font-medium ml-3 mt-3 max-md:ml-2.5">
          Scented Candles for Men Candles for Home 8oz,
        </div>
        <button className="justify-center text-black text-base font-bold border bg-white w-full  mt-2.5 px-5 py-3.5 rounded-[50px] border-solid border-black">
          Options
        </button>
      </div>
    </div>
  );
}

export default FlashDeals;