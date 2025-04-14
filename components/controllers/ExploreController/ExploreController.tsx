'use client'
import ExploreCard from '@/components/cards/ExploreCard/ExploreCard'
import SearchWithFilters from '@/components/forms/SearchWithFilters/SearchWithFilters'
import { BookUser, LayoutList, PaletteIcon, Pickaxe, Shapes} from 'lucide-react'
import { ReactElement } from 'react'


export const exploreSectionsLinks: {name: string, icon: ReactElement, color:string, image?:string} [] = [
            {name:"Categories", icon: <LayoutList/>, color:""},
            {name:"movements", icon: <PaletteIcon/>, color:""},
            {name:"makers", icon: <Pickaxe/>, color:""},
            {name:"people", icon: <BookUser/> , color:""},
            {name:"topics", icon: <Shapes/>, color:""},
        ]
    

function ExploreController() {


  return (
    <div>
        <SearchWithFilters/>

    <div className='mx-auto flex flex-col w-2/3 h:auto'>
        <span>Explore</span>
        <div className='w-full flex'>
            <div className='w-full flex flex-row flex-wrap gap-10'>
                {exploreSectionsLinks.length > 0 &&(
                    exploreSectionsLinks.map((section:{name: string, icon: ReactElement, color:string, image?:string} , index:number)=>{
                        return(
                         <div 
                             className='max-w-1/3'
                             key={index} 
                            >
                            <ExploreCard {...section}/>
                         </div>   
                    )})
                  )
                 }
            </div>
        </div>
    </div>

    </div>
  )
}

export default ExploreController