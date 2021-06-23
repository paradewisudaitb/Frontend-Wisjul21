import React, { useState } from 'react';
import WisudawanCardContainer from './WisudawanCardContainer';
import Bulu from '../../images/bg/bulu_atas_matahari_01.png';
import './FilterWisudawan.scss';

const FilterWisudawan = () => {
  const [wisudawan, setWisudawan] = useState();
  const [text, setText] = useState('');

  return(
    <div className='wisudawan-filter'>
      <form>
        <h2>Daftar Wisudawan</h2>
        <input
          onChange={(e) => setText(e.target.value)}
          type='text'
          placeholder={'Cari Nama atau NIM'}
        />
        {/* <img src={Bulu} alt='' className='bulu-bg' /> */}
      </form>
      <div className='list-wisudawan'>
        <WisudawanCardContainer />
      </div>
    </div>
  );
};

export default FilterWisudawan;