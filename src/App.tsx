// import { useState } from 'react';

import { Header } from './components/Header';
import { StepOne } from './sections/StepOne';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='wrapper'>
      <Header/>
      <StepOne />
    </div>
  );
}

export default App;
