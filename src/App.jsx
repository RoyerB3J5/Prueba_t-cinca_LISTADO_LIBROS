import Header from './Components/Header'
import Book from './Components/Book'
import useFilter from './hooks/useFilter'
import Filter from './Components/Filter'
import List from './Components/List'
import { useStoreList } from './store/useStoreList.jsx'
import Books from './mocks/books.json'
import useListBooks from './hooks/useListBooks.js'


export const App = () => {
  const {changePrice,changeCategory,filterBooks,filter,sizeBook} = useFilter()
  const filteredBooks = filterBooks()
  const list = useStoreList(state => state.list)
  const deleteOfList = useStoreList(state => state.deleteOfList)
  const sizeList = list.length
  return (
    <>
      <Header titulo={"LISTA DE LIBROS"} />
      <main className='flex flex-col gap-3 w-full justify-center items-center'>
        <Filter filter={filter} changePrice={changePrice} changeCategory={changeCategory} sizeBook={sizeBook} sizeList={sizeList} />
        <section className='flex gap-4 h-auto' >
          <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-9'>
            {filteredBooks.map((book,index)=>{
              return (
              <Book key={index} book={book} />
              )
            })}
          </ul>
          <List books={Books} list={list} deleteOfList={deleteOfList} useListBooks={useListBooks} />
        </section>
        
      </main>
      
    </>
  )
}

