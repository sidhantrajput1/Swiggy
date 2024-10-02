import { LOGO_URL } from "../utils/constants"

const Header = () => {
    return (
      <div className="header flex justify-between items-center p-3 mb-4 max-w-[1280px] mx-auto">
        <div className="logo">
          <img className="logo h-12 w-18" src={LOGO_URL}/>
        </div>
          <ul className="nav-items flex list-none space-x-5 font-semibold cursor-pointer">
            <li className=" hover:text-orange-400">Home</li>
            <li className=" hover:text-orange-400">About Us</li>
            <li className=" hover:text-orange-400">Contacts Us</li>
            <li className=" hover:text-orange-400">Cart</li>
          </ul>
      </div>
    )  
  }


export default Header