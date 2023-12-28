import { useState } from 'react';
import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';
import { Information } from '../../components/Information';
import { Subtitle } from '../../components/Subtitle';
import { Text } from '../../components/Text';
import { useFormContext } from '../../core/context/hook.context';

interface Props {
  onNext: () => void;
  miniStep?: boolean;
}

export const StepTwo: React.FC<Props> = ({ onNext, miniStep }) => {
  const { formState, updateField } = useFormContext();

  const [isAnyCheckboxChecked, setIsAnyCheckboxChecked] =
    useState<boolean>(false);

  const optionShow = (optionShow: string) => {
    const optionsText = ['optionA', 'optionB', 'optionC', 'optionD'];

    switch (optionShow) {
      case optionsText[0]:
        return 'Opción 1';
      case optionsText[1]:
        return 'Opción 2';
      case optionsText[2]:
        return 'Opción 3';
      case optionsText[3]:
        return 'Opción 4';
      default:
        return 'Verifica que todo vaya bien';
    }
  };

  const miniStepShow = () => {
    const selectCheckbox = formState.questionTwo;

    return selectCheckbox.map((item) => (
      <CheckBox
        htmlFor={item}
        value={item}
        name="questionTwo"
        onInputChange={handleInputChange}
        checked
      >
        {` ${optionShow(item)}`}
      </CheckBox>
    ));
  };

  const handleInputChange = (name: string, value: string, checked: boolean) => {
    const updatedValues = checked
      ? [...formState.questionTwo, value]
      : (formState.questionTwo as string[]).filter((item) => item !== value);

    updateField(name, updatedValues);
    setIsAnyCheckboxChecked(updatedValues.length > 0);
  };

  return (
    <fieldset className="step">
      <Subtitle>Pregunta 2</Subtitle>

      {!miniStep ? (
        <>
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
        </>
      ) : (
        <>{miniStepShow()}</>
      )}

      <Information />

      {!miniStep && (
        <>
          {!isAnyCheckboxChecked ? (
            <Button onNext={onNext}>Continuar</Button>
          ) : (
            <Button onNext={onNext} changeColor={isAnyCheckboxChecked}>
              Continuar
            </Button>
          )}
        </>
      )}
    </fieldset>
  );
};
