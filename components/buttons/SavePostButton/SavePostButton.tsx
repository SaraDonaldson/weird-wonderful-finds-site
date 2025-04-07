import { Bookmark, BookmarkPlusIcon } from 'lucide-react'
import React, { useState } from 'react'

interface SavePostButtonProps{
    saved: boolean
    toggleSavePostCallback: () => void
}

function SavePostButton({saved, toggleSavePostCallback}:SavePostButtonProps) {
    const [isSaved, setIsSaved]= useState<boolean>(saved)

    function handleClick(){
        toggleSavePostCallback()
        setIsSaved((isSaved) => !isSaved)
    }

  return (
    <button className="text-gray-600 dark:text-gray-400"
        onClick={()=> handleClick()}
        aria-label={saved ? 'Remove bookmark' : 'Save post'}
        >
        {isSaved ?
        (
            <BookmarkPlusIcon 
                className='h-6 w-6 duration-150 transition-colors ease-in-out cursor-pointer
                            active:scale-90 active:duration-75 hover:scale-110 hover:text-emerald-300' 
    />
        ):(
            <Bookmark
                className='h-6 w-6 duration-150 transition-transform ease-in-out cursor-pointer fill-emerald-500
                 stroke-emerald-600 hover:fill-emerald-300 active:scale-90 active:duration-75' 
            
            />
        )}
    </button>
  )
}

export default SavePostButton