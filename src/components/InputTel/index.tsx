import './styles.scss';

interface Props {
  button: React.ReactElement;
}

export const InputTel: React.FC<Props> = ({ button }) => {
  return (
    <>
      <div className="input__wrapper">
        <input
          required
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
