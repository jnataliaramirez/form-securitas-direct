import { useFormContext } from '../../core/context/hook.context';
import './styles.scss';

export const SubmitButton: React.FC = () => {
  const { formState } = useFormContext();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Enviando respuestas al servidor...', formState);
  };

  return (
    <button onClick={handleSubmit} type="submit" className="submit-button">
      Finalizar
    </button>
  );
};
