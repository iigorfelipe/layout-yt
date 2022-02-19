import React from 'react';
import '../css/main.css';

class Main extends React.Component {
  componentDidMount() {
    this.createContents();
  }

  createContents() {
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

  render() {
    return (
      <main className='main'></main>
    );
  }
}

export default Main;