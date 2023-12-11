import React, { useState } from 'react'
import { IoArrowBackOutline, IoCamera } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import CategoryDropButton from '../utils/categorySelect';
import FormControl from '../utils/inputForms';
import WhiteButton from '../utils/whiteButton';

const CreatePost = () => {
  const navigator = useNavigate();
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [category, setCategory] = useState('');

  return (
    <>
      <section className='my-24 text-white max-w-xl mx-auto lg:px-0 px-5'>
        <div>
          <button onClick={() => navigator('/')} className='py-1.5 px-3 font-normal rounded-md bg-secondary ring-1 ring-gray-700 text-gray-400 duration-500 text-base flex gap-1 items-center outline-none'>
            <IoArrowBackOutline />
            <div>
              My feed
            </div>
          </button>
        </div>

        <div className="mt-10">
          <h1 className="text-white text-2xl font-bold">New Post</h1>
          <form action='#' className="mt-5">
            <CategoryDropButton
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <div className="mt-5 space-y-4">
              <div>
                <input type="file" className='hidden' id='imageUpload' accept='image/*' />
                <label htmlFor="imageUpload" className='w-full p-2 cursor-pointer rounded-md ring-1 ring-gray-700 flex items-center justify-center bg-secondary'>
                  <div className="flex gap-2 items-center">
                    <IoCamera />
                    <h3 className='text-white font-semibold'>Cover photo</h3>
                  </div>
                </label>
              </div>
              <div>
                <FormControl 
                  type={'text'}
                  placeholder={'Post title'}
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
              </div>

              <div>
                <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} name="postContent" id="postContent" cols="30" rows="7" placeholder='Share your thoughts' required className='p-2 rounded-md bg-secondary ring-1 ring-gray-700 w-full outline-none'></textarea>
              </div>

              <div>
                <WhiteButton 
                  text={'Create post'}
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default CreatePost