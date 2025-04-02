'use client'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'

interface LikeButtonProps{
    numberOfLikes: number
    liked?:boolean
    toggleLikePostCallback: ()=> void
}

function LikeButton({numberOfLikes, liked, toggleLikePostCallback}:LikeButtonProps) {

  const [isLiked, setIsLiked] = useState<boolean>(liked);
  const [likeCount, setLikeCount] = useState<number>(numberOfLikes);
   const [animating, setAnimating] = useState<boolean>(false);
  const [countAnimating, setCountAnimating] =useState<boolean>(false);
 
  
  return (
    <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 
                       hover:text-violet-brand dark:hover:text-cyan-accent transition">
      <Heart />
      <span className="text-sm">{likeCount}</span>
    </button>
  )
}

export default LikeButton