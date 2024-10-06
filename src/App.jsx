import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

/* 

Header
---logo
---nav-items
Body
---Search
---Restaurants Container
---Restaurant Card
    --img
    --Name of res, star rating , cuisine
    --
Footer
---Copyright
---Links
---Address
---Contacts

*/



const AppLayout = () => {

  // const router = createBrowserRouter()

  return (
    <div className="app">
       <BrowserRouter>
        <Routes>
          <Route path="/signup"  element={<Signup />} />
          <Route path="/" element={<> <Header/> <Body/> <Footer/> </>}/>
        </Routes>
       </BrowserRouter>
    </div>
  )
}


export default AppLayout
