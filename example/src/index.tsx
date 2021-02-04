import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import CrossfadeImg from '../../src';

const fetchCat = async (setImageUrl: (imageUrl: string) => void) => {
  try {
    const response = await fetch('https://aws.random.cat/meow');
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
      <p>Credits:</p>
      <ul>
        <li>Cat images from <a href="https://aws.random.cat/">random.cat</a></li>
        <li>Dog images from <a href="https://dog.ceo/">DOG CEO</a></li>
        <li>Source code at <a href="https://github.com/takapro/react-crossfade-img">react-crossfade-img</a></li>
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
