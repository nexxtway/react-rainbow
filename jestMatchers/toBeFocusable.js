import { eachShouldBeOneOrFunction } from './utils';

function isMountedByEnzyme(component) {
    return typeof component.setProps === 'function'
        && typeof component.simulate === 'function'
        && typeof component.instance === 'function';
}

const focusables = ['button', 'input', 'select', 'textarea'];

export default function toBeFocusable(component) {
    if (component && isMountedByEnzyme(component)) {
        const onClickMockFn = jest.fn();
        const onBlurMockFn = jest.fn();
        const onFocusMockFn = jest.fn();

        component.setProps({
            onClick: onClickMockFn,
            onBlur: onBlurMockFn,
            onFocus: onFocusMockFn,
        });

        const focusableElement = focusables.find(element => component.find(element).exists());
        if (focusableElement) {
            const element = component.find(focusableElement);
            element.simulate('click');
            element.simulate('blur');
            element.simulate('focus');
        }

        const instance = component.instance();

        const results = [
            onClickMockFn.mock.calls.length,
            onFocusMockFn.mock.calls.length,
            onBlurMockFn.mock.calls.length,
            instance ? typeof instance.click : null,
            instance ? typeof instance.focus : null,
            instance ? typeof instance.blur : null,
        ];

        if (eachShouldBeOneOrFunction(results)) {
            return {
                message: '',
                pass: true,
            };
        }
        return {
            message: () => `Expected ${component.name()} to be focusable but it is not.`,
            pass: false,
        };
    }
    return {
        message: () => 'You need to pass a component returned by mount or shallow enzyme\'s methods to check whether it is focusable or not.',
        pass: false,
    };
}
