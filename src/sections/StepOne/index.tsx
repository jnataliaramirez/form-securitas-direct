import { Information } from '../../components/Information';
import { RadioBox } from '../../components/RadioBox';
import { Subtitle } from '../../components/Subtitle';


export const StepOne = () => {
  return (
    <fieldset className="step">
      <Subtitle>Pregunta 1</Subtitle>

      <div className='step__container'>
        <RadioBox htmlFor="option1" value="option1" name="questionOne">
          Opcion 1
        </RadioBox>
        <RadioBox htmlFor="option2" value="option2" name="questionOne">
          Opcion 2
        </RadioBox>
        <RadioBox htmlFor="option3" value="option3" name="questionOne">
          Opcion 3
        </RadioBox>
      </div>
      
      <Information />
    </fieldset>
  );
};
