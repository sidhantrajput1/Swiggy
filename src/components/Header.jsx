import { useNavigate, useSearchParams } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"
import { useState } from "react"

const Header = () => {


  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const navigate  = useNavigate();


  const clickingSingup = (e)=>{
    navigate("/signup")
  }


    return (
      <div className="header flex justify-between items-center p-3 mb-4 max-w-[1280px] mx-auto ">
        <div className="logo">
          <img className="logo h-12 w-18" src={LOGO_URL}/>
        </div>
        <div>
          <ul className="nav-items flex list-none space-x-5 items-center justify-between font-semibold cursor-pointer">
              <li className=" hover:text-orange-400">Home</li>
              <li className=" hover:text-orange-400">About Us</li>
              <li className=" hover:text-orange-400">Contacts Us</li>
              <li className=" hover:text-orange-400">Cart</li>
              {
                isLoggedIn ? (
                  <>
                  <p className="bg-orange-400  p-2  rounded-full">SK</p></>
                ) : (
                  <>
                  <button onClick={clickingSingup} className=" hover:text-white  bg-orange-400 p-2 rounded-lg ">Signup</button>
                  </>
                )  

              }
          </ul>
        </div>  
      </div>
    )  
  }


export default Header