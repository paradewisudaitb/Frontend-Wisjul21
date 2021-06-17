export const EVENTS = [
  {
    date: new Date('2021-02-28'),
    title: 'WISDOM #1',
  },
  {
    date: new Date('2021-03-13'),
    title: 'WISDOM #2',
  },
  {
    date: new Date('2021-03-20'),
    title: 'WISDOM #3',
  },
  {
    date: new Date('2021-03-21'),
    title: 'Nonton Bareng',
  },
  {
    date: new Date('2021-03-27'),
    title: 'Reflection Night',
  },
  {
    date: new Date('2021-03-28'),
    title: 'Charity Concert: Wispril x Apres! ITB',
  },
  {
    date: new Date('2021-04-04'),
    title: 'Charity Event',
  },
  {
    date: new Date('2021-04-10'),
    title: 'Parade Wisuda ITB 2021',
    main: true, // dekorasi outline
  },
  {
    date: new Date('2021-04-10'),
    title: 'Virtual Photoshoot',
  },
];

export const isPastEvent = (event: { date: any; }) => {
  return calculateDays(event.date) < 0;
};

export const findUpcomingEvent = (events: any[]) => {
  const futureEvents = events.filter(({ date }) => calculateDays(date) >= 0);
  return futureEvents[0];
};

export const calculateDays = (date: { getTime: () => number; }) => {
  const today = new Date();
  const timeDifference = date.getTime() - today.getTime();
  return Math.round(timeDifference / (1000 * 60 * 60 * 24));
};

export const getUpcomingText = (date: any) => {
  const days = calculateDays(date);
  let text = '';
  if (days === 0) {
    text = 'Hari ini';
  } else if (days === 1) {
    text = 'Besok';
  } else {
    text = `${days + 1} hari lagi`;
  }
  return `\xa0\xa0\xa0[ ${text} ]`;
};
