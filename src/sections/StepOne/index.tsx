import { Information } from '../../components/Information';
import { RadioBox } from '../../components/RadioBox';
import { Subtitle } from '../../components/Subtitle';
import { useFormContext } from '../../core/context/hook.context';

export const StepOne = () => {
  const { updateField } = useFormContext();

  const handleInputChange = (name: string, value: string) => {
    updateField(name, value);
  };

  return (
    <fieldset className="step">
      <Subtitle>Pregunta 1</Subtitle>

      <div className="step__container">
        <RadioBox
          htmlFor="option1"
          name="questionOne"
          value="option1"
          onInputChange={handleInputChange}
        >
          Opcion 1
        </RadioBox>
        <RadioBox
          htmlFor="option2"
          name="questionOne"
          value="option2"
          onInputChange={handleInputChange}
        >
          Opcion 2
        </RadioBox>
        <RadioBox
          htmlFor="option3"
          name="questionOne"
          value="option3"
          onInputChange={handleInputChange}
        >
          Opcion 3
        </RadioBox>
      </div>

      <Information />
    </fieldset>
  );
};
