import React from 'react'

function Footer() {
  return (
    <footer className='w-screen min-h-52 bg-gradient-to-b from-50% from-slate-800 to-100% to-black'>
        <div className='flex-row flex w-full px-20 pt-10 pb-32 gap-16'>

            <div className='max-w-1/3 flex flex-col'>
                <ul> Col 1
                    <li> item 1 ndhuhfh </li>
                    <li> item 2 ndoefh </li>
                    <li> item 3 ndhfh </li>
                    <li> item 4 efhdf sghs sgsdf </li>
                    <li> item 5 ndh </li>
                </ul>
            </div>
            <div className='max-w-1/3 min-w-1/4 flex flex-col'>
                 <ul> Col 2
                    <li> item 1 ndhuhfh </li>
                    <li> item 2 ndoefh </li>
                    <li> item 3 ndhfh </li>
                    <li> item 4 efhdf sghs sgsdf </li>
                    <li> item 5 ndh </li>
                </ul>
            </div>
        </div>

    </footer>
  )
}

export default Footer