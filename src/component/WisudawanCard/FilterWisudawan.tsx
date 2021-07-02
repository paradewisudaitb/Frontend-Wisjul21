import React, { useState, useEffect } from 'react';
import WisudawanCardContainer from './WisudawanCardContainer';
import { DataWisudawan } from './Interface';
import './FilterWisudawan.scss';

const FilterWisudawan = ({ data } : { data: DataWisudawan[] }): JSX.Element => {
  const [wisudawan, setWisudawan] = useState(data);
  const [text, setText] = useState('');

  useEffect(() => {
    setWisudawan(
      data.filter(
        (wisudawan: DataWisudawan) =>
          wisudawan.nama.toLowerCase().includes(text.toLowerCase()) ||
          ('' + wisudawan.nim).includes(text.toLowerCase())
      )
    );
  }, [text]);

  return(
    <div className='wisudawan-filter'>
      <form>
        <h2>Daftar Wisudawan</h2>
        <input
          onChange={(e) => setText(e.target.value)}
          type='text'
          placeholder={'Cari Nama atau NIM'}
        />
      </form>
      <div className='list-wisudawan'>
        <WisudawanCardContainer data={wisudawan}/>
      </div>
    </div>
  );
};

export default FilterWisudawan;