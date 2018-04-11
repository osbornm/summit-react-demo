import Person from 'person';
import Contract from 'copntract';

let contracts = [
  new Contract({
    name: 'Lease Agreement 2018',
    contact: new Person({firstName: 'Matthew', lastName: 'osborn'}),
    startDate: Date.now()
  }),
  new Contract({
    name: 'NDA',
    contact: new Person({firstName: 'Matthew', lastName: 'osborn'}),
    startDate: Date.now()
  }),
  new Contract({
    name: 'Some Contract For Something',
    contact: new Person({firstName: 'Mark', lastName: 'osborn'}),
    startDate: Date.now()
  })
];

let activeContracts = contracts.filter((c) => {
  return c.startDate <= Date.now();
})

let contractsByContact = contracts.reduce((pv, cv) => {
  (pv[cv.contact.fullName] = pv[cv.contact.fullName] || []).push(cv);
  return pv;
}, {});