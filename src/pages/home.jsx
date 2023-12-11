import React from 'react'
import CategoryModal from '../utils/categoryFilterModal'
import PostCard from '../components/postCard'
import CoverImage2 from '../assets/images/post_2_cover_image.jpg'

const Home = () => {
  const posts = [
    {
      title: "Becoming a software developer in 2024",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor sapiente tenetur quisquam temporibus consequuntur maxime ab nesciunt mollitia, eligendi velit quas, a voluptatem impedit qui placeat, aperiam perspiciatis voluptates!",
      userName: 'John Doe',
      profileImage: undefined
    },

    {
      title: "Is AI taking over tech jobs?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor sapiente tenetur quisquam temporibus consequuntur maxime ab nesciunt mollitia, eligendi velit quas, a voluptatem impedit qui placeat, aperiam perspiciatis voluptates!",
      coverImage: CoverImage2,
      userName: 'Nathaniel Joseph',
      profileImage: undefined
    },

    {
      title: "Getting out of tutorial hell!",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor sapiente tenetur quisquam temporibus consequuntur maxime ab nesciunt mollitia, eligendi velit quas, a voluptatem impedit qui placeat, aperiam perspiciatis voluptates!",
      userName: 'Shunna Gambo',
      profileImage: undefined
    }
  ]

  return (
    <>
      <section className='max-w-7xl h-full mx-auto lg:px-0 md:px-3 mt-24 pb-5'>
        <CategoryModal />

        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:mx-0 mx-5 grid-cols-1 gap-4">
          {posts.map((data, index) => {
            const { title, content, coverImage, profileImage, userName } = data;

            return (
              <PostCard
                key={index}
                detail={`${content}`}
                userName={userName}
                title={title}
                topic={'JavaScript'}
                postTime={'20 minutes ago'}
                path={`/post/${1}`}
                coverPhoto={coverImage}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Home