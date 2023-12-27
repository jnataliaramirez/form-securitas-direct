import React from 'react';
import './styles.scss';

interface Props {
  htmlFor: string;
  value: string;
  name: string;
  children: React.ReactNode;
}

export const RadioBox: React.FC<Props> = ({
  htmlFor,
  value,
  name,
  children,
}) => {
  return (
    <label className="box" htmlFor={htmlFor}>
      {children}
      <input id={htmlFor} type="radio" value={value} name={name} />
    </label>
  );
};
