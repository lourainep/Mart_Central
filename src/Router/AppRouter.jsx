import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Mall from "../pages/Mall";
import CreateAccount from "../pages/CreateAccount";

export default function AppRouter () {
  return (
<>
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/Mall" element={<Mall/>}/>
        <Route path="/CreateAccount" element={<CreateAccount/>}/>
  
    </Routes>
    
    </BrowserRouter>
    </>
  )
}