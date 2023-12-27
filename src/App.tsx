import { useState } from 'react';
import { Header } from './sections/Header';
import { StepEnd } from './sections/StepEnd';
import { StepOne } from './sections/StepOne';
import { StepTwo } from './sections/StepTwo';

interface FormData {
  questionOne: string;
  questionTwo: string[];
}

function App() {
  // Estado del componente
  const [formData, setFormData] = useState<FormData>({
    questionOne: '',
    questionTwo: [],
  });

  // Manejador de cambios para preguntas de opción única
  const handleRadioChange = (question: keyof FormData, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [question]: value,
    }));
  };

  // Manejador de cambios para preguntas de opción múltiple
  const handleCheckboxChange = (question: keyof FormData, value: string) => {
    const updatedOptions = [...formData[question]];

    if (updatedOptions.includes(value)) {
      // Si ya está seleccionado, lo quitamos
      updatedOptions.splice(updatedOptions.indexOf(value), 1);
    } else {
      // Si no está seleccionado, lo agregamos
      updatedOptions.push(value);
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [question]: updatedOptions,
    }));
  };

  // Evento de envío del formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Enviando respuestas al servidor...', formData);
  };

  return (
    <div className="wrapper">
      <Header />
      <form action="" method="">
        <StepOne />
        <StepTwo />
        <StepEnd />
      </form>
    </div>
  );
}

export default App;
