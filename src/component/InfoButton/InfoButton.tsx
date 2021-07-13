import React from 'react';

import './InfoButton.scss';

interface IInfoButton {
  info: string,
}

export const InfoButton = ({info}: IInfoButton) => {

  return (
    <div className="infobutton">
      <p>
        i
      </p>
      <div className="info">
        {info}
      </div>
    </div>
  );
};