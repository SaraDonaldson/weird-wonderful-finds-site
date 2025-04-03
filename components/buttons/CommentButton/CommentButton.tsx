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

    const baseTW =
    'h-6 w-6 transition-transform duration-150 ease-out ' +
    'transition-colors duration-200 ease-in-out ' +
    'cursor-pointer';

    // Hover:
    const hoverTW = 'hover:text-violet-brand dark:hover:text-teal-600 hover:scale-110';
    // Active (press):
    const activeTW = 'active:scale-90 active:duration-75';
    // Click‐pop animation:
    const animTW = animating ? 'scale-125' : 'scale-100';

  return (
     <button 
        onClick={handleClick}
        title="Comment"
        className={`flex items-center space-x-1  focus:outline-none  text-gray-600 dark:text-gray-400 
                       hover:text-violet-brand dark:hover:text-teal-500 transition ${hoverTW} `}
        >
        <MessageCircle   className={`${baseTW} ${hoverTW} ${activeTW} ${animTW}`}/>
      <span className="text-sm">34</span>
    </button>
  )
}

export default CommentButton