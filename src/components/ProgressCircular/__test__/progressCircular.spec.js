import React from 'react';
import { mount, shallow } from 'enzyme';
import ProgressCircular from './../index';

describe('<ProgressCircular/>', () => {
    it('should has set the value passed', () => {
        const component = shallow(<ProgressCircular value={25} />);
        expect(component.find('ProgressRing').prop('percent')).toBe(25);
        expect(component.find('.rainbow-progress-circular_percent-text').text()).toBe('25%');
    });
    it('should have the right class names when varaint success', () => {
        const component = mount(<ProgressCircular variant="success" />);
        const container = component.find(
            'div.rainbow-progress-circular.rainbow-progress-circular--success',
        );
        expect(container.exists()).toBe(true);
    });
});
