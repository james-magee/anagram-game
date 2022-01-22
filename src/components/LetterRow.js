import Letter from './Letter';
import './Gameboard.css';

const LetterRow = ({letters}) => {
  return (
    <div className='gameboard'>
      {letters.map((l, i) => {

        return <Letter key={i} letter={l}/>;
      })}
    </div>
  );
};

export default LetterRow;