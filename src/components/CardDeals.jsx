import images1 from 'src/assets/card1.png'

const images1 = "src/assets/card1.png"
const images2= "src/assets/card2.png"
const images3 = "src/assets/card3.png"
const images4 = "src/assets/card4.png"
const images5 = "src/assets/card5.png"
const images6 = "src/assets/card6.png"
const images7 = "src/assets/card7.png"
const images8 = "src/assets/card8.png"




 const CardDeals = () => {
  return (
    <>
    <section className="flex justify-center p-4">
        <div className="flex-col ">
            <div className=" m-2 rounded"><img src={images1} alt="" /></div>
            <div className="m-2 row-span-2 rounded"><img src={images8} alt="" /></div>
        </div>
        <div className="row-span-2 w-[735px] h-[432px]">
            <div className="m-2 rounded col-span-2"><img src={images2} alt="" /></div>
            <div className="flex gap-2">
                <div className="gap-2 rounded ml-2 mr-1 mt-2"><img src={images7} alt="" /></div>
                <div className="gap-2 rounded mr-2 ml-1 mt-2"><img src={images6} alt="" /></div>
            </div>
        </div>
        <div>
            <div className="m-2 rounded w-fit"><img src={images4} alt="" /></div>
            <div className="m-2 rounded w-fit"><img src={images3} alt="" /></div>
            <div className="m-2 rounded w-fit"><img src={images5} alt="" /></div>
        </div>         
    </section>
    </>
  );
}

export default CardDeals;
