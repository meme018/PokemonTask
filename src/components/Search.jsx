const Search = (search, setSearch) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-white py-5 font-bold ">Search for Pokemon</h1>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white h-10 w-96 rounded-2xl p-5 focus:outline-none "
        />
      </div>
    </>
  );
};

export default Search;
