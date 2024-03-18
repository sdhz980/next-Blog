'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {
    const [search,setSearch] = useState("");
    const router = useRouter();

    const handleEventKey = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }
    const handleSubmit = () => {
        router.push(`/blogs?search=${search}`)
    }

  return (
    
    <header className="antialiased">
  <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div className="flex flex-wrap justify-center items-center">
          <div className="flex justify-center items-center">
                <label for="search" className="sr-only">Search</label>
                <div className="relative mt-1 lg:w-96">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  </div>
                  <input type="text" value={search} onKeyDown={handleEventKey} onChange={(e) => setSearch(e.target.value)}  name="search" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search"/>
                </div>
                      <svg onClick={handleSubmit} className="w-4 h-4 ml-6 cursor-pointer text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> </svg>
            </div>
      </div>
  </nav>
</header>

  )
}

export default Navbar