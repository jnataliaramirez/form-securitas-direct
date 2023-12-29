import './styles.scss';
import bulb from '../../assets/bulb.svg';
import bulbOn from '../../assets/bulb-on.svg';

interface Props {
  animationActive: boolean;
}

export const Information: React.FC<Props> = ({ animationActive }) => {

  return (
    <>
      <div className="information__wrapper">
        <article
          className={`information ${animationActive && 'animation-active'}`}
        >
          <div className="information__images">
            <img
              src={bulb}
              alt="Bombilla apagada"
              className={`information__images--bulb-off ${
                animationActive && 'bold-off-active'
              }`}
            />
            <img
              src={bulbOn}
              alt="Bombilla encendida"
              className={`information__images--bulb-on ${
                animationActive && 'bold-on-active'
              }`}
            />
          </div>
          <p
            className={`information__text ${animationActive && 'text-active'}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            cursus diam in sagittis rutrum.
          </p>
        </article>
      </div>
    </>
  );
};
