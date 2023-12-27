import React, { ReactNode, useState } from 'react';

interface Context {
  questionOne: string;
  questionTwo: string[];
  phone: string;
}

export const MyContext = React.createContext<Context>({
  questionOne: '',
  questionTwo: [],
  phone: '',
});

export interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [questionOne, setQuestionOne] = useState<string>('');

  const [questionTwo, setQuestionTwo] = useState<string[]>([]);

  const [phone, setPhone] = useState<string>('');

  return (
    <MyContext.Provider
      value={{
        questionOne: questionOne,
        questionTwo: questionTwo,
        phone: phone,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
