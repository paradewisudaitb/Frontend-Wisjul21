import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
import './Majalah.scss';

export default function Majalah() {
  const [index, setIndex] = useState(1);

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
    // alert(index);
    if (index < 2) {
      setIndex(6);
    } else {
      setIndex(index-1);
    }
  }

  
  return (
    <div className="majalah-page pb-5">
      <div className="hero">
        <div className="majalah-background" />
        <div className="container-page">
          <div className="container majalah-content">
            <Row>
              <Col xs={12} md={6}>
                <div className="header-jumbotron text-left">
                  <h1 className="header-title">Lorem Ipsum <br/> Dolor <br /> Sit Amet </h1>
                  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-4" />
                  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <a className="btn btn-success btn-lg mt-3" href="https://wisjul21.sgp1.cdn.digitaloceanspaces.com/Majalah/devel.pdf" role="button">Download</a>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="majalah">
                  <div className="majalah-pdf">
                    <img id="img-majalah img-fluid" src={getImage(index)} />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="doc-button previous" onClick={prev}> &#8249; </button>
                    <div className="index-majalah"> {index} / 6 </div>
                    <button className="doc-button next" onClick={next}> &#8250; </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

