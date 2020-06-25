import React from 'react';
import { mount } from 'enzyme';
import { ESCAPE_KEY } from '../../../libs/constants';
import HelpText from '../';
import InternalOverlay from '../../InternalOverlay';

jest.mock('../../InternalOverlay', () =>
    jest.fn(({ render: Content, ...props }) => (
        <div {...props}>
            <Content />
        </div>
    )),
);

describe('<HelpText />', () => {
    it('should show info when button is focused and hiddden when is not', () => {
        const wrapper = mount(<HelpText text="Help Text" />);
        expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(false);
        wrapper.find('button').simulate('focus');
        expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
        wrapper.find('button').simulate('blur');
        expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(false);
    });

    it('should show info when mouse enter to button and hidden when leave', () => {
        const wrapper = mount(<HelpText text="Help Text" />);
        expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(false);
        wrapper.find('button').simulate('mouseenter');
        expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
        wrapper.find('button').simulate('mouseleave');
        setTimeout(() => {
            expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(false);
        });
    });

    it('should hidden info when is button is focused and press ESCAPE key', () => {
        const wrapper = mount(<HelpText text="Help Text" />);
        wrapper.find('button').simulate('focus');
        expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
        wrapper.find('button').simulate('keyDown', {
            keyCode: ESCAPE_KEY,
        });
        expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(false);
    });

    it('should show info when mouse leave to button and is focused', () => {
        const wrapper = mount(<HelpText text="Help Text" />);
        wrapper.find('button').simulate('focus');
        expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
        wrapper.find('button').simulate('mouseleave');
        setTimeout(() => {
            expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
        });
    });

    it('should maintain focus button when clicking in help text', () => {
        const wrapper = mount(<HelpText text={<div id="test-id">Help Text</div>} />);
        wrapper.find('button').simulate('focus');
        expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
        wrapper.find('[id="test-id"]').simulate('click');
        expect(wrapper.find(InternalOverlay).prop('isVisible')).toBe(true);
    });
});
