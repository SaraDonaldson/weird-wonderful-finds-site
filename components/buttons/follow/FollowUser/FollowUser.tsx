'use client'
import React from 'react'

interface FollowUserProps{
    following?: boolean
    followUserCallback: () => void
}

function FollowUser({following, followUserCallback}: FollowUserProps) {
  
    if(!following){
        return (
            <button
            className="px-3 py-1 text-sm font-medium 
                        bg-violet-brand text-white rounded-full 
                        hover:bg-violet-brand/90 transition 
                        dark:bg-violet-brand dark:text-gray-900"
                onClick={() => followUserCallback()}
            >
            Follow
            </button>
    )
    }else{
        return(
            <div className='px-3 py-1 text-sm font-medium'>Following</div>
        )
    }
}

export default FollowUser