import React from 'react';
import { mount } from 'enzyme';
import ActivityTimeline from './../index';
import Card from './../../Card';

describe('<ActivityTimeline/>', () => {
    it('should have the right class names', () => {
        const component = mount(<ActivityTimeline />);
        expect(component.find('ul').prop('className')).toBe('rainbow-activity-timeline_container');
    });
    it('should have the right class names when a custom class name is passed', () => {
        const component = mount(<ActivityTimeline className="testing_activityTimeline" />);
        expect(component.find('ul').prop('className')).toBe(
            'rainbow-activity-timeline_container testing_activityTimeline',
        );
    });
    it('should render the children passed', () => {
        const component = mount(
            <ActivityTimeline>
                <Card title="ActivityTimeline--children" />
            </ActivityTimeline>,
        );
        expect(component.find(Card).exists()).toBe(true);
    });
});
