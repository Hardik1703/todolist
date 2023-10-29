import React from 'react'

const page = () => {
  return (
    <>
      <h1 className='bg-gray-500 text-6xl text-white text-center p-5'>TodoList</h1>
      <form>
        <input type="text" placeholder='Enter Title' className='border border-3 border-black m-5 p-3 rounded' />
        <input type="text" placeholder='Enter Details' className='border border-3 border-black m-5 p-3 rounded' />
        <button className='bg-black text-white py-3 px-4 rounded'>Submit</button>
      </form>
    </>
  )
}

export default page