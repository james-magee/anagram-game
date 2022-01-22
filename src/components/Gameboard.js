import Letter from "./Letter";
import Timer from "./Timer";
import {default as Button} from "./CustomButton";
import LetterRow from "./LetterRow";

import './Gameboard.css';
import { useState } from "react";

const testStr = 'INTESTIN';

const gameStages = {
  notStarted: 'notStarted',
  selectingLetters: 'selectingLetters',
  inPlay: 'inPlay',
};

Object.freeze(gameStages);


const generateLetter = (vowel) => {
  while (true) {
    const letter = String.fromCharCode(Math.floor(96 + Math.random() * 26));
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      if (vowel) {
        return letter;
      } else {
        continue;
      }
    } else if (vowel) {
      continue;
    } else {
      return letter; 
    }
  }
};

const Gameboard = () => {
  // STATE VARS
  const [gameStage, setGameStage] = useState(gameStages.notStarted)
  const [str, setStr] = useState(new Array(0));
  
  // REF VARS
  // const gameboard = useRef(null);

  

  const correctClassName = () => {
    return ((gameStage == gameStages.notStarted) ? 'gameboard-base  not-started' : 'gameboard-base');
  };

  const addVowel = () => {
    const newStr = str;
    newStr.push(generateLetter(true));
    setStr([...newStr]);
  };

  const addConsonant = () => {
    const newStr = str;
    newStr.push(generateLetter(false));
    setStr([...newStr]);
  };

  return (
    <div className={correctClassName()}>
      {gameStage === gameStages.notStarted && 
      <div onClick={() => {setGameStage(gameStages.selectingLetters)}}>New Game</div>}
      {gameStage === gameStages.selectingLetters &&
      <>
        {/* <div className="gameboard ">
          {str.map((l, i) => {
            return <Letter key={Math.random().toString()} letter={l}/>;
          })}
          {[1,2,3,4].map((i) => {
            if (str[i] !== undefined) {
              return <Letter key={str.length} letter={str[i]}/>
            } else {
              return <Letter key={i} letter=''/>
            }
          })
          }
        </div> */}
        <LetterRow letters={str}/>
        <Button label='Vowel' clickHandler={addVowel}/>
        <Button label='Consonant' clickHandler={addConsonant}/>
        {/* <Timer initialTime={4} whenFinished={()=>{}}/> */}
      </>}
    </div>
  ); 
};

export default Gameboard; 