import { SearchIcon } from '@heroicons/react/solid';

function SearchBox() {
  return (
    <div className='flex md:mt-4 md:border-2 rounded-full py-2 md:shadow-sm mt-5'>
      <input
        className='flex-grow pl-5 bg-transparent outline-none text-sm
      text-gray-600 placeholder-gray-400'
        type='text'
        placeholder='iceland'
      />
      <SearchIcon className='md:inline-flex h-8  bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
    </div>
  );
}

export default SearchBox;
