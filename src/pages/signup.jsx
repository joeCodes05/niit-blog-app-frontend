import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/28aOt4-LogoMakr.png'
import FormControl from '../utils/inputForms'

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <form action="#" className='w-[450px] lg:p-0 px-5 space-y-5'>
          <div className="mx-auto w-fit">
            <Link to={'/'}>
              <span className="sr-only">Swoosh</span>
              <img className="h-14 w-auto" src={Logo} alt="swoosh logo" />
            </Link>
          </div>
          <div>
            <FormControl 
              placeholder={'Full name'}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type={'text'}
            />
          </div> 
          <div>
            <FormControl 
              placeholder={'expample@email.com'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={'email'}
            />
          </div>         
          <div>
            <FormControl 
              placeholder={'Password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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