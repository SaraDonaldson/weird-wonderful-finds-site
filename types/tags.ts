

export interface Tag{
    name: string
    nameVariants?: TagNameVariant[]
    subTags?: SubTag []
}
export interface SubTag extends Tag{
    parentId: string // foreign key id
}

export interface TagNameVariant{
    TagId: string // foreign key
    name: string
}

export interface MovementTag extends Tag{
    decades?: Decade []
    topics?: string []// foreign key to topics
    tags?: Tag []
    makers?: string [] // foreign key to makers
    items?: string [] // foreign key to items
    people?: Person []
    themes?: Tag []
}

type Decade = 1800 | 1810 | 1820 | 1830 | 1840 | 1850 | 1860 | 1870 | 1890
            |1900 | 1910 | 1920 | 1930 | 1940 | 1950 | 1960 | 1970 | 1990
            | 2000 | 2010 | 2020

type PeopleCategory = "previous_owner" | "owned_similar" | "featured_person" 

interface Person{
    id: string,
    connectedToUser?: string [] //user ids personally connected
    peopleCategory: PeopleCategory
    name: string
    items?: string []
    topics?: string []
    movements?: string []
}


