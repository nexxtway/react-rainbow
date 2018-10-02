import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Input from 'react-rainbow-components/components/Input';
import Button from 'react-rainbow-components/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import validate from './validate';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.fieldRef = React.createRef();
    }

    componentDidMount() {
        this.fieldRef.current.getRenderedComponent().focus();
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field
                    component={Input}
                    name="email"
                    className="rainbow-m-bottom_large"
                    label="Email Address"
                    required
                    placeholder="Enter your email address"
                    type="text"
                    ref={this.fieldRef}
                    withRef
                    icon={
                        <FontAwesomeIcon icon={faEnvelope} className="rainbow-color_gray-3" />
                    } />

                <Field
                    component={Input}
                    name="password"
                    className="rainbow-m-bottom_large"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    required
                    icon={
                        <FontAwesomeIcon icon={faLock} className="rainbow-color_gray-3" />
                    } />

                <Button
                    className="rainbow-m-bottom_medium rainbow-sign-in_button-sign-in"
                    label="Sign in"
                    variant="brand"
                    type="submit" />
            </form>
        );
    }
}

SignInForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'sign-in',
    validate,
})(SignInForm);
