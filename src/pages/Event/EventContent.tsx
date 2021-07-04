import IEvent from '../../interfaces/IEvent';

export const EVENTS: IEvent[] = [
  {
    date: new Date('2021-07-03'),
    title: 'LIVE Instagram 1 WisShare',
  },
  {
    date: new Date('2021-07-04'),
    title: 'Live Instagram 2 WisShare',
  },
  {
    date: new Date('2021-07-06'),
    title: 'WisCinema',
  },
  {
    date: new Date('2021-07-10'),
    title: 'Webinar WisShare',
  },
  {
    date: new Date('2021-07-11'),
    title: 'Charity Concert',
  },
  {
    date: new Date('2021-07-15'),
    title: 'Taman Ekspresi',
  },
  {
    date: new Date('2021-07-18'),
    title: 'Parade Wisuda Juli ITB 2021',
    main: true, // dekorasi outline
  }
];

export const isPastEvent = (event: { date: Date; }) => {
  return calculateDays(event.date) < 0;
};

export const findUpcomingEvent = (events: IEvent[]) => {
  const futureEvents = events.filter(({ date }) => calculateDays(date) >= 0);
  return futureEvents[0];
};

export const calculateDays = (date: Date): number => {
  const today = new Date();
  const timeDifference = date.getTime() - today.getTime();
  return Math.round(timeDifference / (1000 * 60 * 60 * 24));
};

export const getUpcomingText = (date: Date) => {
  const days = calculateDays(date);
  let text = '';
  if (days == 0) {
    text = 'Today';
  } else if (days == 1) {
    text = 'Tomorrow';
  } else {
    text = `${days} days to go`;
  }
  return `\xa0\xa0\xa0[ ${text} ]`;
};
