import './styles.scss';

interface Props {
  children: React.ReactNode;
}

export const Subtitle: React.FC<Props> = ({ children }) => (
  <legend className="subtitle">{children}</legend>
);
