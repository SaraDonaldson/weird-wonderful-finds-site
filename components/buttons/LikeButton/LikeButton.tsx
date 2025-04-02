'use client'
import {  Heart} from 'lucide-react'
import React, { useState } from 'react'

interface LikeButtonProps{
    numberOfLikes: number
    liked:boolean
    toggleLikePostCallback: ()=> void
}

function LikeButton({numberOfLikes, liked, toggleLikePostCallback}:LikeButtonProps) {

  const [isLiked, setIsLiked] = useState<boolean>(liked);
  const [likeCount, setLikeCount] = useState<number>(numberOfLikes);
  const [animating, setAnimating] = useState<boolean>(false);
  const [countAnimating, setCountAnimating] =useState<boolean>(false);
 

   function handleToggle() {
    //  Update like count
    setLikeCount((c) => (isLiked ? c - 1 : c + 1));
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
  
    // Animation CSS Tailwind values
      const iconBase =
    'h-6 w-6 transition-transform duration-150 ease-out ' +
    'transition-colors duration-200 ease-in-out ' +
    'cursor-pointer';

  const iconNotlikedTW =
    'text-gray-600 hover:text-violet-brand hover:scale-110 active:scale-90 ' +
    'dark:text-gray-400 dark:hover:text-teal-500';

  const iconLikedTW =
    'text-violet-brand hover:text-violet-brand/90 hover:scale-110 active:scale-90 ' +
    'dark:text-teal-700 dark:hover:text-teal-500';

  // If “animating” is true, apply a temporary scale-125 to the icon container
  const iconAnimatingTW = animating ? 'scale-125' : 'scale-100';

  // For the count animation: scale up then settle
  const countBaseTW = 'ml-1 text-sm font-medium inline-block transform';
  const countAnimatingTW = countAnimating ? 'scale-110' : 'scale-100';
  const countTransition = 'transition-transform duration-150 ease-out';
  return (
    <button 
        aria-label={isLiked ? 'Unlike' : 'Like'}
        className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 
                       hover:text-violet-brand dark:hover:text-teal-500 transition"
        onClick={()=>handleToggle()} 
        >
        <div className={`${iconBase} ${isLiked ? iconLikedTW : iconNotlikedTW} ${iconAnimatingTW}`}>
        {isLiked ? (
          <Heart fill='oklch(60% 0.118 184.704)' aria-hidden="true" />
        ) : (
          <Heart aria-hidden="true" />
        )}
      </div>

      
      <span  className={`text-sm ${countBaseTW} ${countTransition} ${countAnimatingTW} ${
          isLiked ? 'text-violet-brand dark:text-teal-600' : 'text-gray-600 dark:text-gray-400'
        }`}>{likeCount}</span>
    </button>
  )
}

export default LikeButton