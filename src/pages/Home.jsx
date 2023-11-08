import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import BotNavbar from "../components/BotNavbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import  CardDeals  from "../components/CardDeals";
import FakeStore from "../components/FakeStore";
import Carousel from "../components/Carousel";



export default function Home ()  {
  return (
    <>
    <TopNavbar/>
    <Navbar/>
    <BotNavbar/>
    <CardDeals/>
    <FakeStore/>
    <Carousel/>
    <Categories/>
    <Footer/>
    </>
  );
}
