'use client'
import FollowUser from '@/components/buttons/follow/FollowUser/FollowUser'
import { Post } from '@/types/post'
import { publishDisplayTime } from '@/utils/dateTime'
import Link from 'next/link'
import React from 'react'


function FeedPostHeader(post: Post) {
    
    function followUser(){
        console.log("following user")
    }


  return (
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center space-x-3">
          {/* <img
            src={post.author.media.avatar}
            alt={`${post.author.name}'s avatar`}
            className="h-12 w-12 rounded-full object-cover border-2 border-peach-light 
                       dark:border-gray-600"
          /> */}

          <div className="flex flex-col">
            <div className='flex flex-row gap-2 items-center'>
                <div className="rounded-3xl border-peach-light  border-2 bg-slate-300 h-10 w-10"></div>
                <span className="font-semibold text-xl text-gray-900 dark:text-dark-text">
                    <Link href={post.author.profileLink}>
                    {post.author.name}</Link>
                </span>
             </div>
            <div className="flex items-center pl-12 space-x-1 text-gray-500 dark:text-gray-400 text-sm">
              <span>@{post.author.name}</span>
              <span>·</span>
              <time dateTime={publishDisplayTime(post.dateCreated)} className="italic">
                {new Date(post.dateCreated).toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>
          </div>
        </div>
        <FollowUser followUserCallback={followUser}/>

      </div>
  )
}

export default FeedPostHeader