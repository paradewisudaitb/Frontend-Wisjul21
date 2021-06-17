import React from 'react';
import './EventTable.scss';

const DAFTAR_BULAN:any = {
  0: 'Januari',
  1: 'Februari',
  2: 'Maret',
  3: 'April',
  4: 'Mei',
  5: 'Juni',
  // Cuma sampe sini soalnya harusnya acaranya ga bakal selama itu
};

const dateToText:any = (date: { getMonth: () => string | number; getDate: () => any; }) => {
  const month = DAFTAR_BULAN[date.getMonth()];
  return `${date.getDate()} ${month}`;
};

const Event:any = ({
  isPastEvent,
  isComingSoon,
  isMainEvent,
  date,
  title,
  getUpcomingText,
}) => {
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
