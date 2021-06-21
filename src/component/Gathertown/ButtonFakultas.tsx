import { FC } from 'react';
import { LIST_HMJ } from '../../pages/Gathertown/GathertownConstant';

type HMJ = {
  namaFakultas: string;
  namaHMJ: string;
  jurusan: string;
  link: string;
};

const ButtonFakultas: FC<{
  value: string;
  onButtonClick: (listHMJ: HMJ[], namaFakultas: string) => void;
  className: string;
}> = (props) => {
  const classNameList = props.className + ' button';

  const buttonClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const clickedFakultas: string =
      event.currentTarget.getAttribute('value') || 'default';

    const updatedHMJ = LIST_HMJ.filter(
      (hmj) => hmj.namaFakultas === clickedFakultas
    );

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
