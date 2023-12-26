import { RadioBox } from '../../components/RadioBox';
import { Subtitle } from '../../components/Subtitle';
import './styles.scss';

export const StepOne = () => {
  return (
    <section className="step-one">
      <Subtitle>Pregunta 1</Subtitle>

      <RadioBox />
    </section>
  );
};
