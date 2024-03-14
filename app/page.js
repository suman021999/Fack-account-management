import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <Link href='/users'><button className='bg-[#eb547c] px-4 py-3 text-2xl font-bold rounded-md'>Users</button></Link>
    </div>
  )
}

export default Main
