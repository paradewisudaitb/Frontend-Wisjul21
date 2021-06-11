import React, { useState, useEffect } from 'react';
import './Majalah.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { Footer } from '../../component/Footer';
import { Navbar } from '../../component/Navbar';

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
    <div>
      <Navbar />
      <Jumbotron className="hero">
        <div className="container-page">
          <div className="container">
            <Row>
              <Col>
                <div className="header-jumbotron">
                  <h1 className="header-title">Lorem Ipsum <br/> Dolor <br /> Sit Amet </h1>
                  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-4" />
                  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <a className="btn btn-success btn-lg mt-3" href="https://wisjul21.sgp1.cdn.digitaloceanspaces.com/Majalah/devel.pdf" role="button">Download</a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="majalah">
                  <div className="majalah-pdf">
                    <div className="p#">
                      <img id="img-majalah" src={getImage(index)} />
                    </div>
                  </div>
                  <a className="doc-button previous round"> <button onClick={prev}>&#8249; </button></a>
                  <a className="doc-button next round"> <button onClick={next}>&#8250; </button> </a>
                </div>
              </Col>
            </Row>
            
          </div>
        </div>
      </Jumbotron>
      <Footer />
    </div>
  );
}

