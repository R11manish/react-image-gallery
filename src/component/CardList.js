import axios from 'axios';
import { useEffect, useState } from 'react';

function CardList({ getPicture }) {
  useEffect(() => {
    fetchPictures(getPicture);
  }, [getPicture]);

  const [pic, setpics] = useState();

  const fetchPictures = (getPicture) => {
    const queryString = `https://api.unsplash.com/search/photos?page=1&query=${getPicture}&client_id=${process.env.APPLICATION_ID}`;
    axios.get(queryString).then((res) => {
      setpics(res.data);
      console.log(res.data);
    });
  };

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

export default CardList;
