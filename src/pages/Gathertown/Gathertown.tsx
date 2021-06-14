import { update } from 'lodash';
import { FC } from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import './Gathertown.scss';
import { LIST_FAKULTAS, LIST_HMJ } from './GathertownConstant';

const Gathertown: FC = () => {
  const [listGathertownHMJ, setListGathertownHMJ] = useState(LIST_HMJ);

  const buttonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const clickedFakultas = event.currentTarget.getAttribute('value');

    const updatedHMJ = LIST_HMJ.filter(
      (hmj) => hmj.namaFakultas === clickedFakultas
    );

    setListGathertownHMJ(updatedHMJ);
  };

  const listButtonFakultas = LIST_FAKULTAS.map((fakultas) => (
    <button
      onClick={buttonClickHandler}
      type='button'
      className='fakultas'
      value={fakultas}
      key={fakultas}
    >
      {fakultas}
    </button>
  ));

  const listDisplayedHMJ = listGathertownHMJ.map((hmj) => (
    <li key={hmj.namaHMJ}>
      <div>{hmj.namaHMJ}</div>
      <div>{hmj.jurusan}</div>
      <div>
        <a href={hmj.link}>{hmj.link}</a>
      </div>
    </li>
  ));

  return (
    <Fragment>
      <div className='info'>
        <h1>Gathertown</h1>
        <p>
          Ultricies leo integer malesuada nunc vel risus commodo. Mollis nunc
          sed id semper risus in hendrerit gravida rutrum. Volutpat est velit
          egestas dui. Purus semper eget duis at tellus at urna condimentum
          mattis. Iaculis eu non diam phasellus vestibulum lorem. Est sit amet
          facilisis magna etiam tempor orci. Nunc aliquet bibendum enim
          facilisis. Laoreet id donec ultrices tincidunt arcu. Diam maecenas
          ultricies mi eget mauris. Faucibus a pellentesque sit amet porttitor
          eget. Diam donec adipiscing tristique risus nec feugiat in.
          Sollicitudin aliquam ultrices sagittis orci a scelerisque purus
          semper.
        </p>
      </div>
      <div>{listButtonFakultas}</div>
      <ul className='list-hmj'>{listDisplayedHMJ}</ul>
    </Fragment>
  );
};

export default Gathertown;
