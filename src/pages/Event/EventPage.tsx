import React, { useState } from 'react';
import Event from '../../component/EventTable/EventTable';
import './EventPage.scss';
import {
  EVENTS,
  isPastEvent,
  findUpcomingEvent,
  getUpcomingText,
} from './EventContent';
import { ASSET_URL } from '../../api';

const EventPage = () => {
  const comingSoonEvent = findUpcomingEvent(EVENTS)?.title;
  return (
    <div className="event-page">
      <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%20matahari-01.png`}  />
      <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%205-01.png`}  />
      <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%203-01.png`}  />
      <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%204-01.png`}  />
      <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/spark%201%20bawah%20matahari.png`}  />
      <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/spark%202%20atas%20matahari.png`}  />
      <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/bulu.png`}  />
      <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/bulu.png`}  />

      <h1>What's On Wisjul</h1>
      <p>
        Check our instagram, {' '}
        <strong>
          <a href="https://www.instagram.com/paradewisudaitb/">
            @paradewisudaitb
          </a>
        </strong>{' '}
        for futher information.
      </p>
      <table>
        <tbody className="ukurantabel">
          {EVENTS.map((row, idx) => (
            <Event
              data={row}
              key={idx}
              date={row.date}
              isMainEvent={row.main}
              isPastEvent={isPastEvent(row)}
              isComingSoon={row.title == comingSoonEvent}
              getUpcomingText={getUpcomingText}
              title={row.title}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EventPage;