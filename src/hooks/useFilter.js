import {useState} from 'react'
import Books from '../mocks/books.json'
function useFilter() {
  const [filter,setFilter]=useState({
    minPage:0,
    category:'all'
  })

  const changePrice=(e)=>{
    setFilter({
      ...filter,
      minPage:e.target.value
    })
  }
  const changeCategory=(e)=>{
    setFilter({
      ...filter,
      category:e.target.value
    })
  }

  const sizeBook = Books.library.length

  const filterBooks =()=>{
    return Books.library.filter((book)=>{
      if(filter.category === 'all'){
        return book.book.pages >= filter.minPage
      }
      return book.book.pages >= filter.minPage && book.book.genre === filter.category
    })
  }
  return {changePrice,changeCategory,filterBooks,filter,sizeBook}
}

export default useFilter