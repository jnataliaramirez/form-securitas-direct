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
          <div className='information__images'>
            <img src={bulb} alt="Bombilla apagada" className="information__images--bulb-off" />
            <img src={bulbOn} alt="Bombilla encendida" className="information__images--bulb-on" />
          </div>
          <p className={`information__text ${animationActive && 'text-active'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            cursus diam in sagittis rutrum.
          </p>
        </article>
      </div>
    </>
  );
};
