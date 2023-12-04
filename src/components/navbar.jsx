import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/images/28aOt4-LogoMakr.png'
import Button from '../utils/buttons';
import ProfileButton from '../utils/profileBtn';
import { GoBell } from "react-icons/go";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/login' || location.pathname === '/signup' ? null : <header className="bg-dark border-b border-b-gray-600 fixed top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 lg:px-0 px-3" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to={'/'} className="-m-1.5 p-1.5">
              <span className="sr-only">Swoosh</span>
              <img className="h-10 w-auto" src={Logo} alt="swoosh logo" />
            </Link>
          </div>
          <div className="flex gap-3 lg:justify-end">
            <Button
              text={'New post'}
            />
            <button className='ring-1 ring-gray-700 bg-secondary py-1 px-2.5 text-white rounded-md'>
              <GoBell />
            </button>
            <ProfileButton />
          </div>
        </nav>
      </header>}
    </>
  )
}
