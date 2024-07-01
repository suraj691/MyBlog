// import React, {useState, useEffect} from 'react'
// import { Container, PostCard } from '../components'
// import appwriteService from "../appwrite/config";


// function AllPosts() {
//     const [posts, setPosts] = useState([])
//     useEffect(() => {}, [])
//     appwriteService.getPosts([]).then((posts) => {
//         if (posts) {
//             setPosts(posts.documents)
//         }
//     })
//   return (
//     <div className='w-full py-8'>
//         <Container>
//             <div className='flex flex-wrap'>
//                 {posts.map((post) => (
//                     <div key={post.$id} className='p-2 w-1/4'>
//                         <PostCard {...post} />
//                     </div>
//                 ))}
//             </div>
//             </Container>
//     </div>
//   )
// }

// export default AllPosts


import React, { useState, useEffect } from 'react';
import { Container, PostCard, Loader } from '../components'; // Assuming Loader component is defined
import appwriteService from '../appwrite/config';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch posts when component mounts
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        setLoading(false); // Set loading to false after posts are fetched
      }
    });
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className='w-full py-8'>
      <Container>
        {loading ? (
          <Loader /> // Display loader while loading is true
        ) : (
          <div className='flex flex-wrap'>
            {posts.map((post) => (
              <div key={post.$id} className='p-2 w-1/4'>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
