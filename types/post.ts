export interface Post{
    dateCreated: Date
    textContent?: string 
    media?: string [] 
    tags?: string []
    author: Author
    comments?: PostComment []
}

export interface Author{
    name: string
    profileImage: string
    profileLink: string
}


export interface Comment{
    text?: string
    media?: string []
    author: Author
    dateCreated: Date
    dateUpdated?: Date
}
export interface PostComment extends Comment{
    commentReplies?: Comment []
}