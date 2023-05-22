import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/images/ishwore.jpg";
import logoImg from '../assets/images/logo.png';


const Navbar = () => {
    return (
        <div className="fixed flex justify-between mt-1 mb-1 bg-slate-700 h-16 w-full">
            <div className=" w-14 h-14 text-end mx-5 mt-2">
                <img className="rounded-full" src={logoImg} alt="" />
            </div>

            <div className="pt-4 cursor-pointer ">

                <input type="search" placeholder="Search ..." className=" text-gray-400 rounded-xl text-center h-8 w-72 bg-slate-300 " />
            </div>
            
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link to="#" className="mx-3 rounded-2xl w-28 h-auto hover:font-bold hover:bg-slate-500 ">Dashboard</Link>
      </li>
      <li>
        <Link to="#" className="mx-3 rounded-2xl w-28 h-auto hover:font-bold hover:bg-slate-500 ">Settings</Link>
      </li>
      <li>
        <Link to="#" className="mx-3 rounded-2xl w-28 h-auto hover:font-bold hover:bg-slate-500 ">Earnings</Link>
      </li>
      <li>
        <Link to="#" className="mx-3 rounded-2xl w-28 h-auto hover:font-bold hover:bg-slate-500 ">Sign out</Link>
      </li>
    </ul>
</div>

            <div className="pt-4 font-semibold text-white  ">
                <ul className="flex" >
                    <li className="mx-3 rounded-2xl w-24 h-auto hover:font-bold hover:bg-slate-500 "> <Link to="/aboutus"><button className="px-3">AboutUs</button> </Link>
                        {/* <select className="bg-slate-700 border-none appearance-none">
                            <option><button>AboutUs</button></option>
                            <option><Link to="/whywithus">WhyWithUs</Link></option>
                            <option><Link to="/termandcondition"><button>Term And Condition</button> </Link></option>
                            <option><Link to="/whywithus"><button>Others</button> </Link></option>
                        </select> */}
                    </li>
                    <li className="mx-3 rounded-2xl w-28 h-auto hover:font-bold hover:bg-slate-500 "><Link to="/contactus"><button className="px-3">ContactUs</button> </Link></li>
                </ul>
            </div>
            <div className=" w-12 h-12 text-end mx-5 pt-2" >
                <Link to="/profile">
                    <img className="rounded-full" src={profileImg} alt="" />
                </Link>
            </div>

        </div>
    );
};

export default Navbar;