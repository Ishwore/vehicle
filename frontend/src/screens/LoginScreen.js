import { Link } from 'react-router-dom'
import React, {useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {

        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    })
    const handleLogin = async() =>{
        //console.warn("email,password",email,password);
        const userLogin =  await fetch("http://localhost:5000/api/users/login",{
            method :'post',
            body:JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const resultLogin = await userLogin.json();
        // const users = [
        //     {
        //       name: resultLogin.name,
        //       email: resultLogin.email,
        //     }
        // ]
        console.warn(userLogin);
        if(resultLogin.name){
            localStorage.setItem("user",JSON.stringify(resultLogin));
            navigate("/");
        }else{
            alert("Please enter correct details");
        }
    }  
    return (
       
            <div className="inline-block mt-24 ml-96 w-96 ">
            <form className="ml-48 w-96 h-auto mt-10">
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ishwore.cdy@gmail.com" pattern="^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$" required />
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" placeholder=" Enter password " required />
                </div>
                <button type="submit" onClick={handleLogin} class="text-white mt-4 w-96 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full  text-sm  px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Login</button>
            </form>
            <div className='flex mt-6 ml-48 w-96 text-base'><Link className='underline mx-3' to={'/signup'}><span>Create new Account?</span>SignUp</Link> <Link className=' mx-2 underline' to={'/forgetpassword'}>ForgetPassword?</Link></div>
            </div>
        
    
    );
};
export default Login;