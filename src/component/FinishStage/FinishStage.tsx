import './FinishStage.scss';

import { Navbar } from '../NavbarFooter/Navbar';
import Sponsor from '../Sponsor/Sponsor';
import { Link, useRoute } from 'wouter';
import { useState, useEffect } from 'react';
import { FINISHSTAGE_PAGE, MINIGAME_PAGE } from '../../routes/routes';
import { Button, Modal } from 'react-bootstrap';
import stages from '../../data/minigame.json';
import NotFound from '../../pages/NotFound/NotFound';
import { ASSET_URL } from '../../api';

const FinishStage = ({folderUrl}: {folderUrl:string}) => {

  // Modal
  const htmlTag = document.querySelector('html');
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    if (htmlTag) {
      htmlTag.setAttribute('style', 'overflow-y: scroll;');
    }
  };

  // End Modal

  useEffect(() => {
    if (htmlTag) {
      htmlTag.setAttribute('style', 'overflow-y: hidden;');
    }
  }, []);


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
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
        backdrop="static"
        keyboard={false}
        className="puzzle-modal"
      >
        <h1 className="header-title"> Congratulations </h1>
        <h3 className="header-subtitle"> You have completed this stage! </h3>
        <div className="gambar-modal">
          <img
            src={`${ASSET_URL}/assets/images/vistock/main/spark%202%20atas%20matahari.png`}
            className="kembang-api1"
          />
          <img
            src={`${ASSET_URL}/assets/images/vistock/main/spark%201%20kanan%20atas-01.png`}
            className="kembang-api2"
          />
          <img
            src={`${ASSET_URL}/assets/images/vistock/main/spark%203%20kanan-01.png`}
            className="kembang-api3"
          />
        </div>
        <img className="image-modal" src={`${folderUrl}full.png`} />
        <div className="gambar-modal">
          <img
            src={`${ASSET_URL}/assets/images/vistock/main/spark%201%20kanan%20atas-01.png`}
            className="kembang-api4"
          />
          <img
            src={`${ASSET_URL}/assets/images/vistock/main/spark%203%20kanan-01.png`}
            className="kembang-api5"
          />
          <img
            src={`${ASSET_URL}/assets/images/vistock/main/spark%202%20atas%20matahari.png`}
            className="kembang-api6"
          />
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default FinishStage;
