import './styles.scss';

interface Props {
  htmlFor: string;
  value: string;
  name: string;
  children: React.ReactNode;
}

export const CheckBox: React.FC<Props> = ({
  htmlFor,
  value,
  name,
  children,
}) => {
  return (
    <label className="box" htmlFor={htmlFor}>
      {children}
      <input id={htmlFor} type="checkbox" value={value} name={name} />
    </label>
  );
};
