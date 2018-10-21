import React from 'react';
import { mount } from 'enzyme';
import ReCaptchaComponent from '../component';

window.grecaptcha = {
    ready: jest.fn(),
};

describe('<ReCaptchaComponent />', () => {
    it('it should call the ready function', () => {
        mount(
            <ReCaptchaComponent
                value="site-Key"
                theme="light"
                size="normal"
                tabIndex={0}
                onChange={() => {}} />,
        );
        expect(window.grecaptcha.ready).toHaveBeenCalledTimes(1);
    });
    it('it should call the render function', () => {
        window.grecaptcha = {
            ready: callback => callback(),
            render: jest.fn(),
        };

        mount(
            <ReCaptchaComponent
                value="site-Key"
                theme="light"
                size="normal"
                tabIndex={0}
                onChange={() => {}} />,
        );
        expect(window.grecaptcha.render).toHaveBeenCalledTimes(1);
    });
    it('it should call the render function with the right params', () => {
        window.grecaptcha = {
            ready: callback => callback(),
            render: jest.fn(),
        };

        const component = mount(
            <ReCaptchaComponent
                value="site-key"
                theme="light"
                size="normal"
                tabIndex={0}
                onChange={() => {}} />,
        );
        expect(component.find('div#recaptcha-container').exists()).toBe(true);
        expect(window.grecaptcha.render).toHaveBeenCalledWith('recaptcha-container', {
            sitekey: 'site-key',
            theme: 'light',
            size: 'normal',
            tabIndex: 0,
            callback: expect.any(Function),
            'expired-callback': expect.any(Function),
            'error-callback': expect.any(Function),
        });
    });
});
