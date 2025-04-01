import { Share2Icon } from 'lucide-react'
import React from 'react'

function SharePostButton() {
  return (
        <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 
                             hover:text-violet-brand dark:hover:text-cyan-accent transition">
            <Share2Icon/>
            <span className="text-sm">Share</span>
        </button>
  )
}

export default SharePostButton