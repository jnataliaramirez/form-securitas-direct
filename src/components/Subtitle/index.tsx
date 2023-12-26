import './styles.scss';

interface Props {
  children: React.ReactNode;
}

export const Subtitle: React.FC<Props> = ({ children }) => (
  <h2 className="subtitle">{children}</h2>
);
