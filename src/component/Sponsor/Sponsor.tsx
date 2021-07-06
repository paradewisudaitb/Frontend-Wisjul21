import React from 'react';

import './Sponsor.scss';
import { SponsorComponent } from './SponsorComponent';
import { ASSET_URL } from '../../api';

const SPONSORSHIP_URL = `${ASSET_URL}/assets/sponsorship`;
const SPONSOR_URL = `${SPONSORSHIP_URL}/sponsor`;
const MEDPAR_URL = `${SPONSORSHIP_URL}/medpar`;

const medpars = [
  `${MEDPAR_URL}/09_S_Event Bandung.png`,
  `${MEDPAR_URL}/10_S_Bandung Creative Media.jpg`,
  `${MEDPAR_URL}/11_S_BDG Today.png`,
  `${MEDPAR_URL}/12_S_Young On Top Bandung.png`,
  `${MEDPAR_URL}/13_S_Boulevard ITB.jpeg`,
  `${MEDPAR_URL}/14_S_ITB Receh.png`,
  `${MEDPAR_URL}/15_S_Acara Hits.PNG`,
  `${MEDPAR_URL}/16_S_Bdg.info.jpeg`,
  `${MEDPAR_URL}/17_S_Info Event Mahasiswa Indonesia.png`,
  `${MEDPAR_URL}/18_S_Teman Acara.png`,
  `${MEDPAR_URL}/19_S_ardan radio.jpeg`,
  `${MEDPAR_URL}/20_S_eventcampus.png`,
  `${MEDPAR_URL}/21_S_Pers Mahasiswa ITB.jpeg`,
  `${MEDPAR_URL}/22_S_Polban News.png`,
  `${MEDPAR_URL}/23_S_Acara Bandung.PNG`,
  `${MEDPAR_URL}/24_S_Info Bandung.png`,
  `${MEDPAR_URL}/25_S_info.lomba.jpg`,
  `${MEDPAR_URL}/26_S_Jals Media.png`,
  `${MEDPAR_URL}/27_S_Mediarga Event Logo.png`,
  `${MEDPAR_URL}/28_S_Pasundan Radio.png`,
  `${MEDPAR_URL}/29_S_Motau Event.jpg`,
  `${MEDPAR_URL}/30_S_ruang event.png`,
  `${MEDPAR_URL}/31_S_Event Apaja.png`,
  `${MEDPAR_URL}/32_S_infoselanjutnya.png`,
  `${MEDPAR_URL}/33_share event.png`,
  `${MEDPAR_URL}/34_S_Pray Event.JPG`,
  `${MEDPAR_URL}/35_S_Lomba Update.png`,
  `${MEDPAR_URL}/36_S_campuspedia.png`,
  `${MEDPAR_URL}/37_S_media event.png`,
];

const sponsors = [
  `${SPONSOR_URL}/XL_Chocolatos.png`,
  `${SPONSOR_URL}/XL_Paragon.png`,
  `${SPONSOR_URL}/L_Semen Gresik.png`,
  `${SPONSOR_URL}/M_Pahamify.jpeg`,
  `${SPONSOR_URL}/M_PDAM Tirta Perwitasari .JPG`,
  `${SPONSOR_URL}/S_Cakap.png`
];

const Sponsor = () => {
  return (
    <div className="sponsor pt-2">
      {sponsors && <SponsorComponent nama='Our Sponsors' items={sponsors} />}
      {medpars && <SponsorComponent nama='Our Media Partners' items={medpars} />}
    </div>
  );
};

export default Sponsor;