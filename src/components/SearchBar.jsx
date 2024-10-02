
const SearchBar = () => {
    return (
      <div className="search-bar w-[100%] flex space-x-1 max-w-[1280px] mx-auto ">
        <input 
          type="Search"
          placeholder="Search..."
          className="border border-red-400 focus:outline-none px-3 w-[94%] h-10 rounded"
        />
        <button className="h-10 w-[6%] font-semibold border-red-400 bg-orange-400 rounded hover:text-white">Search</button>
      </div>
    )
  }

export default SearchBar