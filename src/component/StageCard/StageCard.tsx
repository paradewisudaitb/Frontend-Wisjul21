import { Link } from 'wouter';
import { InfoButton } from '../InfoButton/InfoButton';
import IStageCard from '../../interfaces/IStageCard';

import './StageCard.scss';

export const StageCard = ({name, url, info, disabled}: IStageCard) => {
  return (
    <div className={disabled ? 'stagecard-disabled' : 'stagecard'} >
      <Link href={disabled ? '' : url} className='stagecard-content'>
        <InfoButton info={info + (disabled ? ' STAGE INI BELUM TERBUKA.' : '')} />
        <h4>{name}</h4>
      </Link>
    </div>
  );
};