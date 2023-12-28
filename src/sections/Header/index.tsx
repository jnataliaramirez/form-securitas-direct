import './styles.scss';

interface Props {
  onNext: () => void;
}

export const Header: React.FC<Props> = ({ onNext }) => {
  const handleNext = () => {
    onNext();
  };
  return (
    <div onClick={handleNext} className="header__wrapper">
      <header className="header">
        <h1 className="header__title">
          Oferta del mes
          <span className="header__title--br"></span>
          <span className="header__title--subtitle">Ahorra un 50%</span>
        </h1>
      </header>
    </div>
  );
};
