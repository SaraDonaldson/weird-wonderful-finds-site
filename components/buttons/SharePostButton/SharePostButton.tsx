import SharePopover from '@/components/SharePopover/SharePopover';
import { Share2Icon } from 'lucide-react'
import React,{ useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface SharePostButtonProps{
    postId: string
}

function SharePostButton({ postId}:SharePostButtonProps) {
  const [animating, setAnimating] = useState<boolean>(false);
  
  

   function handleClick() {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 200);
  }

//  TW classes
  const base =
    'h-6 w-6 transition-transform duration-150 ease-out ' +
    'transition-colors duration-200 ease-in-out ' +
    'cursor-pointer';
  const rest = 'text-gray-600 dark:text-gray-400';
  const hover ='hover:text-violet-brand dark:hover:text-teal-500 hover:scale-110';
  const active = 'active:scale-90 active:duration-75';
  const animation = animating ? 'scale-125' : 'scale-100';

  return (
    <div>
        <Popover>
            <PopoverTrigger asChild>
                <button 
                        onClick={handleClick}
                        title="Share"
                        className={`flex items-center space-x-1 text-gray-600 dark:text-gray-400 
                            hover:text-violet-brand dark:hover:text-teal-500 transition 
                            ${base} ${rest} ${hover} ${active} ${animation}`}>
                    <Share2Icon/>
                </button>
            </PopoverTrigger>
            <PopoverContent>
                <SharePopover postId={postId}/>
            </PopoverContent>
        </Popover>
    </div>    
  )
}

export default SharePostButton