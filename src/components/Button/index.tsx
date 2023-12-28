import { useState } from 'react';
import './styles.scss';

interface Props {
  children: React.ReactNode;
  onNext: () => void;
  changeColor?: boolean;
}

export const Button: React.FC<Props> = ({ children, onNext, changeColor }) => {
  const [darkColor, setDarkColor] = useState(false);

  const handleNext = () => {
    setDarkColor(true);
    onNext();
  };

  return (
    <button
      className={`button 
      ${changeColor ? 'change-color' : ''} 
      ${darkColor ? 'dark-color' : ''}`}
      onClick={handleNext}
    >
      {children}
    </button>
  );
};
