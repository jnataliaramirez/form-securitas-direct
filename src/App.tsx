import { useState } from 'react';
import { FormContextProvider } from './core/context/index';
import { Header } from './sections/Header';
import { StepEnd } from './sections/StepEnd';
import { StepOne } from './sections/StepOne';
import { StepTwo } from './sections/StepTwo';

function App() {
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    console.log('step', step);
    setStep(step + 1);
  };

  const calculateProgress = () => {
    return (step / 4) * 100 ;
  };

  return (
    <div className="wrapper">
      <div style={{ marginBottom: '20px' }}>
        <progress value={calculateProgress()} max="100" />
      </div>

      <div style={{ height: '100vh', overflowY: 'auto', padding: '20px' }}>
        {step === 1 && <Header onNext={handleNext} />}
        <FormContextProvider>
          <form action="" method="">
            {step === 2 && <StepOne onNext={handleNext} />}
            {step === 3 && <StepTwo onNext={handleNext} />}
            {step === 4 && <StepEnd />}
          </form>
        </FormContextProvider>
      </div>
    </div>
  );
}

export default App;
