import React from 'react';
import { Link } from 'wouter';

import { InfoButton } from '../InfoButton/InfoButton';

import './StageCard.scss';

interface IStageCard {
  name: string,
  url: string,
  info: string,
}

export const StageCard = ({name, url, info}: IStageCard) => {
  return (
    <div className="stagecard" >
      <Link href={url} className='stagecard-content'>
        <InfoButton info={info} />
        <h4>{name}</h4>
      </Link>
    </div>
  );
};