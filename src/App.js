import './css/App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Aside from './components/Aside';

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
