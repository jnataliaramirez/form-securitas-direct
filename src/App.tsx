import { FormContextProvider } from './core/context/index';
import { Header } from './sections/Header';
import { StepEnd } from './sections/StepEnd';
import { StepOne } from './sections/StepOne';
import { StepTwo } from './sections/StepTwo';



function App() {


  return (
    <div className="wrapper">
      <Header />
      <FormContextProvider>
        <form action="" method="">
          <StepOne />
          <StepTwo />
          <StepEnd />
        </form>
      </FormContextProvider>
    </div>
  );
}

export default App;
