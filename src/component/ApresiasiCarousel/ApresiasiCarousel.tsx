import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ApresiasiCarousel.scss';
import IKontenApresiasi from '../../interfaces/IKontenApresiasi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';


const ApresiasiCarousel = ({ data } : { data: IKontenApresiasi[] }): JSX.Element => {
  const [slide, setSlide] = useState(0);
  const [openedImageIdx, setOpenedImageIdx] = useState(0);
  const judul = data[slide].tipeKonten;

  // Modal Start
  const htmlTag = document.querySelector('html');
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
    if (htmlTag) {
      htmlTag.setAttribute('style', 'overflow-y: hidden;');
    }
  };

  const handleClose = () => {
    setShow(false);
    if (htmlTag) {
      htmlTag.setAttribute('style', 'overflow-y: scroll;');
    }
  };
  // Modal End

  const isApresiasiImage = (tipeApresiasi: string) => {
    return (tipeApresiasi == 'poster' || tipeApresiasi == 'puisi' || tipeApresiasi == 'lainnya');
  };

  const RenderComponent = (data: IKontenApresiasi) => {
    switch (data.tipeKonten) {
      case 'video':
        return <video controls src={data.linkKonten} />;
      case 'musik':
      case 'lagu':
        return <div className="audio-apresiasi"><audio controls src={data.linkKonten} /></div>;
      case 'website':
        return <a href={data.linkKonten}></a>;
      default:
        return (
          <div className='apresiasi-image-container' onClick={handleShow}>
            <small className='apresiasi-warning-label'><i className="icon fa fa-exclamation-triangle"></i> Klik gambar untuk memperbesar</small>
            <img
              src={data.linkKonten}
              id='img-01'
              className='apresiasi-image'
            />
          </div>
        );
    }
  };

  const onClickCarousel = (i: number) => {
    if (isApresiasiImage(data[i].tipeKonten)) {
      setOpenedImageIdx(i);
    }
  };

  return (
    <div className='carousel-container'>
      <h3>
        {judul.charAt(0).toUpperCase() + judul.slice(1)}
      </h3>
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        onChange={(e) => setSlide(e)}
        onClickItem={(e) => onClickCarousel(e)}
        className='carousel'
      >
        {data.map((row: IKontenApresiasi, i: number) => (
          <div
            key={i}
            className='apresiasi-item'
          >
            {RenderComponent(row)}
          </div>
        ))}
      </Carousel>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
        backdrop="static"
        keyboard={false}
        className='modal-carousel'
      >
        <Button variant="danger" className="modal-button mb-3" onClick={handleClose}>
          <i className="fa fa-times fa-lg text-white me-1"></i>Close
        </Button>
        <img className="image-modal" src={data[openedImageIdx].linkKonten} />
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>

  );
};

export default ApresiasiCarousel;