import React, { useRef, useState } from "react";
import profileImg from "../assets/images/ishwore.jpg";
import { Link,useNavigate } from "react-router-dom";
const ProfileMenu = () => {
    const [open,setOpen] = useState(false);
    const navigate = useNavigate();
   // const Menus = ["Profile", "Settings", "Logout"];
   const logout = () => {
    localStorage.clear();
    navigate('/login');
}

const menuRef = useRef();
const imgRef = useRef();
window.addEventListener('click',(e)=>{
    if(e.target !== menuRef.current && e.target !==imgRef.current){
        setOpen(false);
    }
})
    return (
        
        <div className="pt-2 pl-10 mr-2" >
            <div className="relative">
                <img
                ref={imgRef}
                onClick={()=>setOpen(!open)}
                className="rounded-full mx-0  w-12 h-12 object-cover  cursor-pointer" src={profileImg} alt="" />
            </div>
            {
                open &&
            <div ref={menuRef} className="bg-slate-300 my-3 mx-2 p-3 w-44 shadow-lg text-center  absolute -right-1 rounded-2xl">
                <ul onClick={()=> setOpen(false)}  >
                   {
                    // Menus.map((menu)=>( 
                    //     <li
                    //     onClick={()=> setOpen(false)}
                    //      className="p-2 text-lg cursor-pointer rounded-2xl hover:bg-slate-400 hover:font-semibold" key = {menu}>{menu}</li>
                    // ))
                   <> <li className="p-2 text-base cursor-pointer rounded-2xl hover:bg-slate-400 hover:font-semibold" ><Link to='/profile'>Profile</Link></li>
                    <li className="p-2 text-base cursor-pointer rounded-2xl hover:bg-slate-400 hover:font-semibold" ><Link to='/settings'>Settings</Link></li>
                    <li className="p-2 text-base cursor-pointer rounded-2xl hover:bg-slate-400 hover:font-semibold" ><button onClick={logout} >Logout</button></li>
                    
                    </>            }
                </ul>
            </div>
            }
        </div>

    )
    
}


export default ProfileMenu;