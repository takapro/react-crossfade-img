import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import CrossfadeImg from '../../src';

const fetchCat = async (setImageUrl: (imageUrl: string) => void) => {
  try {
    const response = await fetch('http://aws.random.cat/meow');
    const data = await response.json();
    setImageUrl(data.file);
  } catch (err) {
  }
};

const fetchDog = async (setImageUrl: (imageUrl: string) => void) => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setImageUrl(data.message);
  } catch (err) {
  }
};

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (Math.random() < 0.5) {
      fetchCat(setImageUrl)
    } else {
      fetchDog(setImageUrl)
    }
  }, []);

  return (
    <>
      <h1>CrossfadeImg Example</h1>
      <p>
        <button onClick={() => { fetchCat(setImageUrl) }}>Cat</button>
        <button onClick={() => { fetchDog(setImageUrl) }}>Dog</button>
      </p>
      <CrossfadeImg src={imageUrl} width='640px' height='480px' objectFit='contain' />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
