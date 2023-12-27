import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';
import { Information } from '../../components/Information';
import { Subtitle } from '../../components/Subtitle';
import { Text } from '../../components/Text';
import { useFormContext } from '../../core/context/hook.context';

export const StepTwo = () => {
  const { updateField } = useFormContext();

  const handleInputChange = (name: string, value: string) => {
    updateField(name, value);
  };

  return (
    <fieldset className="step">
      <Subtitle>Pregunta 2</Subtitle>
      <Text> Puedes elegir varias opciones </Text>

      <div className="step__container">
        <CheckBox
          htmlFor="optionA"
          value="optionA"
          name="questionTwo"
          onInputChange={handleInputChange}
        >
          Opcion 1
        </CheckBox>
        <CheckBox
          htmlFor="optionB"
          value="optionB"
          name="questionTwo"
          onInputChange={handleInputChange}
        >
          Opcion 2
        </CheckBox>
        <CheckBox
          htmlFor="optionC"
          value="optionC"
          name="questionTwo"
          onInputChange={handleInputChange}
        >
          Opcion 3
        </CheckBox>
        <CheckBox
          htmlFor="optionD"
          value="optionD"
          name="questionTwo"
          onInputChange={handleInputChange}
        >
          Opcion 4
        </CheckBox>
      </div>

      <Information />

      <Button>Continuar</Button>
    </fieldset>
  );
};
