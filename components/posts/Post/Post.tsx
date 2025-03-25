import { Post as PostType } from '@/types/post'
import Link from 'next/link'
import React from 'react'
import Comment from '../Comment/Comment'
import Image from 'next/image'


function Post( {...props}: PostType) {
  
    
  return (
    <div className='w-full flex flex-col bg-slate-500 min-h-14 p-10 gap-4'>
        <div className='flex flex-row gap-2'>
            <div className="rounded-xl border-cyan-600 border bg-slate-300 h-6 w-6"></div>
            <span><Link href={props.author.profileLink}>
                   {props.author.name}</Link></span>
        </div>

        <div>
            <span>{props.textContent}</span>
        </div>
        { props.media &&
            <div className='my-6'>
                <Image 
                    height= {300}
                    width = {300}
                    src= {props.media[0]}
                    alt = "clock"
                />
            </div>

        }

        <div>
            {
                props.comments &&
                props.comments.map((comment, i) => {
                    return(
                        <Comment key={i} comment ={comment}/>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Post