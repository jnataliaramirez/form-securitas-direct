import React, { ReactNode, useState } from 'react';

interface Context {
  questionOne: string;
  setQuestionOne: (value: string) => void;
  questionTwo: string[];
  setQuestionTwo: (value: string[]) => void;
  phone: string;
  setPhone: (value: string) => void;
}

export const FormContext = React.createContext<Context>({
  questionOne: '',
  setQuestionOne: () => {},
  questionTwo: [],
  setQuestionTwo: () => {},
  phone: '',
  setPhone: () => {},
});

export interface FormContextProvider {
  children: ReactNode;
}

export const FormContextProvider: React.FC<FormContextProvider> = ({
  children,
}) => {
  const [questionOne, setQuestionOne] = useState<string>('');

  const [questionTwo, setQuestionTwo] = useState<string[]>([]);

  const [phone, setPhone] = useState<string>('');

  return (
    <FormContext.Provider
      value={{
        questionOne,
        setQuestionOne,
        questionTwo,
        setQuestionTwo,
        phone,
        setPhone,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
