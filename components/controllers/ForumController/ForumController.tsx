import ScrollableFeed from '@/components/feedLayouts/ScrollableFeed/ScrollableFeed'
import { Post } from '@/types/post'
import React from 'react'

const dummyPosts: Post [] = [
    {
    dateCreated: new Date("3rd february 2025"),
    textContent: "",
    media: [""],
    tags:  [""],
    author: "Lisa Smith", 
    },


]

function ForumController() {
  return (
    <div>
        <ScrollableFeed posts={dummyPosts}/>
    </div>
  )
}

export default ForumController