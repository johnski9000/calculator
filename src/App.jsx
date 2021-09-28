import "./App.css";
import React, {useState} from 'react';

// Aims of the app:
// Add todo items to a to do list 
// Mark Completed items
// Delete Items
// Components
// Input form for the todos
// List component to show todos

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult('');
  }
  const backspace = () => {
    setResult(result.slice(0, - 1));
  }
  const calculate = () => {
    try{
      setResult(eval(result).toString());
    } catch(err){
      setResult("Error")
    }
  }
  return(
    <div>
      <div className="container">
        <form>
          <input type="text" value={result}/>
        </form>
        <div className="keypad">
          <button onClick={clear} id ="clear">Clear</button>
          <button onClick={backspace} id ="backspace">C</button>
          <button name="/" id ="" onClick={handleClick}>&divide;</button>
          <button name="7" id ="" onClick={handleClick}>7</button>
          <button name="8" id ="" onClick={handleClick}>8</button>
          <button name="9" id ="" onClick={handleClick}>9</button>
          <button name="*" id ="" onClick={handleClick}>&times;</button>
          <button name="4" id ="" onClick={handleClick}>4</button>
          <button name="5" id ="" onClick={handleClick}>5</button>
          <button name="6" id ="" onClick={handleClick}>6</button>
          <button name="-" id ="" onClick={handleClick}>&ndash;</button>
          <button name="1" id ="" onClick={handleClick}>1</button>
          <button name="2" id ="" onClick={handleClick}>2</button>
          <button name="3" id ="" onClick={handleClick}>3</button>
          <button name="+" id ="" onClick={handleClick}>+</button>
          <button name="0" id ="" onClick={handleClick}>0</button>
          <button name="." id ="" onClick={handleClick}>.</button>
          <button onClick={calculate} id="result">=</button>
        </div>
      </div>
    </div>
  )
};

export default App;
