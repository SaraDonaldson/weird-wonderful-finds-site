import CommentButton from '@/components/buttons/CommentButton/CommentButton'
import LikeButton from '@/components/buttons/LikeButton/LikeButton'
import SavePostButton from '@/components/buttons/SavePostButton/SavePostButton'
import SharePostButton from '@/components/buttons/SharePostButton/SharePostButton'
import React from 'react'

function PostInteractionBar() {

    function likeToggle(){
        console.log("liked/unliked")
    }

    function triggerComment(){
        console.log('open comment form')
    }
     function savePostToggle(){
        console.log('save post to bookmarks')
    }

  return (
        <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
            <LikeButton liked={false} numberOfLikes={36} toggleLikePostCallback={likeToggle} />
            <CommentButton  triggerCommentCallback={triggerComment}/>
            <SharePostButton postId='2667gdbdjoddg'/>
        </div>
            <SavePostButton toggleSavePostCallback={savePostToggle} saved={false}/>
      </div>
  )
}

export default PostInteractionBar