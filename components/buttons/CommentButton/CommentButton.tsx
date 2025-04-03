import { MessageCircle } from 'lucide-react'
import React,{ useState } from 'react';

interface CommentButtonProps{
    triggerCommentCallback: ()=> void
}

function CommentButton({triggerCommentCallback}:CommentButtonProps) {
    const [animating, setAnimating] = useState(false);


  function handleClick() {
    // Callback to trigger comment box
    triggerCommentCallback()
    // animate on click
    setAnimating(true);
    setTimeout(() => setAnimating(false), 200);
  }

   

  return (
     <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 
                       hover:text-violet-brand dark:hover:text-cyan-accent transition">
        <MessageCircle />
      <span className="text-sm">34</span>
    </button>
  )
}

export default CommentButton