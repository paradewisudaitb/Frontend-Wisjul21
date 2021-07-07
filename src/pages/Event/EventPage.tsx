import Event from '../../component/EventTable/EventTable';
import './EventPage.scss';
import {
  EVENTS,
  isPastEvent,
  findUpcomingEvent,
  getUpcomingText,
} from './EventContent';
import { ASSET_URL } from '../../api';
import Sponsor from '../../component/Sponsor/Sponsor';

const EventPage = () => {
  const comingSoonEvent = findUpcomingEvent(EVENTS)?.title;
  return (
    <>
      <div className="event-page">
        <img className='bg-component cloud-sun' src={`${ASSET_URL}/assets/images/vistock/main/awan%20matahari-01.png`}  />
        <img className='bg-component cloud-1' src={`${ASSET_URL}/assets/images/vistock/main/awan%205-01.png`}  />
        <img className="bg-component cloud-2" src={`${ASSET_URL}/assets/images/vistock/main/awan%202-01.png`}/>
        <img className="bg-component spark" src={`${ASSET_URL}/assets/images/vistock/main/spark%201%20kanan%20atas-01.png`} />
        <img className='bg-component bulu-1' src={`${ASSET_URL}/assets/images/vistock/main/bulu.png`}  />
        <img className='bg-component bulu-2' src={`${ASSET_URL}/assets/images/vistock/main/bulu.png`}  />
        <img className='bg-component spark-sun' src={`${ASSET_URL}/assets/images/vistock/main/spark%202%20atas%20matahari.png`} />
        <img className='bg-component awan-203' src={`${ASSET_URL}/assets/images/vistock/main/awan%203-01.png`}  />
        <img className='bg-component awan-204' src={`${ASSET_URL}/assets/images/vistock/main/awan%204-01.png`}  />
        <div className="content-header">
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
        </div>
        <table className="content-body">
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
        </table>
      </div>
      <Sponsor />
    </>
  );
};
export default EventPage;