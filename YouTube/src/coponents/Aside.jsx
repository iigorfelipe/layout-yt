import React from 'react';
import iHouse from '../imagens/house.png';
import iCompass from '../imagens/compass.png';
import iInscrition from '../imagens/inscrições.png';
import iLibrary from '../imagens/library.png';
import { Link } from 'react-router-dom';
import '../css/aside.css';

class Aside extends React.Component {
  render() {
    return (
      <aside id='lateral'>
        <Link to=""><div><img src={ iHouse } alt="" /></div></Link>
        <Link to=""><div><img src={ iCompass } alt="" /></div></Link>
        <Link to=""><div><img src={ iInscrition } alt="" /></div></Link>
        <Link to=""><div><img src={ iLibrary } alt="" /></div></Link>
      </aside>
    );
  }
}

export default Aside;
