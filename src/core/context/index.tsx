import React, { ReactNode, createContext, useState } from 'react';

interface FormState {
  questionOne: string;
  questionTwo: string[];
  phone: string;
}

export interface FormContextProps {
  formState: FormState;
  updateField: (field: string, value: string | string[]) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(undefined);

export interface FormProviderProps {
  children: ReactNode;
}

export const FormContextProvider: React.FC<FormProviderProps> = ({
  children,
}) => {
  const [formState, setFormState] = useState<FormState>({
    questionOne: '',
    questionTwo: [],
    phone: '',
  });

  const updateField = (field: string, value: string | string[]) => {
    setFormState({ ...formState, [field]: value });
  };
  return (
    <FormContext.Provider value={{ formState, updateField }}>
      {children}
    </FormContext.Provider>
  );
};
