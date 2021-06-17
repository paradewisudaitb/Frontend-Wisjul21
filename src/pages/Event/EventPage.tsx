import React, { useState } from 'react';
import Event from '../../component/EventTable/EventTable';
import './EventPage.scss';
import {
  EVENTS,
  isPastEvent,
  findUpcomingEvent,
  getUpcomingText,
} from './EventContent';

import { Navbar } from '../../component/Navbar';
import { Footer } from '../../component/Footer';

const EventPage = () => {
  return (
    <div className="App-header">
      <h1>What's On Wisjul</h1>
      <p>
        Check our instagram, {' '}
        <strong>
          <a href="https://www.instagram.com/paradewisudaitb/">
            @paradewisudaitb
          </a>
        </strong>{' '}
        for futher information
      </p>
      <table>
        <tr>
          lorem ipsum
        </tr>
        <tr>
          lorem ipsum
        </tr>
        <tr>
          lorem ipsum
        </tr>
      </table>
    </div>
  );
};
export default EventPage;