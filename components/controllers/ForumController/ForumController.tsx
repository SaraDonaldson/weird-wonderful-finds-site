import ScrollableFeed from '@/components/feedLayouts/ScrollableFeed/ScrollableFeed'
import { Post } from '@/types/post'
import React from 'react'

const dummyPosts: Post [] = [
    {
    dateCreated: new Date("3rd february 2025"),
    textContent: "I found this strange clock at Salvation Army Store on Union Street",
    media: ["/s-l1200.jpg"],
    tags:  [""],
    author: { 
        name: "Lisa Smith",
        profileImage: "...",
        profileLink: "/view-profile/lisa-smith"
        },
    comments: [
        {   
            author: {
                name: "Candice Mustard",
                profileImage: "...",
                profileLink: "/view-profile/lisa-smith"  
            },
            text: "That's just like the one my aunt used to have, only greener",
            dateCreated: new Date("4th february 2025")
        },
         {   
            author: {
                name: "Lisa Smith",
                profileImage: "...",
                profileLink: "/view-profile/lisa-smith"
            },
            text: "No way! It's such a strange item",
            dateCreated: new Date("4th february 2025")
        },
  
    ]
    },


]

function ForumController() {
  return (
    <div className='w-full min-h-screen'>
        <ScrollableFeed posts={dummyPosts}/>
    </div>
  )
}

export default ForumController