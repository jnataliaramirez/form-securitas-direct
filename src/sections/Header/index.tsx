import './styles.scss';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        Oferta del mes 
        <span className="header__title--br"></span>
        <span className="header__title--subtitle">Ahorra un 50%</span>
      </h1>
    </header>
  );
};
