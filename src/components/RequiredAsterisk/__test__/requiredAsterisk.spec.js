import React from 'react';
import { mount } from 'enzyme';
import RequiredAsterisk from './../index';
import StyledAsterisk from '../styledAsterisk';

describe('<InputRequiredAsterisk/>', () => {
    it('should render the abbr element when is required', () => {
        const component = mount(<RequiredAsterisk required />);
        expect(component.find('abbr').exists()).toBe(true);
    });
    it('should set the title prop as required in the abbr element when is required', () => {
        const component = mount(<RequiredAsterisk required />);
        const asterisk = component.find(StyledAsterisk);
        expect(asterisk.prop('title')).toBe('required');
    });
});
