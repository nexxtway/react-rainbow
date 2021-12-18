import React from 'react';
import { mount } from 'enzyme';
import ActivityTimeline from '../index';
import Card from '../../Card';
import TimelineMarker from '../../TimelineMarker';
import ButtonIcon from '../../ButtonIcon';

describe('<ActivityTimeline/>', () => {
    it('should render the children passed', () => {
        const component = mount(
            <ActivityTimeline>
                <Card title="ActivityTimeline--children" />
            </ActivityTimeline>,
        );
        expect(component.find(Card).exists()).toBe(true);
    });
    it('should fire onToggleSection with the right params when variant is accordion and multiple is false', () => {
        const onToggleSectionFN = jest.fn();
        const component = mount(
            <ActivityTimeline variant="accordion" onToggleSection={onToggleSectionFN}>
                <TimelineMarker name="marker1" />
                <TimelineMarker name="marker2" />
                <TimelineMarker name="marker3" />
            </ActivityTimeline>,
        );
        component
            .find(ButtonIcon)
            .at(0)
            .simulate('click');
        expect(onToggleSectionFN).toHaveBeenCalledWith({
            activeSectionNames: 'marker1',
            toggledSection: 'marker1',
        });
        component
            .find(ButtonIcon)
            .at(2)
            .simulate('click');
        expect(onToggleSectionFN).toHaveBeenCalledWith({
            activeSectionNames: 'marker3',
            toggledSection: 'marker3',
        });
    });
    it('should fire onToggleSection with the right params when variant is accordion and multiple is passed', () => {
        const onToggleSectionFN = jest.fn();
        const component = mount(
            <ActivityTimeline variant="accordion" multiple onToggleSection={onToggleSectionFN}>
                <TimelineMarker name="marker1" />
                <TimelineMarker name="marker2" />
                <TimelineMarker name="marker3" />
            </ActivityTimeline>,
        );
        component
            .find(ButtonIcon)
            .at(0)
            .simulate('click');
        expect(onToggleSectionFN).toHaveBeenCalledWith({
            activeSectionNames: ['marker1'],
            toggledSection: 'marker1',
        });
        component
            .find(ButtonIcon)
            .at(2)
            .simulate('click');
        expect(onToggleSectionFN).toHaveBeenCalledWith({
            activeSectionNames: ['marker1', 'marker3'],
            toggledSection: 'marker3',
        });
        component
            .find(ButtonIcon)
            .at(2)
            .simulate('click');
        expect(onToggleSectionFN).toHaveBeenCalledWith({
            activeSectionNames: ['marker1'],
            toggledSection: 'marker3',
        });
    });
    it('should expand the right marker when variant is accordion and its name is passed in activeSectionNames prop', () => {
        const component = mount(
            <ActivityTimeline variant="accordion" activeSectionNames="marker2">
                <TimelineMarker name="marker1" />
                <TimelineMarker name="marker2">
                    <Card title="card" />
                </TimelineMarker>
                <TimelineMarker name="marker3" />
            </ActivityTimeline>,
        );
        expect(component.find(Card).exists()).toBe(true);
    });
    it('should expand the right markers when variant is accordion, multiple is true and names are passed in activeSectionNames prop', () => {
        const component = mount(
            <ActivityTimeline
                variant="accordion"
                multiple
                activeSectionNames={['marker2', 'marker3']}
            >
                <TimelineMarker name="marker1">
                    <Card title="card" />
                </TimelineMarker>
                <TimelineMarker name="marker2">
                    <Card title="card" />
                </TimelineMarker>
                <TimelineMarker name="marker3">
                    <Card title="card" />
                </TimelineMarker>
            </ActivityTimeline>,
        );
        const cardExistsAtIndex = index =>
            component
                .find(TimelineMarker)
                .at(index)
                .find(Card)
                .exists();
        expect(cardExistsAtIndex(0)).toBe(false);
        expect(cardExistsAtIndex(1)).toBe(true);
        expect(cardExistsAtIndex(2)).toBe(true);
    });
});
