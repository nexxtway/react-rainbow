import React from 'react';
import { shallow } from 'enzyme';
import ProgressCircular from '../index';
import StyledContainer from '../styled/container';
import StyledPercentValue from '../styled/percentValue';

describe('<ProgressCircular/>', () => {
    it('should be accessible', () => {
        const component = shallow(<ProgressCircular value={25} />);
        expect(component.find(StyledContainer).props()).toEqual(
            expect.objectContaining({
                role: 'progressbar',
                'aria-valuemax': '100',
                'aria-valuemin': '0',
                'aria-valuenow': 25,
            }),
        );
    });
    it('should has set the value passed', () => {
        const component = shallow(<ProgressCircular value={25} />);
        expect(component.find('ProgressRing').prop('percent')).toBe(25);
        expect(component.find(StyledPercentValue).text()).toBe('25%');
    });
});
