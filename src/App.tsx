// import { useState } from 'react';

import { Header } from './sections/Header';
import { StepEnd } from './sections/StepEnd';
import { StepOne } from './sections/StepOne';
import { StepTwo } from './sections/StepTwo';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <Header />
      <form action="" method="" >
        <StepOne />
        <StepTwo />
        <StepEnd />
      </form>
    </div>
  );
}

export default App;
