import { InputTel } from '../../components/InputTel';
import { SubmitButton } from '../../components/SubmitButton';
import { Subtitle } from '../../components/Subtitle';
import './styles.scss';

export const StepEnd = () => {

  return (
    <section className="stepEnd">
      <Subtitle>Guarda tus respuestas</Subtitle>
      <InputTel button={<SubmitButton />} />
    </section>
  );
};
