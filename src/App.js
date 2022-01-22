// import logo from './logo.svg';
import { useRef } from 'react';
import './App.css';

import Gameboard from './components/Gameboard';

function App() {

  const header = useRef(null);
  const content = useRef(null);
  const playBtn = useRef(null);
  const pauseBtn = useRef(null);

  const openApp = () => {
    header.current.classList.remove('down');
    content.current.classList.remove('down');
    playBtn.current.classList.remove('down');
    pauseBtn.current.classList.remove('down');
  };

  const closeApp = () => {
    header.current.classList.add('down');
    playBtn.current.classList.add('down');
    pauseBtn.current.classList.add('down');
    setTimeout(() => {
      content.current.classList.remove('down');
    }, 1700);
    // playBtn.current.
  };

  return (
    <div className="app-container">
      <div className="header-container down" ref={header}>
        <div className='header'>
          <div className="header-text">
            <div className="larger-text">
              Anagram Game
            </div>
            <div className="smaller-text">
              by ...
            </div>
          </div>
          <button 
            ref={playBtn}
            className="play-button down"
            onClick={openApp}>
            Play
          </button>
          <button 
            ref={pauseBtn}
            className="pause-button down"
            onClick={closeApp}>
            Pause
          </button>
        </div>
      </div>
      <div className='body-container down' ref={content}>
        <Gameboard/>
      </div>
    </div>
  );
}

export default App;
