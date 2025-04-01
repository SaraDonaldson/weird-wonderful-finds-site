import { BookmarkPlusIcon } from 'lucide-react'
import React from 'react'

function SavePostButton() {
  return (
    <button className="text-gray-600 dark:text-gray-400 hover:text-violet-brand dark:hover:text-cyan-accent transition">
        <BookmarkPlusIcon />
    </button>
  )
}

export default SavePostButton