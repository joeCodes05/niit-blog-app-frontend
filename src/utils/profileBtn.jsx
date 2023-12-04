import React from 'react'

const ProfileButton = () => {
  return (
    <>
      <button className="flex gap-2 ring-0 lg:ring-1 ring-gray-700 items-center bg-secondary p-0 lg:p-1 lg:pr-2 rounded-md">
        <div className='bg-primary text-dark py-1 px-1.5 rounded-md'>
          NJ
        </div>
        <div className='text-white text-sm hidden lg:block'>
          Nathaniel
        </div>
      </button>
    </>
  )
}

export default ProfileButton