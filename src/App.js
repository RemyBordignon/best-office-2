import { useState } from 'react';
import './App.css';

function App() {
  const [threeFourOne, setThreeFourOne] = useState(0);
  const [threeFourThree, setThreeFourThree] = useState(0);
  const [threeSixThree, setThreeSixThree] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Which syd office is the best?
        </p>
        <div style={{display: 'flex'}} className="Vote-button">
          <p>Three four one? {threeFourOne}</p>
          <button onClick={() => setThreeFourOne(threeFourOne + 1)}>Vote</button>
        </div>

        <div style={{display: 'flex'}} className="Vote-button">
          <p>Three four three? {threeFourThree}</p>
          <button onClick={() => setThreeFourThree(threeFourThree + 1)}>Vote</button>
        </div>

        <div style={{display: 'flex'}} className="Vote-button">
          <p>Three six three? {threeSixThree}</p>
          <button onClick={() => setThreeSixThree(threeSixThree + 1)}>Vote</button>
        </div>
      </header>

    </div>
  );
}

export default App;
