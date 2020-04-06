import React from 'react';
import { mount } from 'enzyme';
import ImportRecordsFlow from '../';
import Footer from '../footer';

describe('<ImportRecordsFlow />', () => {
    it('should set isBackButtonDisabled to true initially in Footer component', () => {
        const component = mount(<ImportRecordsFlow isOpen />);
        expect(component.find(Footer).prop('isBackButtonDisabled')).toBe(true);
    });
    it('should set isNextButtonDisabled to true initially in Footer component', () => {
        const component = mount(<ImportRecordsFlow isOpen />);
        expect(component.find(Footer).prop('isNextButtonDisabled')).toBe(true);
    });
    it('should set the right modal title initially', () => {
        const component = mount(<ImportRecordsFlow isOpen />);
        expect(component.find('Modal').prop('title')).toBe('Whats do you want to do?');
    });
});
