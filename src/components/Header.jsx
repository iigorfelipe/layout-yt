import React from 'react';
import iBars from '../imagens/bars-solid.png'
import iLogo from '../imagens/logo-yt.png'
// import iKeyboard from '../imagens/keyboard.png'
import iSearch from '../imagens/searchw.svg'
import iMicrophone from '../imagens/microphone.png'
import iVideo from '../imagens/video-solid.png'
import iGrid from '../imagens/grid-solid.png'
import iBell from '../imagens/bell-regular.png'
import iIcon from '../imagens/icon.jpg'
import { Link } from 'react-router-dom';
import '../css/header.css';

export default function Header() {
  return (
    <header>
      <div className='container1'>
        <div className='menu'>
          <Link to=""><img src={ iBars } alt="" /></Link>
        </div>
        <Link to=""><div className='logoyt'><img src={ iLogo } alt='Youtube' /></div></Link>
      </div>

      <div className='container2'>
        <div className='search'>
          <input type ="text" placeholder=' Pesquisar' />
        </div>
        {/* <div className='keyboard'>
          <Link to=""><img src={ iKeyboard } alt="" /></Link>
        </div> */}
        <div className='subcontainer'>
          <Link to="">
            <div className='div-lupa'>
              <span className="material-icons-outlined" />
              <img src={ iSearch } alt="" />
            </div>
          </ Link>
          <Link to="">
            <div className='div-microphone'>
              <img className='microphone' src={ iMicrophone } alt="" />
            </div>
          </Link>
        </div>
      </div>

      <div className='container3'>
        <div className='buttons'>
          <div className='div-video'>
            <Link to=""><img className='video' src={ iVideo } alt="" /></Link>
          </div>
          <div className='div-grid'>
            <Link to=""><img className='grid' src={ iGrid } alt="" /></Link>
          </div>
          <div className='div-bell'>
            <Link to=""><img className='bell' src={ iBell } alt="" /></Link>
          </div>
          <div className='div-icon'>
            <Link to=""><img className='icon' src={ iIcon } alt="" /></Link>
          </div>
        </div>
      </div>
    </header>
  )
}
