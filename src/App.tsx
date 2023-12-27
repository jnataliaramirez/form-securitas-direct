// import { useState } from 'react';

import { Button } from './components/Button';
import { Header } from './components/Header';
import { StepOne } from './sections/StepOne';
import { StepTwo } from './sections/StepTwo';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <Header />
      <StepOne />
      <StepTwo />
      <Button></Button>
    </div>
  );
}

export default App;
