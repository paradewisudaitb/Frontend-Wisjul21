import { FC } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import ButtonFakultas from './ButtonFakultas';
import './Gathertown.scss';
import dummyImage from '../../images/ukj.png';
import { LIST_FAKULTAS, LIST_HMJ } from './GathertownConstant';

type HMJ = {
  namaFakultas: string;
  namaHMJ: string;
  jurusan: string;
  link: string;
};

const Gathertown: FC = () => {
  const [activeButton, setActiveButton] = useState('FITB');
  const [listGathertownHMJ, setListGathertownHMJ] = useState(LIST_HMJ);
  const [listButtonState, setListButtonState] = useState<JSX.Element[]>();

  const buttonFakultasClickHandler = (listHMJ: HMJ[], namaFakultas: string) => {
    setListGathertownHMJ(listHMJ);
    setActiveButton(namaFakultas);

    console.log(activeButton);

    const clickedFakultasIndex = LIST_FAKULTAS.findIndex(
      (fakultas) => fakultas === activeButton
    );

    console.log(clickedFakultasIndex);

    // const updatedListButtonFakultas = [...defaultListButtonFakultas];
    // updatedListButtonFakultas[clickedFakultasIndex] = (
    //   <ButtonFakultas
    //     onButtonClick={buttonFakultasClickHandler}
    //     className='active'
    //     value={activeButton}
    //     key={activeButton}
    //   >
    //     {activeButton}
    //   </ButtonFakultas>
    // );

    // listButtonFakultas[clickedFakultasIndex] = (
    //   <ButtonFakultas
    //     onButtonClick={buttonFakultasClickHandler}
    //     className='active'
    //     value={activeButton}
    //     key={activeButton}
    //   >
    //     {activeButton}
    //   </ButtonFakultas>
    // );

    // setListButtonState(updatedListButtonFakultas);
  };

  const defaultListButtonFakultas = LIST_FAKULTAS.map((fakultas) => (
    <ButtonFakultas
      onButtonClick={buttonFakultasClickHandler}
      className=''
      value={fakultas}
      key={fakultas}
    >
      <h5>{fakultas}</h5>
    </ButtonFakultas>
  ));

  const listDisplayedHMJ = listGathertownHMJ.map((hmj) => (
    <li key={hmj.namaHMJ}>
      <div className='card-hmj'>
        <div className='image-hmj'>
          <img
            alt={'logo ' + hmj.namaHMJ}
            src={dummyImage}
            width='185'
            height='185'
          />
        </div>
        <div className='info-hmj'>
          <h2>{hmj.namaHMJ}</h2>
          <div className='link-hmj'>
            <a href={hmj.link} target='_blank'>
              {hmj.link}
            </a>
          </div>
        </div>
      </div>
    </li>
  ));

  useEffect(() => {
    setListButtonState(defaultListButtonFakultas);
  }, []);

  // useEffect(() => {
  //   console.log('useEffect');
  //   const clickedFakultasIndex = listButtonFakultas.findIndex(
  //     (button) => button.key === activeButton
  //   );

  //   listButtonFakultas[clickedFakultasIndex] = (
  //     <ButtonFakultas
  //       onButtonClick={buttonFakultasClickHandler}
  //       className='active'
  //       value={activeButton}
  //       key={activeButton}
  //     >
  //       {activeButton}
  //     </ButtonFakultas>
  //   );

  //   setListButtonState(listButtonFakultas);
  // }, [activeButton]);

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
      <div className='list-button'>{listButtonState}</div>
      <ul className='list-hmj'>{listDisplayedHMJ}</ul>
      <br />
    </Fragment>
  );
};

export default Gathertown;
