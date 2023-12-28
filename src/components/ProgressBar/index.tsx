import './styles.scss';

interface Props {
  calculateProgress: () => number;
}

export const ProgressBar: React.FC<Props> = ({ calculateProgress }) => {
  return (
    <div className='progress-bar__wrapper'>
      <section className="progress-bar">
        <p> Progreso </p>
        <progress value={calculateProgress()} max="100" />
      </section>
    </div>
  );
};
