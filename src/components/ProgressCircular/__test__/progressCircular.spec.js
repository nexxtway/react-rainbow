import React from 'react';
import { mount, shallow } from 'enzyme';
import ProgressCircular from './../index';

describe('<ProgressCircular/>', () => {
    it('should be accesible', () => {
        const component = shallow(<ProgressCircular value={25} />);
        expect(component.find('div[role="progressbar"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemax="100"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemin="0"]').exists()).toBe(true);
        expect(component.find('div[aria-valuenow=25]').exists()).toBe(true);
    });
    it('should has set the value passed', () => {
        const component = shallow(<ProgressCircular value={25} />);
        expect(component.find('ProgressRing').prop('percent')).toBe(25);
        expect(component.find('.rainbow-progress-circular_percent-text').text()).toBe('25%');
    });
    it('should have the right class names when variant success', () => {
        const component = mount(<ProgressCircular variant="success" />);
        const container = component.find(
            'div.rainbow-progress-circular.rainbow-progress-circular--success',
        );
        expect(container.exists()).toBe(true);
    });
    it('should have the right class names when variant warning', () => {
        const component = mount(<ProgressCircular variant="warning" />);
        const container = component.find(
            'div.rainbow-progress-circular.rainbow-progress-circular--warning',
        );
        expect(container.exists()).toBe(true);
    });
    it('should have the right class names when variant error', () => {
        const component = mount(<ProgressCircular variant="error" />);
        const container = component.find(
            'div.rainbow-progress-circular.rainbow-progress-circular--error',
        );
        expect(container.exists()).toBe(true);
    });
});
