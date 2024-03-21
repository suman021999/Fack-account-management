import React from 'react'
import Link from 'next/link'

import AccordionUI from '@/components/AccordionUI'
const Users = () => {
  return (
    <>
     <div className='flex flex-col justify-center items-center mt-10'>
       <AccordionUI />
      </div>

      <div className='flex flex-col justify-center items-center mt-10'>
       <Link href='/'><button className='bg-[#eb547c] px-4 py-3 text-2xl font-bold rounded-md'>Main page</button></Link>
      </div>
      
    </>
   
  )
}

export default Users
