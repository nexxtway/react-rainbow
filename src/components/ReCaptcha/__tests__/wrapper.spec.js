import React from 'react';
import { mount } from 'enzyme';
import ReCaptchaWrapper from '../wrapper';

window.grecaptcha = {
    ready: jest.fn(),
};

describe('<ReCaptchaWrapper />', () => {
    it('should not render when isScriptLoaded and isScriptLoadSucceed are false', () => {
        const component = mount(<ReCaptchaWrapper />);
        component.setProps({
            isScriptLoaded: false,
            isScriptLoadSucceed: false,
        });
        expect(component.children().length).toEqual(0);
    });
    it('should not render when isScriptLoaded is true and isScriptLoadSucceed is false', () => {
        const component = mount(<ReCaptchaWrapper />);
        component.setProps({
            isScriptLoaded: true,
            isScriptLoadSucceed: false,
        });
        expect(component.children().length).toEqual(0);
    });
    it('should render the ReCaptcha loader with the right props', () => {
        const component = mount(
            <ReCaptchaWrapper
                onChange={() => {}}
                onCreateRecaptcha={() => {}}
                value="site-key"
                theme="dark"
                size="normal"
                error="error"
                tabIndex={0}
                isScriptLoaded
                isScriptLoadSucceed
            />,
        );
        const loader = component.find('ReCaptchaComponent');

        expect(loader.exists()).toBe(true);
        expect(loader.props()).toEqual({
            onChange: expect.any(Function),
            onCreateRecaptcha: expect.any(Function),
            value: 'site-key',
            theme: 'dark',
            size: 'normal',
            error: 'error',
            tabIndex: 0,
            className: undefined,
            style: undefined,
        });
    });
});
