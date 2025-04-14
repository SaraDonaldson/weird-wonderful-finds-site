import { useRouter } from 'next/navigation'
import React, { ReactElement } from 'react'

interface ExploreCardProps{
    name: string, 
    icon: ReactElement, 
    color:string, 
    image?:string
}

function ExploreCard({name, icon, color, image}: ExploreCardProps) {
    const router = useRouter()
  return (
    <div className= 'w-60 h-60 bg-slate-500 rounded-md'
        onClick={()=>router.push(`explore/${name}`)}
        >
      <div>
            {icon}
            <span>{name}</span>
        </div>

    </div>
  )
}

export default ExploreCard