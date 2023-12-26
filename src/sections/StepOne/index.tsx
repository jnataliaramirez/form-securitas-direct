import { RadioBox } from '../../components/RadioBox';
import { Subtitle } from '../../components/Subtitle';
import './styles.scss';

export const StepOne = () => {
  return (
    <section className="step-one">
      <Subtitle>Pregunta 1</Subtitle>

      <RadioBox htmlFor="option1" value="option1" name="questionOne">
        Opcion 1
      </RadioBox>
      <RadioBox htmlFor="option2" value="option2" name="questionOne">
        Opcion 2
      </RadioBox>
      <RadioBox htmlFor="option3" value="option3" name="questionOne">
        Opcion 3
      </RadioBox>
    </section>
  );
};
