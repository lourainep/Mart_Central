const images1 = "src/assets/bpi.png"

const PaymentCards = () => {
    return (
      <div className="px-5">
        <div className="gap-5 flex max-md:flex-col justify-center max-md:gap-0">
          <div className="flex flex-col items-center w-full max-md:w-full max-md:ml-0">
            <img
              src={images1}
              className="object-cover w-[221px] overflow-hidden max-md:mt-2"
            />
          </div>
          <div className="flex flex-col items-stretch w-[50%] ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center text-black text-center text-sm font-bold  my-auto ">
              10% Discount for BPI rewards credit card until Dec 14 <span className="underline">Shop Now</span>
            </div>
          </div>
        </div>
      </div>
    );
}
export default PaymentCards;