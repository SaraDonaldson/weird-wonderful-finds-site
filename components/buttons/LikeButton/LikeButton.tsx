'use client'
import { Heart } from 'lucide-react'
import React from 'react'

interface LikeButtonProps{
    numberOfLikes: number
    liked?:boolean
    toggleLikePostCallback: ()=> void
}

function LikeButton({numberOfLikes, liked, toggleLikePostCallback}:LikeButtonProps) {


  return (
    <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 
                       hover:text-violet-brand dark:hover:text-cyan-accent transition">
      <Heart />
      <span className="text-sm">128</span>
    </button>
  )
}

export default LikeButton