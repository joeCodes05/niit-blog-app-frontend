import React from 'react'

const ProfileButton = () => {
  return (
    <>
      <button className="flex gap-2 items-center bg-secondary p-1 pr-2 rounded-md">
        <div className='bg-primary text-dark py-1 px-1.5 rounded-md'>
          NJ
        </div>
        <div className='text-white text-sm'>
          Nathaniel
        </div>
      </button>
    </>
  )
}

export default ProfileButton