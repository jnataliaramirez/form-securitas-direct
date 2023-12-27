import './styles.scss';
import bulb from '../../assets/bulb.svg';
import bulbOn from '../../assets/bulb-on.svg';

export const Information = () => {
  return (
    <>
      <div className="information">
        <article>
          <img src={bulb} alt="Bombilla apagada" />
        </article>
      </div>

      <article className="information-open-off">
        <img src={bulb} alt="Bombilla encendida" />
      </article>

      <article className="information-open-on">
        <img src={bulbOn} alt="Bombilla encendida" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus
          diam in sagittis rutrum.
        </p>
      </article>
      
      <article className="information-on">
        <img src={bulbOn} alt="Bombilla encendida" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus
          diam in sagittis rutrum.
        </p>
      </article>
    </>
  );
};
