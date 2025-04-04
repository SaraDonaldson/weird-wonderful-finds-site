import { Share2Icon } from 'lucide-react'
import React,{ useState, useEffect, useRef } from 'react';

interface SharePostButtonProps{
    postId: string
}

function SharePostButton({ postId}:SharePostButtonProps) {
  const [animating, setAnimating] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const buttonRef = useRef(null);
  const popoverRef = useRef(null);

   function handleClick() {
    // 1) pop animation
    setAnimating(true);
    setTimeout(() => setAnimating(false), 200);

    // 2) toggle share menu (slightly delayed so pop feels first)
    setTimeout(() => {
      setMenuOpen((open) => !open);
      setCopied(false);
    }, 100);
  }

//  TW classes
  const base =
    'h-6 w-6 transition-transform duration-150 ease-out ' +
    'transition-colors duration-200 ease-in-out ' +
    'cursor-pointer';
  const rest = 'text-gray-600 dark:text-gray-400';
  const hover ='hover:text-violet-brand dark:hover:text-cyan-accent hover:scale-110';
  const active = 'active:scale-90 active:duration-75';
  const animation = animating ? 'scale-125' : 'scale-100';

  return (
        <button 
                ref={buttonRef}
        onClick={handleClick}
        title="Share"
        className={`flex items-center space-x-1 text-gray-600 dark:text-gray-400 
                     hover:text-violet-brand dark:hover:text-cyan-accent transition 
                    ${base} ${rest} ${hover} ${active} ${animation}`}>
            <Share2Icon/>
            <span className="text-sm">Share</span>
        </button>
  )
}

export default SharePostButton