import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, Loader, Logo, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        }).finally(setLoading(false))
    }, [])


    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Loader /> {/* Display loader while loading is true */}
            </div>
        );
    }
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                        <h1 className="text-2xl">
                            !! Welcome to <span className="font-bold">MyBlog</span> !!
                        </h1>
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                <br />
                                <br />
                                Please login to read posts
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home