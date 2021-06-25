import React, { useEffect, useState } from 'react';

type props ={
  register: any,
  watch: any,
  nama: string,
};

const ApresiasiSelection = ({ register, watch, nama }: props) => {

  const watchTipeApresiasi = watch(nama);

  const [nerimaFile, setNerimaFile] = useState(true);
  const [batal, setBatal] = useState(false);

  useEffect(() => {
    switch (watchTipeApresiasi) {
      case 'Tipe File':
      case 'Batal':
        setBatal(true);
        setNerimaFile(false);
        break;
      case 'Website':
        setBatal(false);
        setNerimaFile(false);
        break;
      default:
        setBatal(false);
        setNerimaFile(true);
    }
    console.log(batal);
  }, [watchTipeApresiasi]);

  return (
    <div className="row my-2">
      <div className="col-12 col-md-6 mt-2">
        <select className="form-apresiasi-select" required {...register(nama)}>
          <option value="Tipe File" disabled selected> Tipe File </option>
          <option value="Poster"> Poster </option>
          <option value="Video"> Video </option>
          <option value="Puisi"> Puisi </option>
          <option value="Website"> Website </option>
          <option value="Lagu"> Lagu </option>
          <option value="Lainnya"> Lainnya </option>
          <option value="Batal"> Batal </option>
        </select>
      </div>
      <div className="col-12 col-md-6">
        {!batal && nerimaFile && <input placeholder="File apresiasi" type="file" className="form-apresiasi-input" required {...register(`${nama}File`)}/>}
        {!batal && !nerimaFile && <input placeholder="Link ke website" type="text" className="form-apresiasi-input weblink-input" required {...register(`${nama}Link`)}/>}
      </div>
    </div>
  );
};

export default ApresiasiSelection;