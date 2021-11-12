import Header from './component/Header';
import CardList from './component/CardList';
import { useState } from 'react';

function App() {
  const { getPicture, setPicture } = useState('landscapes');

  return (
    <div className='bg-white'>
      <Header setPicture={setPicture} />
      <main className='max-w-screen-2xl mx-auto bg-white'>
        <CardList getPicture={getPicture} />
      </main>
    </div>
  );
}

export default App;
