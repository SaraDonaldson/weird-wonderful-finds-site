import { PostComment } from '@/types/post'
import Link from 'next/link'
import React from 'react'

interface CommentProps{
    comment: PostComment
}
function Comment({comment}:CommentProps) {

  return (
    <div className='flex flex-col gap-2 p-4 bg-slate-300 text-black'>
        <div className='flex flex-row gap-2'>
            <div className="rounded-xl border-cyan-600 border bg-slate-300 h-6 w-6"></div>
            <span><Link href={comment.author.profileLink}>
                   {comment.author.name}</Link></span>
        </div>
        {comment.text &&
            <div className='text-slate-600'>
                <span>{comment.text}</span>
            </div>
        }

    </div>
  )
}

export default Comment