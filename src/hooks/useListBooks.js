function useListBooks({books,list}) {
  return books.library.filter((book)=>list.includes(book.book.ISBN))

}

export default useListBooks