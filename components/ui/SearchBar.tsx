import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <Search className="w-4 h-4 cursor-pointer md:w-5 md:h-5 text-white hover:text-warning transition-colors duration-300 ease-in-out hoverEffect" />
    </div>
  )
}

export default SearchBar
