import './styles.scss';
import bulb from '../../assets/bulb.svg';
import bulbOn from '../../assets/bulb-on.svg';
import { useState } from 'react';

export const Information = () => {
  const [animationActive, setAnimationActive] = useState(true);

  return (
    <>
      <div className="information__wrapper">
        <article
          className={`information ${animationActive && 'animation-active'}`}
        >
          <div>
            <img src={bulb} alt="Bombilla apagada" className="bulb-off" />
            <img src={bulbOn} alt="Bombilla encendida" className="bulb-on" />
          </div>
          <p className={`texto ${animationActive && 'texto-active'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            cursus diam in sagittis rutrum.
          </p>
        </article>
      </div>
    </>
  );
};
