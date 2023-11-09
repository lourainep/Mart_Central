import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Mall from "../pages/Mall";
import CreateAccount from "../pages/CreateAccount";
import { LogIn } from "react-feather";
import Login from "../pages/Login";
import Notifications from "../pages/Notifications";
import StartSelling from "../pages/StartSelling";
import { Help } from "grommet-icons";
import Helphot from "../pages/Helphot";
import CustomerCare from "../pages/CustomerCare";
import Wishlist from "../pages/Wishlist";

export default function AppRouter () {
  return (
<>
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/Mall" element={<Mall/>}/>
        <Route path="/CreateAccount" element={<CreateAccount/>}/>
        <Route path="/Login" element = {<Login/>}/>
        <Route path="/Notifications" element = {<Notifications/>}/>
        <Route path ="/StartSelling" element = {<StartSelling/>}/>
        <Route path ="/Helphot" element = {<Helphot/>}/>
        <Route path="/CustomerCare" element ={<CustomerCare/>}/>
        <Route path="/Wishlist" element ={<Wishlist/>}/>

        
  
    </Routes>
    
    </BrowserRouter>
    </>
  )
}