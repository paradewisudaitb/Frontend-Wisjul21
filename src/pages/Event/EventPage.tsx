import React, { useState } from 'react';
import Event from '../../component/EventTable/EventTable';
import './EventPage.scss';
import {
  EVENTS,
  isPastEvent,
  findUpcomingEvent,
  getUpcomingText,
} from './EventContent';

import { Navbar } from '../../component/NavbarFooter/Navbar';
import { Footer } from '../../component/NavbarFooter/Footer';

const EventPage = () => {
  const comingSoonEvent = findUpcomingEvent(EVENTS)?.title;
  return (
    <div className="App-header">
      <img src={`${ASSET_URL}/assets/images/background/main.jpg`} className='abc'/>
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