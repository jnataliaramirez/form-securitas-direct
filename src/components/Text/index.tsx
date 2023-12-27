import './styles.scss';

interface Props {
  children: React.ReactNode;
}

export const Text: React.FC<Props> = ({ children }) => (
  <p className="text">{children}</p>
);
