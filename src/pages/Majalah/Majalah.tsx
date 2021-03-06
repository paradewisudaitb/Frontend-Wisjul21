import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Jumbotron, Button, Modal } from 'react-bootstrap';
import './Majalah.scss';
import { ASSET_URL } from '../../api';

import { Loading } from '../../component/Loading/Loading';
import { Navbar } from '../../component/NavbarFooter/Navbar';

export default function Majalah(): JSX.Element {
  const [index, setIndex] = useState(1);
  const [isMajalahLoaded, setIsMajalahLoaded] = useState<boolean[]>([]);

  const htmlTag = document.querySelector('html');
  const pageCount = 74;
  const majalahFileName = 'Buku Perjalanan Metamorfosis';
  const pathToMajalah = `${ASSET_URL}/assets/majalah`;

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

  function getImage(index: number) {
    const laman = index.toString().padStart(2, '0');
    return `${pathToMajalah}/${majalahFileName}_page-${laman}.jpg`;
  }

  function next() {
    if (index > (pageCount - 1)) {
      setIndex(1);
    } else {
      setIndex(index + 1);
    }
  }

  function prev() {
    if (index < 2) {
      setIndex(pageCount);
    } else {
      setIndex(index - 1);
    }
  }

  const semuaMajalah: JSX.Element[] = [];
  for (let i = 0; i < pageCount; i++) {
    isMajalahLoaded.push(false);
    semuaMajalah.push(
      <img
        id='img-majalah img-fluid'
        src={getImage(i + 1)}
        onClick={handleShow}
        onLoad={() => {
          const newArr = [...isMajalahLoaded];
          newArr[i] = true;
          setIsMajalahLoaded([...newArr]);
        }}
        style={isMajalahLoaded[i] ? { opacity: 1 } : { height: 0, width: 0 }}
      />
    );
  }

  return (
    <>
      <Navbar />
      <div className="outer-heaven">
        <Jumbotron className="hero">
          <div className="container-page">
            <div className="container">
              <Row>
                <Col xs={12} md={12} lg={6}>
                  <div className="header-jumbotron">
                    <h1 className="header-title"> Buku Perjalanan <br/> Metamorfosis </h1>
                    <div className="majalah-description">
                      <p>Buku Perjalanan Metamorfosis berisi senarai kisah perjuangan insan Ganesha dalam karsa nya melalui perubahan.</p>
                      <p>Menceritakan renjana dan tapak pertama di Jalan Ganesha serta rasa berbunga-bunga bagai <em>Petrea volubilis</em> Gerbang Selatan yang merekah. Pun tentang euforia GKUB yang nyatanya tak amerta dan lika liku perjuangan yang telah menunggu di ujung jalan panjang. Tentang berbagai rasa yang terkenang, seperti kisah di Sunken Court pada satu sandyakala. Tentang cahaya di ujung lorong; untuk rebah sebelum kembali bertualang. Hingga akhirnya berdiri di depan Sabuga, bukan untuk selesai selamanya; ini perayaan manis atas perjuangan di Ganesha.</p>
                      <p>Selamat membaca Buku Perjalanan Metamorfosis, sederet kisah penuh penghargaan terhadap setiap tahap perubahan para insan bestari dan memori-memori yang melengkapi cerita mereka menuju arunika.</p>
                      <p>Temukan lebih banyak kisah wisudawan lainnya di <a href="https://bit.ly/397Kisah" target="_blank">bit.ly/397Kisah</a>!</p>
                    </div>
                    <hr className="my-4" />
                    <p className="header-sutitle">"The way to get started is to quit talking and begin doing" - Walt Disney</p>
                    <a className="btn btn-success btn mt-3 dwn-btn" href={`${pathToMajalah}/${majalahFileName}.pdf`} role="button">Download</a>
                  </div>
                </Col>
                <Col xs={12} md={12} lg={6}>
                  <div className="majalah-pdf">
                    {semuaMajalah.map((e, i) =>
                      <div key={i} style={{ display: index == (i + 1) ? 'block' : 'none', }} className="majalah">
                        {!isMajalahLoaded[i] && <Loading />}
                        {e}
                      </div>
                    )}
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="doc-button previous" onClick={prev}> <i className="fa fa-chevron-left fa-lg text-white"></i> </button>
                    <div className="index-majalah"> {index} / {pageCount} </div>
                    <button className="doc-button next" onClick={next}> <i className="fa fa-chevron-right fa-lg text-white"></i> </button>
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
                <i className="fa fa-times fa-lg text-white me-1"></i>Close
              </Button>
              <img className="image-modal" src={getImage(index)} />
              <Modal.Footer>
                <Button variant="primary" onClick={prev}>
                  <i className="fa fa-chevron-left text-white"></i>
                </Button>
                <Button variant="secondary" disabled onClick={handleClose}>
                  {index} / {pageCount}
                </Button>
                <Button variant="primary" onClick={next}>
                  <i className="fa fa-chevron-right text-white"></i>
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Jumbotron>
      </div>
    </>
  );
}
