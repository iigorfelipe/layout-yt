import React, { useEffect, useState } from 'react';
import '../css/main.css';
// import fetchData from '../temporario/service/api';
import { videos } from './helpers/videos';

const Main = () => {
  const [videoData, setVideoData] = useState(videos);
  console.log('UseState...:', videoData);

  // useEffect(() => {
  //   fetchData()
  //     .then(data => { setVideoData(data) } )
  //     .catch();
  // }, []);

  // useEffect(() => { createContents() }, [])

  // const transformData = (data) => {
  //   return data.map((item) => {
  //     return item.contentDetails.videoId
  //   })
  // } 

  const videoElement = (item) => {
    return (
      <div className="contents">
        {/* <iframe
        className="videos"
          title='mp4'
          src={`https://www.youtube.com/embed/${item.id}`}
        >
        </iframe> */}
        <img src={item.snippet.thumbnails.default.url} alt="" className="videos" />
        <div className="descrition">{item.snippet.description}</div>
      </div>
    )
  }

  return (
    <main className='main'>
      {
        videoData ? videoData.map((item) => videoElement(item) ) : []
      }
    </main>
  );
}

export default Main;

  // const createContents = () => {
  //   for (let i = 1; i < 13; i += 1) {

  //     // add contents
  //     const main = document.querySelector('.main');
  //     const contents = document.createElement('div');
  //     contents.className = 'contents';
  //     main.appendChild(contents);

  //     // add videos    
  //     const videos = document.createElement('div');
  //     videos.className = 'videos';
  //     videos.innerText = 'Vídeo'
  //     contents.appendChild(videos);

  //     // add descrition
  //     const descrition = document.createElement('div');
  //     descrition.className = 'descrition';
  //     descrition.innerText = 'Descrição'
  //     contents.appendChild(descrition);
  //   }
  // };
