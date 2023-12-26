import './styles.scss';

export const RadioBox = () => {
  return (
    <>
      <div className="radio-box">
        <label htmlFor="option1" className="radio-label"></label>
        <span className="radio-span">Opción 1</span>
        <div className="radio-dot"></div>
        <input
          id="option1"
          type="radio"
          value="option1"
          name="oneQuestion"
          className="radio-input"
        />
      </div>
    </>
  );
};
