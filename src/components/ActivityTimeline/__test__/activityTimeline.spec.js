import React from 'react';
import { mount } from 'enzyme';
import ActivityTimeline from './../index';
import Card from './../../Card';

describe('<ActivityTimeline/>', () => {
    it('should render the children passed', () => {
        const component = mount(
            <ActivityTimeline>
                <Card title="ActivityTimeline--children" />
            </ActivityTimeline>,
        );
        expect(component.find(Card).exists()).toBe(true);
    });
});
