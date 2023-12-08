import React, { useContext } from 'react'
import CategoryModal from '../utils/categoryFilterModal'
import { DropdownContext } from '../context/dropdownContext'
import PostCard from '../components/postCard'

const Home = () => {
  const { setDropdownOpen } = useContext(DropdownContext)

  return (
    <>
      <section onClick={() => setDropdownOpen(false)} className='max-w-7xl min-h-screen h-full mx-auto lg:px-0 px-3 mt-24 pb-5'>
        <CategoryModal />

        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
          <PostCard
            detail={''}
          />
        </div>
      </section>
    </>
  )
}

export default Home