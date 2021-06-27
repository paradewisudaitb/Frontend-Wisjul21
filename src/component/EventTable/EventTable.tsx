import React from 'react';
import IEventTable from '../../interfaces/IEventTable';
import { getUpcomingText } from '../../pages/Event/EventContent';
import './EventTable.scss';

const DAFTAR_BULAN: any = {
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
};

const dateToText = (date: Date): string => {
  const month = DAFTAR_BULAN[date.getMonth()];
  return `${date.getDate()} ${month}`;
};

const Event: any = ({
  isPastEvent,
  isComingSoon,
  isMainEvent,
  date,
  title,
}: IEventTable) => {
  return (
    <tr
      className={`rundown${isComingSoon ? ' rundown-coming-soon' : ''}${
        isPastEvent ? ' rundown-past-event' : ''
      }${isMainEvent ? ' rundown-main-event' : ''}`}
    >
      <td className="jam">{dateToText(date)}</td>
      <td className="line"></td>
      <td className="keterangan">
        {title}
        {isComingSoon && getUpcomingText(date)}
      </td>
    </tr>
  );
};

export default Event;
export {};
