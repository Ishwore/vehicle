import React, { useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
//import {useDispatch, useSelector } from 'react-redux'
// import Message from '../components/Message'
//import { register } from '../actions/userActions'


const SignUp = ({ location, history }) => {
   
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
     const navigate = useNavigate();
     useEffect(() => {
      const auth = localStorage.getItem('user');
      if (auth) {
          navigate('/');
      }
  })
  const collectData = async () => {
    console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/api/users', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },

        })
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/');

    
}
    // // const [message,setMessage] = useState(null)
    
    // const dispatch = useDispatch()
    

    // const userRegister = useSelector((state) => state.userRegister)
    // const {  userInfo } = userRegister
  
    // const redirect = location ? location.split('=')[1] : '/'
  
    // useEffect(() => {
    //   if (userInfo) {
    //     history.push(redirect)
    //   }
    // }, [history, userInfo, redirect])

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     if (password !== confirmPassword) {
    //       alert('Passwords do not match')
    //     } else {
    //       dispatch(register(name, email, password))
    //     }
    //   }
  
  
    return (
        <div className="inline-block mt-14 mx-96 ml-96 w-96">
            {/* {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>} */}
            <form  className=" ml-48 w-96  h-auto mt-10 ">
                <div className="mb-4 ">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <input type="text" value={name}
                        onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ishwore" required />
                </div>
                <div className="mb-4">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ishwore.cdy@gmail.com" pattern="^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$" required />
                </div>
                <div className="mb-4">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Enter password " required />
                </div>
                <div className="mb-4">
                    <label for="comfirmpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                    <input type="password" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Enter comfirm password " required />
                </div>
                <button type="submit" onClick={collectData}  className="text-white mt-4 w-96 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full  text-sm  px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">SignUp</button>
            </form>
            <div className='flex mt-6 ml-48 w-96'><p className='mx-4'>Already account exits ?</p><Link className='underline' to='/login'>Login</Link></div>
        </div>
    )
}

export default SignUp;
