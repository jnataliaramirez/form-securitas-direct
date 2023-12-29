import { useEffect, useState } from 'react';
import { Information } from '../../components/Information';
import { RadioBox } from '../../components/RadioBox';
import { Subtitle } from '../../components/Subtitle';
import { useFormContext } from '../../core/context/hook.context';

interface Props {
  miniStep?: boolean;
  onNext?: () => void;
}

export const StepOne: React.FC<Props> = ({ onNext, miniStep }) => {
  const { formState, updateField } = useFormContext();

  const [animationActive, setAnimationActive] = useState<boolean>(false);

  const [changeRadio, setChangeRadio] = useState<string>(formState.questionOne);

  useEffect(() => {
    setChangeRadio(formState.questionOne);
  }, [formState.questionOne]);

  useEffect(() => {
    if (changeRadio) {
      setAnimationActive(true);
    }
  }, [changeRadio]);

  const selectRadio = formState.questionOne;
  let optionShow;

  const optionsText = ['option1', 'option2', 'option3'];

  switch (selectRadio) {
    case optionsText[0]:
      optionShow = 'Opción 1';
      break;
    case optionsText[1]:
      optionShow = 'Opción 2';
      break;
    case optionsText[2]:
      optionShow = 'Opción 3';
      break;
    default:
      break;
  }

  const handleInputChange = (name: string, value: string) => {
    updateField(name, value);
    onNext?.();
  };

  return (
    <fieldset className="step">
      <Subtitle>Pregunta 1</Subtitle>

      <div className="step__container">
        {!miniStep ? (
          <>
            <RadioBox
              htmlFor="option1"
              name="questionOne"
              value="option1"
              onInputChange={handleInputChange}
            >
              Opción 1
            </RadioBox>
            <RadioBox
              htmlFor="option2"
              name="questionOne"
              value="option2"
              onInputChange={handleInputChange}
            >
              Opción 2
            </RadioBox>
            <RadioBox
              htmlFor="option3"
              name="questionOne"
              value="option3"
              onInputChange={handleInputChange}
            >
              Opción 3
            </RadioBox>
          </>
        ) : (
          <RadioBox
            htmlFor={selectRadio}
            name="questionOne"
            value={selectRadio}
            onInputChange={handleInputChange}
            checked
          >
            {optionShow}
          </RadioBox>
        )}
      </div>

      <Information animationActive={animationActive} />
    </fieldset>
  );
};
