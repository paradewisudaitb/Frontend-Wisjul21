import { StageCard } from '../../component/StageCard/StageCard';
import './Minigame.scss';
import { Navbar } from '../../component/NavbarFooter/Navbar';
import STAGES from '../../data/minigame.json';
import { MINIGAME_PAGE } from '../../routes/routes';
import IStageCard from '../../interfaces/IStageCard';
import { FC } from 'react';
import Sponsor from '../../component/Sponsor/Sponsor';
import { useSelector } from 'react-redux';
import { stageStateSelector } from '../../config/Redux/Stage/selector';
import { ASSET_URL } from '../../api';

const Stages: FC = () => {
  const res: IStageCard[] = [];
  const stageState = useSelector(stageStateSelector);

  for (const stage of STAGES) {
    const tmp = {
      name: stage.name,
      url: stage.url,
      info: stage.info,
      disabled: false,
    };
    
    if (stage.prereq) {
      tmp.disabled = !stageState[stage.prereq];
    }

    res.push(tmp);
  }

  return (
    <div className="stages container">
      {res.map(({name, url, info, disabled}) =>
        <StageCard key={name} name={name} url={MINIGAME_PAGE.path + '/' + url} info={info} disabled={disabled} />)}
    </div>
  );
};

export const Minigame = () => {
  const info = 'Puzzle yang menggambarkan metamorfosis seekor burung phoenix. Metamorfosis dari lahir kemudian tumbuh dan berkembang sampai akhirnya siap untuk terbang menjelajahi dunia.';

  return (
    <>
      <Navbar />
      <div className='minigame-page container'>
        {/* <InfoButton info={info} /> */}
        <h1>Puzzle Metamorfosis</h1>
        <div className="minigame-description">
          <img className='bulu1' src={`${ASSET_URL}/assets/images/vistock/main/bulu.png`} alt="" />
          <img className='bulu2' src={`${ASSET_URL}/assets/images/vistock/main/bulu.png`} alt="" />
          <p>{info}</p>
          <p>Setiap stage berisi puzzle dengan banyak potongan yang meningkat tiap stage-nya. <br />Stage 1 berisi 4x4 potongan. Stage 2 berisi 5x5 potongan. Stage 3 berisi 7x7 potongan.</p>
        </div>
        <h3>Choose your stage to play!</h3>
        <Stages />
      </div>
      <Sponsor />
    </>
  );
};
