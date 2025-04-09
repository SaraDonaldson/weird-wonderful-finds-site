'use client'
import { PostComment, Post as PostType } from '@/types/post'

import React, { useState } from 'react'
import Comment from '../Comment/Comment'
import Image from 'next/image'
import FeedPostHeader from './PostHeader/PostHeader'
import PostInteractionBar from './PostInteractionBar/PostInteractionBar'
import AddCommentBelowButton from '@/components/forms/fields/AddComment/AddComment'



function Post( {...props}: PostType) {
    const [postComments, setPostComments]= useState<PostComment []>(props.comments||[])
  
    function addCommentToPost(comment:string){
        const newComment:PostComment = {
            author: {
                name: "current_user",
                profileImage: "...",
                profileLink: "user/current_user"
            },
            text: comment,
            dateCreated: new Date(),
        }
        const comments = [...postComments, newComment]
        setPostComments(comments)
    }
    
  return (
    // <div className='w-full flex flex-col bg-slate-500 min-h-14 p-10 gap-4'>
    <div className='w-full flex flex-col min-h-14 p-10 gap-4 bg-white dark:bg-dark-surface rounded-lg shadow-lg max-w-3xl mx-auto'>

        <FeedPostHeader {...props} />


        <div>
            <span>{props.textContent}</span>
        </div>
        { props.media &&
            <div className='my-6'>
                <Image 
                    height= {300}
                    width = {300}
                    src= {props.media[0]}
                    alt = "clock"
                />
            </div>

        }
        <PostInteractionBar/>

        <div>
            {
                postComments.length > 0 &&
                postComments.map((comment, i) => {
                    return(
                        <Comment key={i} comment ={comment}/>
                    )
                })
            }
            <AddCommentBelowButton addNewCommentCallback={addCommentToPost}/>
            
        </div>

    </div>
  )
}

export default Post