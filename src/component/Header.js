import SearchBox from './SearchBox';

function Header() {
  return (
    <div className='sticky display flex justify-center items-center mt-8 pb-4 border-b shadow-md flex-col md:flex-row  md:justify-around'>
      <h1 className='text-4xl font-bold text-red-500'>Image Gallery App</h1>
      <SearchBox />
    </div>
  );
}

export default Header;
