import { useFormContext } from '../../core/context/hook.context';
import './styles.scss';

interface Props {
  button: React.ReactElement;
}

export const InputTel: React.FC<Props> = ({ button }) => {
  const { formState, updateField } = useFormContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateField(name, value);
  };
  return (
    <>
      <div className="input__wrapper">
        <input
          required
          type="tel"
          pattern="[0-9]*"
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleInputChange}
          placeholder="Teléfono"
          className="input"
        />
        {button}
      </div>
      <label htmlFor="phone" aria-hidden="true" className="label-hidden">
        Teléfono
      </label>
    </>
  );
};
