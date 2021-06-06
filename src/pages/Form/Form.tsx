import React, { Component } from 'react';
import { useForm, FieldError } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Form.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

const schema = yup.object().shape({
  'himpunan': yup.string().required('ngengek'),
  'jurusan': yup.string().required(),
  'namalengkap': yup.string().required(),
  'namapanggilan': yup.string().required(),
  'nim': yup.string().matches(/\d{8}/),
  'judulta': yup.string().required(),
  'funfact': yup.string().required(),
  'tips': yup.string().required(),
  'kontribusi': yup.string().required(),
  'prestasi': yup.string().required(),
  'karya': yup.string().required(),
  'email': yup.string().email().required(),
  'nonhmj': yup.string().required(),
  'kota': yup.string().required(),
  'tanggallahir': yup.date().required(),
  'angkatan': yup.number().integer().positive().required(),
});


export default function Form() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data: any) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <Row>
        <form className="form" onSubmit={handleSubmit(submitForm)}>
          <h1 className="form-title"> Database Terpusat </h1>
          <div className="form-content">
            <Row>
              <Col className="nopadding">
                <div className="d-flex justify-content-between">
                  <input placeholder="Himpunan" type="text" className="form-input" {...register('himpunan')}/>
                  <input placeholder="Jurusan" type="text" className="form-input" {...register('jurusan')}/>
                </div>
              </Col>
            </Row>
            <Row>
              <input placeholder="Nama Lengkap" type="text" className="form-input" {...register('namalengkap')}/>
            </Row>
            <Row>
              <div className="d-flex justify-content-between nopadding">
                <input placeholder="Nama Panggilan"  type="text" className="form-input" {...register('namapanggilan')}/>
                <input placeholder="NIM" type="text" className="form-input" {...register('nim')}/>

              </div>
            </Row>
            <Row>
              <input placeholder="Judul TA" type="text" className="form-input" {...register('judulta')}/>
            </Row>
            <Row>
              <input placeholder="Fun Fact" type="text" className="form-input" {...register('funfact')}/>
            </Row>
            <Row>
              <input placeholder="Tips sukses ala wisudawan" type="text" className="form-input" {...register('tips')}/>
            </Row>
            <Row>
              <textarea placeholder="Kontribusi di HMJ" className="form-textarea" {...register('kontribusi')}>
              </textarea>
            </Row>
            <Row>
              <textarea placeholder="Prestasi" className="form-textarea" {...register('prestasi')}>
              </textarea>
            </Row>
            <Row>
              <input placeholder="Karya" type="text" className="form-input" {...register('karya')}/>
            </Row>
            <Row>
              <input placeholder="Email" type="email" className="form-input" {...register('email')}/>
            </Row>
            <Row>
              <textarea placeholder="Terlibat di lembaga non-HMJ apa saja" className="form-textarea" {...register('nonhmj')}>
              </textarea>
            </Row>
            <Row>
              <input placeholder="Kota Asal" type="text" className="form-input" {...register('kota')}/>
            </Row>
            <Row>
              <input placeholder="Tanggal Lahir" type="date" className="form-input" {...register('tanggallahir')}/>
            </Row>
            <Row>
              <input type="text" className="form-input" {...register('angkatan')}/>
            </Row>
          </div>
          <div className="d-flex justify-content-end">
            <button className="form-btn" type="submit">Submit</button>
          </div>
        </form>
      </Row>
    </div>
  );
}
