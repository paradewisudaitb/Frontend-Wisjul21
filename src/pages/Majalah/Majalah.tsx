import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Jumbotron, Button, Modal } from 'react-bootstrap';
import { Footer } from '../../component/Footer';
import { Navbar } from '../../component/Navbar';
import './Majalah.scss';

export default function Majalah() {
  const [index, setIndex] = useState(1);

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function getImage(index: number)
  {
    return 'https://wisjul21.sgp1.cdn.digitaloceanspaces.com/Majalah/devel_page-000'+index+'.jpg';
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
      <img src="https://wisjul21.sgp1.cdn.digitaloceanspaces.com/assets/images/vistock/main/awan%204-01.png" className="awan-kiri" />
      <Navbar />
      <Jumbotron className="hero">
        <div className="container-page">
          <div className="container">
            
            <Row>
              <Col xs={12} md={12}>
                <div className="header-jumbotron">
                  <h1 className="header-title"> Majalah <br/> Metamorfosis </h1>
                  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-4" />
                  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <a className="btn btn-success btn-lg mt-3 dwn-btn" href="https://wisjul21.sgp1.cdn.digitaloceanspaces.com/Majalah/devel.pdf" role="button">Download</a>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={12}>
                <div className="majalah">
                  <img src="https://wisjul21.sgp1.cdn.digitaloceanspaces.com/assets/images/vistock/main/spark%202%20atas%20matahari.png" className="kembang-api" />
                  <div className="majalah-pdf" >
                    <img id="img-majalah img-fluid" src={getImage(index)} onClick={handleShow} />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="doc-button previous" onClick={prev}> &#8249; </button>
                    <div className="index-majalah"> {index} / 6 </div>
                    <button className="doc-button next" onClick={next}> &#8250; </button>
                  </div>
                </div>
                <img src="https://wisjul21.sgp1.cdn.digitaloceanspaces.com/assets/images/vistock/main/awan%205-01.png" className="awan-kanan" />
              </Col>
            </Row>
          </div>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Button variant="danger" onClick={handleClose}>
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
          <Col>
            <Footer />
          </Col>
        </div>
      </Jumbotron>
    </div>
  );
}
