import { useState } from 'react';
import { FormContextProvider } from './core/context/index';
import { Header } from './sections/Header';
import { StepEnd } from './sections/StepEnd';
import { StepOne } from './sections/StepOne';
import { StepTwo } from './sections/StepTwo';
import { ProgressBar } from './components/ProgressBar';

function App() {
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const calculateProgress = () => {
    return (step / 4) * 100;
  };

  return (
    <>
      <ProgressBar calculateProgress={calculateProgress} />
      <div className="wrapper">
        {step === 1 && <Header onNext={handleNext} />}
        <FormContextProvider>
          <form action="" method="">
            {step === 2 && (
              <>
                <Header miniStep />
                <StepOne onNext={handleNext} />
              </>
            )}
            {step === 3 && (
              <>
                <StepOne miniStep />
                <StepTwo onNext={handleNext} />
              </>
            )}
            {step === 4 && (
              <>
                <StepTwo onNext={handleNext} miniStep/>
                <StepEnd />
              </>
            )}
          </form>
        </FormContextProvider>
      </div>
    </>
  );
}

export default App;
