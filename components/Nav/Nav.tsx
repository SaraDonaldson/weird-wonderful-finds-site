import { Sparkles } from 'lucide-react'
import React from 'react'

function Nav() {
  return (
    <div className='w-screen h-12 fixed top-0 bg-slate-900 bg-opacity-50 pb-2 shadow-sm shadow-slate-900'>
        <div 
            className='w-screen bg-gradient-to-br from-0% from-amber-500 via-15% via-violet-600 to-35% to-transparent  h-12 fixed top-0 px-2 py-4 z-20 backdrop-blur-sm'
            > 
      
        
                <nav className='w-full flex flex-row justify-between items-center z-20'>

                    <div className='flex flex-row gap-2 align-middle items-center pl-7'>
                        <div className='w-4 h-4 bg-cyan-500 rounded-2xl shadow-amber-500 shadow-md inset-ring-lime-400 border-b-2 border-lime-500 ring-1 ring-violet-500'>
                            <div className='text-lime-500'><Sparkles size={12} /></div>

                        </div>
                            <span className='text-cyan-300 text-lg font-semibold'>Rag & Bone</span>
                    </div>

                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                </nav> 
        </div>
        {/* gradient layers start */}
             <div 
                className='w-screen bg-gradient-to-b from-0% from-slate-950 to-65% to-transparent opacity-70 h-12 fixed top-0'
                ></div> 
              <div 
                className='w-screen bg-gradient-to-r from-0% from-transparent via-25% via-violet-900 to-45% to-slate-900 opacity-30 h-12 fixed top-0'
                ></div>  
            <div 
                className='w-screen bg-gradient-to-l from-0% from-amber-400 via-35% via-fuchsia-500 to-70% to-amber-300 opacity-70 h-2 fixed top-0'
                >
                    <div 
                        className= 'w-screen bg-gradient-to-b from-0% from-amber-400 via-40% via-fuchsia-800 to-75% to-transparent h-4 fixed top-0 backdrop-blur-sm'    
                            >          
                    </div>  
                </div>
      
            <div 
                className='w-screen bg-gradient-to-b from-0% from-amber-400 via-15% via-violet-800 to-20% to-transparent opacity-30 h-12 fixed top-0 shadow-lg shadow-slate-800'
                ></div>     
      
    
    
        {/* gradient layers end */}
    </div>
  )
}

export default Nav