import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const PostSingle = () => {
  const navigator = useNavigate();

  return (
    <>
      <section className="mt-24 text-white max-w-2xl mx-auto">
        <div>
          <button onClick={() => navigator('/')} className='py-1.5 px-3 font-normal rounded-md bg-secondary ring-1 ring-gray-700 text-gray-400 duration-500 text-base flex gap-1 items-center outline-none'>
            <IoArrowBackOutline />
            <div>
              My feed
            </div>
          </button>
        </div>
      </section>
    </>
  )
}

export default PostSingle