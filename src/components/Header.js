import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
    const [btnName, setbtnName] = useState('login')
    const onlineStatus = useOnlineStatus();
    console.log(LOGO_URL)
    return (
        <div className="flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 font-[500]">
            <div className="logo-conatainer">
                <img className="w-16 mx-6 mt-" src={LOGO_URL} alt="logo_image" />
            </div>
            <div className="flex items-center ">
                {/* This code is to render the list of nav items - it returns a list of links */}
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status:{onlineStatus ? "green" : "red"
                        }
                    </li>
                    <li className="px-4">
                        <Link to="/">Home
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="./About">About Us
                        </Link>
                    </li >
                    <li className="px-4">
                        <Link to="./contact">Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to="./grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                        <Link >Cart</Link>
                    </li>


                    <button className="login"
                        onClick={() => {
                            setbtnName('logOut')
                        }
                        }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

// first export the component to import 
export default Header; 