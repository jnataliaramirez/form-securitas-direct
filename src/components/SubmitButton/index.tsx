import './styles.scss';

export const SubmitButton = () => {
  // Evento de envío del formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Enviando respuestas al servidor...', );
  };

  return (
    <button
      onClick={() => handleSubmit}
      type="submit"
      className="submit-button"
    >
      Finalizar
    </button>
  );
};
