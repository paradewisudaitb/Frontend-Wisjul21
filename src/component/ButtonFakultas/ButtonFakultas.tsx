import { FC } from 'react';
import './ButtonFakultas.scss';
import LIST_HMJ from '../../data/hmj.json';
import IHMJ from '../../interfaces/IHMJ';

const ButtonFakultas: FC<{
  value: string;
  onButtonClick: (listHMJ: IHMJ[], namaFakultas: string) => void;
  className: string;
}> = (props) => {
  const classNameList = props.className + ' button';

  const buttonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const clickedFakultas: string =
      event.currentTarget.getAttribute('value') || 'default';

    const updatedHMJ = LIST_HMJ.filter(hmj => hmj.fakultas == clickedFakultas);

    props.onButtonClick(updatedHMJ, clickedFakultas);
  };

  return (
    <button
      onClick={buttonClickHandler}
      className={classNameList}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

export default ButtonFakultas;
