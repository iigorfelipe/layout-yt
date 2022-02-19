import './css/App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './coponents/Header';
import Navigation from './coponents/Navigation';
import Main from './coponents/Main';
import Aside from './coponents/Aside';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navigation />
        <Main />
        <Aside />
      </BrowserRouter>
    </div>
  );
}

export default App;
