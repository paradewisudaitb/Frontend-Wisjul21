import React from 'react';
import { StageCard } from '../../component/StageCard/StageCard';
import { InfoButton } from '../../component/InfoButton/InfoButton';

import './Minigame.scss';

export const Minigame = () => {
  const info = 'Puzzle yang menggambarkan metamorfosis burung phoenix';

  const stages = [
    {
      'name':'Stage 1',
      'url':'stage-1',
      'info': 'Puzzle berisi 5x5 potongan',
    },
    {
      'name':'Stage 2',
      'url':'stage-2',
      'info': 'Puzzle berisi 6x6 potongan',
    },
    {
      'name':'Stage 3',
      'url':'stage-3',
      'info': 'Puzzle berisi 7x7 potongan',
    }
  ];
  
  return (
    <div className='minigame-page container'>
      <InfoButton info={info} />
      <h1>Puzzle Metamorphosis</h1>
      <h3>Choose your stage to play!</h3>
      <div className="stages container">
        { stages.map(({name, url, info}) => (
          <StageCard name={name} url={url} info={info}/>
        )) }
      </div>
    </div>
  );
};