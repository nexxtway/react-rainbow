import React from 'react';
import { mount } from 'enzyme';
import withReduxForm from './../';

function Input(props) {
    return <input {...props} />;
}

const InputComponent = withReduxForm(Input);

describe('withReduxForm', () => {
    it('should be focusable', () => {
        const component = mount(<InputComponent />);
        expect(component).toBeFocusable();
    });
});
