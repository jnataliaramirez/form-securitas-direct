import './styles.scss';

interface Props {
  children: React.ReactNode;
  onNext: () => void;
}

export const Button: React.FC<Props> = ({ children, onNext }) => {

  const handleNext = () => {
    onNext();
  }

  return (
    <button className="button" onClick={handleNext}>
      {children}
    </button>
  );
};
