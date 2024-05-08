import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
function List({books,list,deleteOfList,useListBooks}) {

  const [open,setOpen]=useState(false)
  const handleOpen=()=>{
    setOpen(!open)
  }
  const listBooks = useListBooks({books:books,list:list})

  return (
    <>
      <aside className={` flex-col gap-4 h-auto w-[350px] bg-stone-200  py-5 px-3 rounded-tl-xl rounded-bl-xl transition-all duration-300 ${open || list.length===0 ?'hidden':'md:flex'} `}>
      <h3 className='text-xl bg-inherit font-medium'>Lista de Libros</h3>
      <p className='bg-inherit text-gray-600'>{list.length} libros</p>
      <hr className='border-stone-400 border-t-2 border-b-0'/>
      <ul className='flex flex-col gap-3 space-y-[-220px] bg-transparent justify-center items-center '>
          {listBooks.map((book,index)=>{
            return (
              <li key={index}   className='group relative  transition-all duration-300 hover:cursor-pointer  hover:z-10 bg-transparent'>
                <img src={book.book.cover} alt={book.book.title} className='max-w-[220px] aspect-[3/4] rounded-md'/>
                <div className='absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300 rounded-md'></div>
                <div className='absolute bg-black text-white top-0 right-0 w-8 h-8 rounded  opacity-0 group-hover:opacity-100 transition-opacity' onClick={()=>deleteOfList(book.book.ISBN)}>X</div>
              </li>
            )
          })}
      </ul>

      </aside>
      <div className={`text-3xl absolute top-1/3 right-0 p-1 bg-stone-200 hover:cursor-pointer rounded md:hidden ${list.length===0?'hidden':''}`} onClick={handleOpen}>
        <IoMdMenu className='bg-transparent' />
      </div>
    </>
    
  )
}

export default List