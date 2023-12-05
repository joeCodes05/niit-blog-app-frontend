import React, { useContext } from 'react'
import { accountDropdownData } from '../constants/accountDropdownData'
import { Link } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";
import { DropdownContext } from '../context/dropdownContext';

const AccountMenu = () => {
  const { setDropdownOpen } = useContext(DropdownContext);

  return (
    <>
      <div className="absolute z-10 bg-dark space-y-2 top-full my-3 lg:mx-0 mx-3 right-0 ring-1 ring-gray-700 rounded-md p-2">
        {accountDropdownData.map((data, index) => {
          const { title, path, icon } = data;

          return (
            <div key={index}>
              <Link onClick={() => setDropdownOpen(false)} to={path} className='outline-none no-underline p-1.5 rounded-md bg-transparent ring-1 ring-transparent text-gray-400 duration-500 hover:bg-secondary hover:ring-gray-700 flex gap-2 items-center'>
                {icon}
                <div>
                  {title}
                </div>
              </Link>
            </div>
          )
        })}
        <button onClick={() => setDropdownOpen(false)} className='outline-none w-full p-1.5 rounded-md bg-transparent ring-1 ring-transparent text-gray-400 duration-500 hover:bg-secondary hover:ring-gray-700 flex gap-2 items-center'>
          <IoLogOutOutline />
          <div>Log Out</div>
        </button>
      </div>
    </>
  )
}

export default AccountMenu