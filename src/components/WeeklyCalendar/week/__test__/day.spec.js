import React from 'react';
import { mount } from 'enzyme';
import Day from '../day';

jest.mock('../event', () => () => <div />);
jest.mock('../helpers/getEventsOfDay', () =>
    jest
        .fn()
        .mockReturnValue([])
        .mockReturnValueOnce([
            {
                id: '1',
                title: 'Leandro Torres',
                startDate: new Date(2019, 1, 1),
                endDate: new Date(2019, 1, 1).setHours(0, 30, 0, 0),
            },
            {
                id: '2',
                title: 'Tahimi Leon',
                startDate: new Date(2020, 1, 1).setHours(2, 30, 0, 0),
                endDate: new Date(2020, 1, 1).setHours(3, 30, 0, 0),
            },
            {
                id: '3',
                title: 'Sara Pacheco',
                startDate: new Date(2020, 1, 1).setHours(12, 0, 0, 0),
                endDate: new Date(2020, 1, 1).setHours(12, 30, 0, 0),
            },
            {
                id: '4',
                title: 'Jose Torres',
                startDate: new Date(2020, 1, 1).setHours(7, 15, 0, 0),
                endDate: new Date(2020, 1, 1).setHours(7, 30, 0, 0),
            },
            {
                id: '5',
                title: 'JL Torres',
                startDate: new Date(2020, 1, 1),
                endDate: new Date(2020, 1, 1).setHours(0, 30, 0, 0),
            },
        ]),
);

describe('<Day />', () => {
    it('should render 5 events when useEventsOfDay return a array of 5 events', () => {
        const wrapper = mount(<Day />);
        expect(wrapper.find('Events').children().length).toBe(5);
    });
    it('should render 0 event when useEventsOfDay return a empty array', () => {
        const wrapper = mount(<Day />);
        expect(wrapper.find('Events').children().length).toBe(0);
    });
});
