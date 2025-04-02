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
 

   function handleToggle() {
    //  Update like count
    setLikeCount((c) => (isLiked ? c + 1 : c - 1));
    // Update like state (local)   
    setIsLiked(!isLiked);
    //  Trigger icon transition animation
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
    // Trigger count animation with delay
    setCountAnimating(true);
    setTimeout(() => setCountAnimating(false), 300);
    // toggle parent
    toggleLikePostCallback();
  }
  
  return (
    <button 
        className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 
                       hover:text-violet-brand dark:hover:text-cyan-accent transition"
        onClick={()=>handleToggle()} 
        >
      <Heart />
      <span className="text-sm">{likeCount}</span>
    </button>
  )
}

export default LikeButton