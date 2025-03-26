import { PostComment } from '@/types/post'
import { publishDisplayTime } from '@/utils/dateTime'
import Link from 'next/link'
import React from 'react'

interface CommentProps{
    comment: PostComment
}
function Comment({comment}:CommentProps) {

  return (
    <div className='flex flex-col gap-2 p-4 bg-slate-300 text-black'>
        <div className='flex flex-row gap-2 justify-between'>
            <div className='flex flex-row gap-2'>
                <div className="rounded-xl border-cyan-600 border bg-slate-300 h-6 w-6"></div>
                <span className='text-cyan-800 font-semibold'><Link href={comment.author.profileLink}>
                    {comment.author.name}</Link></span>
            </div>
            <div>
                <span className='text-xs text-slate-500'>{publishDisplayTime(comment.dateCreated)}</span>
            </div>
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