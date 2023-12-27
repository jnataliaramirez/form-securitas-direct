import './styles.scss';

interface Props {
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children }) => {
  return <button disabled className="button"> {children} </button>;
};
