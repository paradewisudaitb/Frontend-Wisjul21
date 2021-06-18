import React from 'react';
import IEventTable from '../../interfaces/IEventTable';
import { getUpcomingText } from '../../pages/Event/EventContent';
import './EventTable.scss';

const DAFTAR_BULAN: any = {
  0: 'Mei',
  1: 'Juni',
  2: 'Juli',
  3: 'Agustus',
  4: 'Mei',
  5: 'Juni',
  6: 'Juli',
  7: 'Agustus',
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
