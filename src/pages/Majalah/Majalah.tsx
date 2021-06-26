import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Jumbotron, Button, Modal } from 'react-bootstrap';
import './Majalah.scss';
import { ASSET_URL } from '../../api';

export default function Majalah() {
  const [index, setIndex] = useState(1);
  const htmlTag = document.querySelector('html');

  // Modal
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

  function getImage(index: number)
  {
    return `${ASSET_URL}/Majalah/devel_page-000`+index+'.jpg';
  }

  function next() {
    if (index > 5) {
      setIndex(1);
    } else {
      setIndex(index+1);
    }
  }

  function prev() {
    if (index < 2) {
      setIndex(6);
    } else {
      setIndex(index-1);
    }
  }

  return (
    <div className="outer-heaven">
      <img src={`${ASSET_URL}/assets/images/vistock/main/awan%204-01.png`} className="awan-kiri" />
      <Jumbotron className="hero">
        <div className="container-page">
          <div className="container">
            <Row>
              <Col xs={12} md={12} lg={6}>
                <div className="header-jumbotron">
                  <h1 className="header-title"> Majalah <br/> Metamorfosis </h1>
                  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-4" />
                  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <a className="btn btn-success btn-lg mt-3 dwn-btn" href={`${ASSET_URL}/Majalah/devel.pdf`} role="button">Download</a>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={12} lg={6}>
                <div className="majalah">
                  <img src={`${ASSET_URL}/assets/images/vistock/main/spark%202%20atas%20matahari.png`} className="kembang-api" />
                  <div className="majalah-pdf" >
                    <img id="img-majalah img-fluid" src={getImage(index)} onClick={handleShow} />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="doc-button previous" onClick={prev}> &#8249; </button>
                    <div className="index-majalah"> {index} / 6 </div>
                    <button className="doc-button next" onClick={next}> &#8250; </button>
                  </div>
                </div>
                <img src={`${ASSET_URL}/assets/images/vistock/main/awan%205-01.png`} className="awan-kanan" />
              </Col>
            </Row>
          </div>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-custom-modal-styling-title"
            backdrop="static"
            keyboard={false}
          >
            <Button variant="danger" className="modal-button mb-3" onClick={handleClose}>
              Close
            </Button>
            <img className="image-modal" src={getImage(index)} />
            <Modal.Footer>
              <Button variant="primary" onClick={prev}>
                Prev
              </Button>
              <Button variant="secondary" disabled onClick={handleClose}>
                {index} / 6
              </Button>
              <Button variant="primary" onClick={next}>
                Next
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Jumbotron>
    </div>
  );
}
