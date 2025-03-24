import Post from '@/components/posts/Post/Post'
import { Post as PostType } from '@/types/post'
import React from 'react'

interface ScrollableFeedProps{
  posts?: PostType []
}

function ScrollableFeed({posts}:ScrollableFeedProps) {

  return (
    <div>
       {posts?.map((post:PostType, i) => {
        return(
            <div key= {i}>
                <Post {...post}/>
            </div>
        )
       })}

    </div>
  )
}

export default ScrollableFeed