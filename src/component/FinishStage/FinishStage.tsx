import './FinishStage.scss';

import { Navbar } from '../NavbarFooter/Navbar';
import Sponsor from '../Sponsor/Sponsor';
import { Link, useRoute } from 'wouter';

import { FINISHSTAGE_PAGE, MINIGAME_PAGE } from '../../routes/routes';
import stages from '../../data/minigame.json';
import NotFound from '../../pages/NotFound/NotFound';


const FinishStage = ({folderUrl}: {folderUrl:string}) => {


  return (
    <>
      <div className='page-container'>
        <div className='congrats'>
          <h2>Congratulations!</h2>
        </div>
        <div className='stage1'>
          <img
            className='stage1-image'
            src={`${folderUrl}full.png`}
            alt='Gambar stage 1'
          />
        </div>
        <div className='take-picture'>
          <div className="download-image">
            <h2 className="mb-3">Download Image</h2>
            <a
              href={`${folderUrl}full-ori.png`}
              target='_blank'
              className='camera-circle'
            >
              <i className="fa fa-download"></i> 
            </a>
          </div>
          <Link to={MINIGAME_PAGE.path} className="tombol-keluar">
            <i className="fa fa-door-closed"></i><i className="fa fa-door-open"></i> Continue
          </Link>
        </div>
      </div>
    </>
  );
};

export default FinishStage;
