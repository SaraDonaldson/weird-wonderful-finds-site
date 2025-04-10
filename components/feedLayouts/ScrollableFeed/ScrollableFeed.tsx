import Post from '@/components/posts/Post/Post'
import { Post as PostType } from '@/types/post'
import React from 'react'

interface ScrollableFeedProps{
  posts?: PostType []
}

function ScrollableFeed({posts}:ScrollableFeedProps) {

  return (
    <div className="w-3/5 min-h-screen  mx-auto px-10 py-10 flex-col">
        <div className="flex flex-col min-h-screen">

            {posts?.map((post:PostType, i) => {
                return(
                    <Post  key= {i} {...post}/>
                )
            })}

        </div>
    </div>
  )
}

export default ScrollableFeed