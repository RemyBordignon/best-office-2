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
        <div className="Vote-button">
          <p>Three four one? {threeFourOne}</p>
          <button onClick={() => setThreeFourOne(threeFourOne + 3)}>Vote</button>
        </div>

        <div className="Vote-button">
          <p>Three four 3? Woohooo {threeFourThree}</p>
          <button onClick={() => setThreeFourThree(threeFourThree + 2)}>Vote</button>
        </div>

        <div className="Vote-button">
          <p>Three six three? Votes: {threeSixThree}</p>
          <button onClick={() => setThreeSixThree(threeSixThree + 1)}>Vote</button>
        </div>
      </header>

    </div>
  );
}

export default App;
