import React, { useEffect } from 'react';
import '../css/main.css';

export default function Main() {
  useEffect(() => { createContents() }, [])

  const createContents = () => {
    for (let i = 1; i < 13; i += 1) {

      // add contents
      const main = document.querySelector('.main');
      const contents = document.createElement('div');
      contents.className = 'contents';
      main.appendChild(contents);

      // add videos    
      const videos = document.createElement('div');
      videos.className = 'videos';
      videos.innerText = 'Vídeo'
      contents.appendChild(videos);

      // add descrition
      const descrition = document.createElement('div');
      descrition.className = 'descrition';
      descrition.innerText = 'Descrição'
      contents.appendChild(descrition);
    }
  };

  return (
    <main className='main'></main>
  );
}
