import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/28aOt4-LogoMakr.png'

const PostCard = ({ title, detail, profileImage, userName, coverPhoto, topic }) => {
  return (
    <>
      <Link to={'/'} className='no-underline group outline-none'>
        <div className='py-5 px-3 rounded-2xl ring-1 ring-gray-700 bg-secondary text-white'>
          <button className="flex gap-2 items-center bg-transparent outline-none">
            <div className="h-[40px] w-[40px] bg-primary overflow-hidden rounded-full flex items-center justify-center text-dark">
              NJ
            </div>
            <div>
              <h3 className='text-white font-semibold text-base text-left'>{userName}</h3>
              <h5 className='text-gray-400 text-sm text-left italic'>120 followers</h5>
            </div>
          </button>

          <div className="mt-3">
            <h1 className='text-white font-bold text-lg truncate'>
              {title}
            </h1>
          </div>

          <div className="mt-3">
            <div className="rounded-xl ring-1 ring-gray-700 p-2">
              <p className='text-gray-400 text-sm'>
                {detail}
              </p>

              <div className="mt-2 h-[150px] relative overflow-hidden w-full">
                <div className="bg-dark text-gray-400 absolute text-sm top-0 right-0 m-2 opacity-0 duration-500 group-hover:opacity-100 rounded-md py-1 px-2 shadow">
                  {topic}
                </div>
                {coverPhoto === undefined ? <div className='w-full h-full flex items-center justify-center rounded-xl bg-gradient-to-r from-[#CE3DF3] to-[#FF386E]'>
                  <img src={Logo} width={'50%'} alt="Swoosh logo" />
                </div> : null}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default PostCard