import { CheckBox } from '../../components/CheckBox';
import { Information } from '../../components/Information';
import { Subtitle } from '../../components/Subtitle';
import { Text } from '../../components/Text';

export const StepTwo = () => {
  return (
    <section className="step">
      <Subtitle>Pregunta 2</Subtitle>
      <Text> Puedes elegir varias opciones </Text>

      <div className="step__container">
        <CheckBox htmlFor="optionA" value="option1" name="questionTwo">
          Opcion 1
        </CheckBox>
        <CheckBox htmlFor="optionB" value="option2" name="questionTwo">
          Opcion 2
        </CheckBox>
        <CheckBox htmlFor="optionC" value="option3" name="questionTwo">
          Opcion 3
        </CheckBox>
        <CheckBox htmlFor="optionD" value="option4" name="questionTwo">
          Opcion 4
        </CheckBox>
      </div>

      <Information />
    </section>
  );
};
