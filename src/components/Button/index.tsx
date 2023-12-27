import './styles.scss';

interface Props {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children }) => {
  return <button className="button"> {children} </button>;
};
