import { getEventsOfDay } from '..';

const events = [
    {
        title: 'Leandro Torres',
        startDate: new Date(2019, 1, 1),
        endDate: new Date(2019, 1, 1).setHours(0, 30, 0, 0),
    },
    {
        title: 'Tahimi Leon',
        startDate: new Date(2020, 1, 1).setHours(2, 30, 0, 0),
        endDate: new Date(2020, 1, 1).setHours(3, 30, 0, 0),
    },
    {
        title: 'Sara Pacheco',
        startDate: new Date(2020, 1, 1).setHours(12, 0, 0, 0),
        endDate: new Date(2020, 1, 1).setHours(12, 30, 0, 0),
    },
    {
        title: 'Jose Torres',
        startDate: new Date(2020, 1, 1).setHours(7, 15, 0, 0),
        endDate: new Date(2020, 1, 1).setHours(7, 30, 0, 0),
    },
    {
        title: 'Yuri V. Munayev',
        startDate: new Date(2020, 1, 1).setHours(0, 0, 0, 0),
        endDate: new Date(2020, 1, 2).setHours(0, 0, 0, 0),
    },
    {
        title: 'JL Torres',
        startDate: new Date(2020, 1, 1),
        endDate: new Date(2020, 1, 2).setHours(0, 30, 0, 0),
    },
];

describe('getEventsOfDay', () => {
    it('should return 0 event when events do not have event for this day', () => {
        const day = new Date(2020, 3, 12);
        expect(getEventsOfDay(events, day).length).toBe(0);
    });
    it('should return 4 event when day is 2020/1/1', () => {
        const day = new Date(2020, 1, 1);
        expect(getEventsOfDay(events, day).length).toBe(4);
    });
});
