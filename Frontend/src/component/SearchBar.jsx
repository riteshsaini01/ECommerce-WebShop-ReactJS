import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const SearchBar = () => {

    const { search, showSearch, setSearch, setShowSearch } =useContext(ShopContext); 

  return SearchBar ? (
    <div></div>
  ) : null
}

export default SearchBar