import { useStoreList } from "../store/useStoreList"

function Book({book}) {
  const upgrateList = useStoreList(state => state.upgrateList)
  return (
    <li className='group relative hover:-translate-y-3 transition-all hover:cursor-pointer' onClick={()=>upgrateList(book.book.ISBN)}>
                <img src={book.book.cover} alt={book.book.title} className='max-w-[220px] aspect-[3/4] rounded-md hover:opacity-45 hover:bg-black'/>
                <h3 className='absolute bg-black text-white top-1/2 left-0 w-full py-3 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'>{book.book.title}</h3>
      </li>
  )
}

export default Book