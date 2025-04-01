import { MessageCircle } from 'lucide-react'
import React from 'react'

function CommentButton() {
  return (
     <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 
                       hover:text-violet-brand dark:hover:text-cyan-accent transition">
        <MessageCircle />
      <span className="text-sm">34</span>
    </button>
  )
}

export default CommentButton