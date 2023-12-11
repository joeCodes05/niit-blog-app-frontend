import React, { useContext } from 'react'
import Button from '../utils/buttons'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const {currentUser, firstName, lastName} = useContext(AuthContext);
  const navigator = useNavigate();

  return (
    <>
      <section className="h-full max-w-2xl mx-auto mt-24 text-white">
        <div className='relative'>
          <div className="h-[200px] rounded-t-[16px] bg-gray-600 w-full">
            <div className="absolute mx-5 bottom-0 left-0 h-[150px] w-[150px] border-[5px] border-dark rounded-full bg-primary flex items-center justify-center text-5xl text-dark font-bold">
              {firstName.charAt(0)}{lastName.charAt(0)}
            </div>
          </div>

          <div className="px-5 mt-4 text-right">
            <Button
              text={'Edit profile'}
              onclick={() => navigator('/account/settings')}
            />
          </div>
        </div>

        <div className="mt-3 px-5">
          <div>
            <h1 className='text-white font-bold text-3xl'>{currentUser.data?.full_name}</h1>
            <h4 className='text-gray-400 text-base'>{currentUser.data?.email}</h4>
          </div>

          <div className="mt-3">
            <div className="flex gap-5">
              <div className='text-gray-400'>
                43 <span className='font-semibold text-white'>Following</span>
              </div>
              
              <div className='text-gray-400'>
                114 <span className='font-semibold text-white'>Followers</span>
              </div>
            </div>
          </div>

          <div className="mt-3 text-gray-400 text-sm font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique, quam reprehenderit eum temporibus deleniti eveniet a repellendus veniam voluptatum, quo, dolore nobis enim eaque. Adipisci nam soluta molestiae quasi?
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile