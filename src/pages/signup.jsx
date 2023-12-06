import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/images/28aOt4-LogoMakr.png'
import FormControl from '../utils/inputForms'
import axios from 'axios'
import { IoCloseOutline } from "react-icons/io5";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const navigator = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const passwordExpressions = /(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/

  const handleSignup = async (e) => {
    e.preventDefault();

    // password validation 
    if (!passwordExpressions.test(inputs.password)) {
      setShowAlert(true);
      setAlertType('error');
      setAlertMessage("Password must be at lease 8 characters long and has 1 symbol and 1 number.");
    } else {
      try {
        const data = await axios.post(`/auth/signup`, inputs);
        setShowAlert(true);
        setAlertType('success');
        setAlertMessage(data.data.message);
        setTimeout(() => {
          navigator('/login')
        }, 3000);
      } catch(err) {
        setShowAlert(true);
        setAlertType('error');
        setAlertMessage(err.response.data.message);
      }
    }
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <form method='post' onSubmit={handleSignup} className='w-[450px] lg:p-0 px-5 space-y-5'>
          <div className="mx-auto w-fit">
            <Link to={'/'}>
              <span className="sr-only">Swoosh</span>
              <img className="h-14 w-auto" src={Logo} alt="swoosh logo" />
            </Link>
          </div>
          {/* alert message */}
          {showAlert ? <div>
            <div className={`rounded-md ${alertType === 'success' ? 'ring-lime-500 bg-lime-500 text-lime-500' : 'ring-red-500 bg-red-500 text-red-500'} ring-1 bg-opacity-20 py-4 px-3 flex items-center`}>
              <div className='mr-auto'>
                <div className="font-semibold">
                  {alertMessage}
                </div> 
              </div>
              <div>
                <IoCloseOutline onClick={() => setShowAlert(false)} className='text-2xl cursor-pointer' />
              </div>
            </div>
          </div> : null}
          <div>
            <FormControl 
              placeholder={'Full name'}
              name="fullName"
              onChange={handleChange}
              type={'text'}
            />
          </div> 
          <div>
            <FormControl 
              placeholder={'expample@email.com'}
              name="email"
              onChange={handleChange}
              type={'email'}
            />
          </div>         
          <div>
            <FormControl 
              placeholder={'Password'}
              name="password"
              onChange={handleChange}
              type={'password'}
            />
          </div>
          <div>
            <button className='w-full p-2 rounded-md bg-white duration-500 hover:bg-gray-200 hover:ring-gray-200 text-dark ring-1 ring-white'>
              Sign up
            </button>
          </div>
          <div className="text-center text-gray-400">
            <small>Already have an account? <Link className='text-white underline' to={'/login'}>Log in</Link></small>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup