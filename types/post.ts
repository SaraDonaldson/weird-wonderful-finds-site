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

export interface PostComment{
    text?: string
    media?: string []
    author: Author
    dateCreated: Date
    dateUpdated?: Date
}