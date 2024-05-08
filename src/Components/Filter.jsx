
function Filter({filter,changePrice,changeCategory,sizeBook,sizeList}) {
  const avaibleBook = sizeBook - sizeList
  return (
    <>
      <aside className='flex flex-col justify-between w-[80%] mb-4 gap-4 lg:w-[60%] md:flex-row'>
        <div className='flex gap-1 justify-center items-center'>
          <p>Minimo de paginas</p>
          <input type="range" name="pagina" min={0} max={500} value={filter.minPage} onChange={changePrice}/>
          <p>{filter.minPage} pag</p>
        </div>
        
        <div className='flex gap-3 justify-center items-center'>
          <p>Categoria</p>
          <select name="cateoria" className='bg-white border' value={filter.category} onChange={changeCategory} >
            <option value="all">Todos</option>
            <option value="Fantasía">Fantasía</option>
            <option value="Ciencia ficción">Ciencia ficción</option>
            <option value="Zombies">Zombies</option>
          </select>
        </div>
      </aside>
      <div className="mb-4 text-slate-500">
          <p>Libros disponibles:{avaibleBook}</p>
      </div>
    </>
  
  )
}

export default Filter