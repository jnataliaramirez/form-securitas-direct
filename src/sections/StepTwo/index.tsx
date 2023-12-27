import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';
import { Information } from '../../components/Information';
import { Subtitle } from '../../components/Subtitle';
import { Text } from '../../components/Text';

export const StepTwo = () => {
  return (
    <fieldset className="step">
      <Subtitle>Pregunta 2</Subtitle>
      <Text> Puedes elegir varias opciones </Text>

      <div className="step__container">
        <CheckBox
          htmlFor="optionA"
          value="optionA"
          name="questionTwo"
          // checked={formData.questionTwo.includes('optionA')}
          // onChange={() => handleCheckboxChange('questionTwo', 'optionA')}
        >
          Opcion 1
        </CheckBox>
        <CheckBox
          htmlFor="optionB"
          value="optionB"
          name="questionTwo"
          // checked={formData.questionTwo.includes('optionB')}
          // onChange={() => handleCheckboxChange('questionTwo', 'optionB')}
        >
          Opcion 2
        </CheckBox>
        <CheckBox
          htmlFor="optionC"
          value="optionC"
          name="questionTwo"
          // checked={formData.questionTwo.includes('optionC')}
          // onChange={() => handleCheckboxChange('questionTwo', 'optionC')}
        >
          Opcion 3
        </CheckBox>
        <CheckBox
          htmlFor="optionD"
          value="optionD"
          name="questionTwo"
          // checked={formData.questionTwo.includes('optionD')}
          // onChange={() => handleCheckboxChange('questionTwo', 'optionD')}
        >
          Opcion 4
        </CheckBox>
      </div>

      <Information />

      <Button>Continuar</Button>
    </fieldset>
  );
};
