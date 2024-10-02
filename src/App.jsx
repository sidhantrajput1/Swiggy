import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

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
  return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
  )
}


export default AppLayout
