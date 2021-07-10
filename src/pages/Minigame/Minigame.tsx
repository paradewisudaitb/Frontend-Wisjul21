import React from 'react';
import { StageCard } from '../../component/StageCard/StageCard';
import { InfoButton } from '../../component/InfoButton/InfoButton';

import './Minigame.scss';
import { Navbar } from '../../component/NavbarFooter/Navbar';

import  stages  from '../../data/minigame.json';
import { MINIGAME_PAGE } from '../../routes/routes';
import Sponsor from '../../component/Sponsor/Sponsor';

export const Minigame = () => {
  const info = 'Puzzle yang menggambarkan metamorfosis burung phoenix';

  
  return (
    <>
      <Navbar />
      <div className='minigame-page container'>
        <InfoButton info={info} />
        <h1>Puzzle Metamorphosis</h1>
        <h3>Choose your stage to play!</h3>
        <div className="stages container">
          { stages.map(({name, url, info}) => (
            <StageCard name={name} url={MINIGAME_PAGE.path + '/' + url} info={info}/>
          )) }
        </div>
      </div>
      <Sponsor />
    </>
  );
};