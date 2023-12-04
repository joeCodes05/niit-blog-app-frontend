import React from 'react'
import { LuSettings2 } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <section className='max-w-7xl mx-auto lg:px-0 px-3'>
        <div className="ml-auto w-fit">
          <button className='bg-transparent w-fit text-gray-500 duration-500 hover:text-white outline-none font-semibold flex items-center gap-2'>
            <div>Category filter</div> <LuSettings2 />
          </button>

          {/* category modal */}
          <div className="fixed h-screen w-screen z-50 top-0 left-0 bg-dark bg-opacity-80">
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-dark rounded-[15px] shadow ring-1 ring-gray-700 py-8 w-[450px] max-h-[500px] h-full overflow-hidden">
              {/* close modal button */}
              <button className="absolute bg-white rounded-full h-[25px] w-[25px] flex items-center justify-center -top-2 -right-2">
                <IoCloseOutline className='text-dark' />
              </button>

              {/* modal content */}
              <div>
                <h1 className='text-white font-bold text-2xl text-center'>
                  Choose topics to read
                </h1>
                <h3 className='text-gray-500 font-semibold text-lg text-center px-5'>
                  Pick topics you are interested in. You can always change these later.
                </h3>

                <div className="h-full min-h-[400px] mt-2 overflow-y-auto overflow-x-hidden w-full px-5 py-3">
                  <div className="grid grid-cols-3">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home