import { StageCard } from '../../component/StageCard/StageCard';
import { InfoButton } from '../../component/InfoButton/InfoButton';
import './Minigame.scss';
import { Navbar } from '../../component/NavbarFooter/Navbar';
import STAGES from '../../data/minigame.json';
import { MINIGAME_PAGE } from '../../routes/routes';
import IStageCard from '../../interfaces/IStageCard';
import { FC } from 'react';
import { completedStageCount } from '../../store';

const Stages: FC = () => {
  const res: IStageCard[] = [];
  const lockedStagesName = completedStageCount.getLockedStages().map(e => e.name);

  for (const stage of STAGES) {
    const tmp = {
      name: stage.name,
      url: stage.url,
      info: stage.info,
      disabled: !lockedStagesName.includes(stage.name),
    };

    res.push(tmp);
  }

  return (
    <div className="stages container">
      {completedStageCount.isPersistant ?
        (res.map( ({name, url, info, disabled}) =>
          <StageCard key={name} name={name} url={MINIGAME_PAGE.path + '/' + url} info={info} disabled={disabled}/>
        )) : (
          <p>
            Tidak dapat menyimpan data untuk progress puzzle. Puzzle sudah ter-unlock semua.
          </p>
        )}
    </div>
  );
};

export const Minigame = () => {
  const info = 'Puzzle yang menggambarkan metamorfosis burung phoenix';

  return (
    <>
      <Navbar />
      <div className='minigame-page container'>
        <InfoButton info={info} />
        <h1>Puzzle Metamorphosis</h1>
        <h3>Choose your stage to play!</h3>
        <Stages />
      </div>
    </>
  );
};