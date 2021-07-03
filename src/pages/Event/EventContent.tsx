import IEvent from '../../interfaces/IEvent';

export const EVENTS: IEvent[] = [
  {
    date: new Date('2021-05-28'),
    title: 'WISDOM #1111111',
  },
  {
    date: new Date('2021-06-13'),
    title: 'WISDOM #2',
  },
  {
    date: new Date('2021-06-20'),
    title: 'WISDOM #3',
  },
  {
    date: new Date('2021-06-21'),
    title: 'Nonton Bareng',
  },
  {
    date: new Date('2021-06-26'),
    title: 'Reflection Night',
  },
  {
    date: new Date('2021-06-28'),
    title: 'Charity Concert: Wispril x Apres! ITB',
  },
  {
    date: new Date('2021-07-04'),
    title: 'Charity Event',
  },
  {
    date: new Date('2021-07-16'),
    title: 'Day-1 Parade Wisuda ITB 2021',
    main: true, // dekorasi outline
  },
  {
    date: new Date('2021-07-17'),
    title: 'Day-2 Parade Wisuda ITB 2021',
    main: true, // dekorasi outline
  },
  {
    date: new Date('2021-08-10'),
    title: 'Virtual Photoshoot',
  },
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
    text = `${days + 1} days to go`;
  }
  return `\xa0\xa0\xa0[ ${text} ]`;
};
