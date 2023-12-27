import { CheckBox } from '../../components/CheckBox';
import { Information } from '../../components/Information';
import { Subtitle } from '../../components/Subtitle';


export const StepTwo = () => {
  return (
    <section className="step">
      <Subtitle>Pregunta 2</Subtitle>

      <div className="step__container">
        <CheckBox htmlFor="option1" value="option1" name="questionTwo">
          Opcion 1
        </CheckBox>
        <CheckBox htmlFor="option2" value="option2" name="questionTwo">
          Opcion 2
        </CheckBox>
        <CheckBox htmlFor="option3" value="option3" name="questionTwo">
          Opcion 3
        </CheckBox>
        <CheckBox htmlFor="option4" value="option4" name="questionTwo">
          Opcion 4
        </CheckBox>
      </div>

      <Information />
    </section>
  );
};
