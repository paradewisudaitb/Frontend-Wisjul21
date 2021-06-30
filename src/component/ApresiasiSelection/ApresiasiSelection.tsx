import React, { useEffect, useState } from 'react';

type props ={
  register: any,
  watch: any,
  nama: string,
};

const ApresiasiSelection = ({ register, watch, nama }: props) => {

  const watchTipeApresiasi = watch(nama);

  const [nerimaFile, setNerimaFile] = useState(true);
  const [batal, setBatal] = useState(true);

  useEffect(() => {
    switch (watchTipeApresiasi) {
      case 'tipe file':
      case 'batal':
        setBatal(true);
        setNerimaFile(false);
        break;
      case 'website':
        setBatal(false);
        setNerimaFile(false);
        break;
      default:
        setBatal(false);
        setNerimaFile(true);
    }
  }, [watchTipeApresiasi]);

  return (
    <div className="row my-4">
      <div className="col-12 col-md-6">
        <select className="form-apresiasi-select" required {...register(nama)}>
          <option className="form-apresiasi-select-option" value="tipe file" disabled defaultValue='true'> Tipe File </option>
          <option className="form-apresiasi-select-option" value="poster"> Poster </option>
          {/* <option className="form-apresiasi-select-option" value="video"> Video </option> */}
          <option className="form-apresiasi-select-option" value="puisi"> Puisi </option>
          <option className="form-apresiasi-select-option" value="website"> Website </option>
          <option className="form-apresiasi-select-option" value="musik"> Musik </option>
          <option className="form-apresiasi-select-option" value="lainnya"> Lainnya </option>
          <option className="form-apresiasi-select-option" value="batal"> Batal </option>
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