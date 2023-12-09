import React, { useContext } from 'react'
import CategoryModal from '../utils/categoryFilterModal'
import PostCard from '../components/postCard'

const Home = () => {
  return (
    <>
      <section className='max-w-7xl min-h-screen h-full mx-auto lg:px-0 px-3 mt-24 pb-5'>
        <CategoryModal />

        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:mx-0 mx-5 grid-cols-1 gap-4">
          <PostCard
            detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quae perferendis ab aspernatur beatae vel at atque...'}
            userName={'Nathaniel Joseph'}
            title={'Unleashing the good side Artificial Interligence adadfdfadffafsafasfasfasf'}
            topic={'JavaScript'}
          />          <PostCard
            detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quae perferendis ab aspernatur beatae vel at atque...'}
            userName={'Nathaniel Joseph'}
            title={'Unleashing the good side Artificial Interligence'}
            topic={'JavaScript'}
          />          <PostCard
            detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quae perferendis ab aspernatur beatae vel at atque...'}
            userName={'Nathaniel Joseph'}
            title={'Unleashing the good side Artificial Interligence'}
            topic={'JavaScript'}
          />          <PostCard
            detail={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quae perferendis ab aspernatur beatae vel at atque...'}
            userName={'Nathaniel Joseph'}
            title={'Unleashing the good side Artificial Interligence'}
            topic={'JavaScript'}
          />
        </div>
      </section>
    </>
  )
}

export default Home