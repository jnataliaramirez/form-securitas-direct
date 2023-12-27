// import { useState } from 'react';

import { Header } from './components/Header';
// import { StepOne } from './sections/StepOnke';
import { StepTwo } from './sections/StepTwo';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='wrapper'>
      <Header/>
      {/* <StepOne /> */}
      <StepTwo />
    </div>
  );
}

export default App;
