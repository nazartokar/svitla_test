import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';

export const roles = ['Customer Support', 'Engineer', 'Manager', 'Sales'];

export const getValue = list => list[Math.floor(Math.random() * list.length)];

export const statuses = ['Explored', 'Scheduled', 'Screen', 'Hire'];

export const getDate = () =>
  moment(new Date())
    .subtract(Math.floor(Math.random() * 10 + 1), 'days')
    .format(dateFormat);

export const names = [
  'Alexander',
  'Daniel',
  'George',
  'John',
  'Joseph',
  'Matthew',
  'Michael',
  'Nicky',
  'Noah',
  'Liam',
  'Oliver',
  'Osvald',
  'Peter',
  'William',
];

export const surnames = [
  'Adams',
  'Anderson',
  'Baker',
  'Davis',
  'Greene',
  'Hernandez',
  'Burns',
  'Johnson',
  'King',
  'Miller',
  'Smith',
  'Peterson',
  'Roberts',
  'Washington',
  'Williams',
  'Wilson',
];

export const getName = (names, surnames) => {
  const nameID = Math.floor(Math.random() * names.length);
  const surnameID = Math.floor(Math.random() * surnames.length);

  return `${names[nameID]} ${surnames[surnameID]}`;
};
