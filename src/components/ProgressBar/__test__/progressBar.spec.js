import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../index';
import StyledBar from '../styled/bar';
import StyledContainer from '../styled/container';

describe('<ProgressBar/>', () => {
    it('should has set the value passed', () => {
        const component = shallow(<ProgressBar value={25} />);

        expect(component.find(StyledBar).prop('style').width).toBe('25%');
    });
    it('should be accessible', () => {
        const component = shallow(<ProgressBar value={25} />);

        expect(component.find(StyledContainer).props()).toEqual(
            expect.objectContaining({
                role: 'progressbar',
                'aria-valuemax': '100',
                'aria-valuemin': '0',
                'aria-valuenow': 25,
            }),
        );
    });
});
