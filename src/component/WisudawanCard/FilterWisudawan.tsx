import React, { useState } from 'react';
import WisudawanCardContainer from './WisudawanCardContainer';
import './FilterWisudawan.scss';

const FilterWisudawan = () => {
  const [wisudawan, setWisudawan] = useState();
  const [text, setText] = useState('');

  return(
    <div className='wisudawan-filter'>
      <form>
        <h1>Daftar Wisudawan</h1>
        <input
          onChange={(e) => setText(e.target.value)}
          type='text'
          placeholder={'Cari Nama atau NIM'}
        />
      </form>
      <div className='list-wisudawan'>
        <WisudawanCardContainer />
      </div>
    </div>
  );
};

export default FilterWisudawan;