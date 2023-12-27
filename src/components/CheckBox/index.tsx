import './styles.scss';

interface Props {
  htmlFor: string;
  value: string;
  name: string;
  onInputChange: (field: string, value: string, checked: boolean) => void;
  children: React.ReactNode;
}

export const CheckBox: React.FC<Props> = ({
  htmlFor,
  value,
  name,
  children,
  onInputChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    onInputChange(name, value, checked);
  };

  return (
    <label className="box" htmlFor={htmlFor}>
      {children}
      <input
        id={htmlFor}
        type="checkbox"
        value={value}
        name={name}
        onChange={handleInputChange}
      />
    </label>
  );
};
