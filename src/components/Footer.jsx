import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <>
    

   
<div className=" bg-secondary container mb-0 flex flex-col md:flex-row justify-between items-center min-w-full">
        <div className="container mx-auto flex flex-col items-center mt-4">
        <div className="text-center">
          <h3 className="text-lg sm:text-md font-bold text-textw">We'd love to hear what you think!</h3>
          <button className="bg-textw text-secondary font-semibold py-1 px-8 rounded-full mb-3 hover:bg-gray-200">
            Give Feedback
          </button>
        </div>
      </div>
      </div>

<footer className="bg-primary text-textw py-2 w-full mb-0 ">   
<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg sm:text-xl font-bold">Customer Service</h3>
          <ul className="mt-2">
            <li>
              <a href="/help-center" className="text-sm hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="/order-tracking" className="text-sm hover:underline">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="/return" className="text-sm hover:underline">
                Return & Refund
              </a>
            </li>
            <li>
              <a href="/return" className="text-sm hover:underline">
                Privacy and Policy
              </a>
            </li>
            <li>
              <a href="/return" className="text-sm hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg sm:text-xl font-bold">Get to Know Us</h3>
          <ul className="mt-2">
            <li>
              <a href="/careers" className="text-sm hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="/our-company" className="text-sm hover:underline">
                Our Company
              </a>
            </li>
          </ul>
      
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg sm:text-xl font-bold">START SELLING</h3>
          <ul className="mt-2">
            <li>
              <a href="/careers" className="text-sm hover:underline">
                Open your shop
              </a>
            </li>
            <li>
              <a href="/our-company" className="text-sm hover:underline">
                Affiliate Program
              </a>
            </li>
          </ul>
        </div>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg sm:text-xl font-bold">FOLLOW US ON</h3>
          <div className="flex justify-center md:justify-start items-center space-x-4 mt-2">
          <a href="/facebook.com" className="text-sm hover:underline">
              <AiOutlineFacebook/>
              </a>
              <a href="/facebook.com" className="text-sm hover:underline">
              <AiOutlineInstagram/>
              </a>
              <a href="/facebook.com" className="text-sm hover:underline">
              <AiOutlineGithub/>
              </a>
              <a href="/facebook.com" className="text-sm hover:underline">
              <AiOutlineLinkedin/>
              </a>
              <a href="/facebook.com" className="text-sm hover:underline">
              <AiOutlineTwitter/>
              </a>
          </div>
    
          <div className="container bg-yellow mx-auto border-r- md:rounded-lg px-10 mt-5 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h3 className="text-lg text-brown sm:text-sm font-bold text-center mt-2">Sign up for Emails, Discount Alerts & more</h3>
          <div className="mt-6 mb-5">
            <div className="rounded-lg overflow-hidden flex ring-black ring-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-green-400 text-gray-800 py-2 px-8 w-full"
              />
              <div>
              <button className="bg-green sm:text-sm text-white py-1 px-5 hover:bg-green-600">
                SIGN UP
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-bold">Accepted Payment Methods</h3>
          <div className="flex justify-center md:justify-start items-center space-x-4 mt-2">
          <img
      src="src/assets/visa.svg"
      className="aspect-[2.86] object-contain object-center w-full overflow-hidden self-stretch grow mt-3.5"
    />
             <img
      src="src/assets/mastercard.svg"
      className="aspect-[2.86] object-contain object-center w-full overflow-hidden self-stretch grow mt-3.5"
    />
          </div>
        </div>
      </div>
    </footer>
      </>
  )
};
export default Footer;