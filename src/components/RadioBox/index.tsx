import React from 'react';
import './styles.scss';

interface Props {
  htmlFor: string;
  value: string;
  name: string;
  onInputChange: (field: string, value: string) => void;
  children: React.ReactNode;
}

export const RadioBox: React.FC<Props> = ({
  htmlFor,
  value,
  name,
  children,
  onInputChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <label className="box" htmlFor={htmlFor}>
      {children}
      <input
        id={htmlFor}
        type="radio"
        value={value}
        name={name}
        onChange={handleInputChange}
      />
    </label>
  );
};
