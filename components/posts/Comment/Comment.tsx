import LikeButton from '@/components/buttons/LikeButton/LikeButton'
import { Separator } from '@/components/ui/separator'
import { PostComment } from '@/types/post'
import { publishDisplayTime } from '@/utils/dateTime'
import Link from 'next/link'
import React from 'react'

interface CommentProps{
    comment: PostComment
    lastComment: boolean
}
function Comment({comment, lastComment}:CommentProps) {
    function handleLikeToggle(){
        console.log("comment liked")
    }
    const simulatedLikes = Math.ceil(Math.random()* 55)
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
        <div className='text-xs text-slate-500 flex flex-row gap-4'>
            <LikeButton numberOfLikes={simulatedLikes} liked={false} toggleLikePostCallback={handleLikeToggle} sizeXS/>
            <button className='hover:underline cursor-pointer'><span>Reply</span></button>
        </div>

        { comment.commentReplies &&
            <div className='flex flex-col gap-2 ml-6 mt-1'>
                <div className='text-sm flex flex-col gap-2'>
                    <Separator className='bg-slate-400'/>
                    <span>Comments</span>
                </div>
            {comment.commentReplies.map((commentReply,i) =>{
                return(
                        <div className='flex flex-col gap-2  p-2 bg-blue-100 rounded-sm' key={i}>
                            <div className='flex flex-row gap-2 justify-between'>
                                <div className='flex flex-row gap-2'>
                                    <div className="rounded-xl border-cyan-600 border bg-slate-300 h-6 w-6"></div>
                                        <span className='text-cyan-800 font-semibold'><Link href={commentReply.author.profileLink}>
                                            {commentReply.author.name}</Link></span>
                                    </div>
                                    <div>
                                        <span className='text-xs text-slate-500'>{publishDisplayTime(commentReply.dateCreated)}</span>
                                    </div>
                                </div>
                                {commentReply.text &&
                                    <div className='text-xs text-slate-600'>
                                        <span>{commentReply.text}</span>
                                    </div>
                                }
                        </div>
                )
            })}
            </div>
        }
        { !lastComment &&
            <Separator className='bg-slate-400'/>
        }
    </div>
  )
}

export default Comment