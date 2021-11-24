import React from 'react';
import iNext from '../imagens/next.png';
import { Link } from 'react-router-dom';
import '../css/navigation.css';

class Navigation extends React.Component {
  render() {
    let rows = [];
    for (let i = 0; i <= 9; i += 1) {
      rows.push(<li><Link to="">Categoria {i}</Link></li>)
    }

    return (
      <div className='nav'>
        <nav id='menu'>
          <ul>
            <li><Link className='all' to="">Tudo</Link></li>
            { rows }
            <Link to=""><div className='next'><img src={ iNext } alt="" /></div></Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;

