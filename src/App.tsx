// import { useState } from 'react';

import { Header } from './components/Header';
import { StepEnd } from './sections/StepEnd';
import { StepOne } from './sections/StepOne';
import { StepTwo } from './sections/StepTwo';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <Header />
      <StepOne />
      <StepTwo />
      <StepEnd />
    </div>
  );
}

export default App;
