import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Input from 'react-rainbow-components/components/Input';
import Button from 'react-rainbow-components/components/Button';
import Select from 'react-rainbow-components/components/Select';
import CheckboxGroup from 'react-rainbow-components/components/CheckboxGroup';
import RadioGroup from 'react-rainbow-components/components/RadioGroup';
import CheckboxToggle from 'react-rainbow-components/components/CheckboxToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import validate from './validate';

const COUNTRY_OPTIONS = [
    { value: 'cuba', label: 'Cuba' },
    { value: 'usa', label: 'United States' },
    { value: 'mexico', label: 'Mexico' },
];

const GENDER_OPTIONS = [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }];

const VALUES_OPTIONS = [
    { value: 'value-1', label: 'value-1' },
    { value: 'value-2', label: 'value-2' },
    { value: 'value-3', label: 'value-3' },
];

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.fieldRef = React.createRef();
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.fieldRef.current.getRenderedComponent());
        this.fieldRef.current.getRenderedComponent().focus();
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form
                className="rainbow-p-horizontal_x-large rainbow-p-bottom_large rainbow-checkout_media-styles-container"
                noValidate
                onSubmit={handleSubmit}
            >
                <div className="rainbow-flex rainbow-checkout_media-styles-inner-container rainbow-m-bottom_large">
                    <Field
                        component={Input}
                        name="firstName"
                        className="rainbow-checkout_form-element rainbow-m-right_x-large"
                        label="First Name"
                        placeholder="Enter your first name"
                        type="text"
                        ref={this.fieldRef}
                        forwardRef={this.inputRef}
                        required
                        withRef
                    />

                    <Field
                        component={Input}
                        name="lastName"
                        className="rainbow-checkout_form-element"
                        label="Last Name"
                        required
                        placeholder="Enter your last name"
                        type="text"
                    />
                </div>

                <div className="rainbow-flex rainbow-checkout_media-styles-inner-container rainbow-m-bottom_large">
                    <Field
                        component={Input}
                        name="email"
                        className="rainbow-checkout_form-element rainbow-m-right_x-large"
                        label="Email Address"
                        required
                        placeholder="Enter your email address"
                        type="email"
                        icon={
                            <FontAwesomeIcon icon={faEnvelope} className="rainbow-color_gray-3" />
                        }
                    />

                    <Field
                        component={Select}
                        name="country"
                        className="rainbow-checkout_form-element"
                        label="Country"
                        options={COUNTRY_OPTIONS}
                        required
                    />
                </div>

                <Field
                    component={Input}
                    name="address"
                    className="rainbow-m-bottom_large"
                    label="Address"
                    placeholder="Enter your address"
                    type="text"
                />

                <div className="rainbow-flex rainbow-checkout_media-styles-inner-container rainbow-m-bottom_large">
                    <Field
                        component={Input}
                        name="zipCode"
                        className="rainbow-checkout_form-element rainbow-m-right_x-large"
                        label="Zip Code"
                        placeholder="Enter your zip code"
                        type="number"
                    />

                    <Field
                        component={Input}
                        name="phoneNumber"
                        className="rainbow-checkout_form-element"
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        type="number"
                        icon={
                            <FontAwesomeIcon
                                icon={faMobileAlt}
                                size="lg"
                                className="rainbow-color_gray-3"
                            />
                        }
                    />
                </div>
                <div className="rainbow-flex rainbow-m-bottom_large">
                    <Field
                        component={RadioGroup}
                        name="gender"
                        className="rainbow-m-right_x-large"
                        label="Gender"
                        options={GENDER_OPTIONS}
                        required
                    />

                    <Field
                        component={CheckboxGroup}
                        name="values"
                        label="Values"
                        options={VALUES_OPTIONS}
                    />
                </div>

                <div className="rainbow-flex rainbow-justify_spread">
                    <Field
                        component={CheckboxToggle}
                        name="saveData"
                        className="rainbow-m-bottom_large"
                        label="Save data for the nex time"
                    />

                    <Button type="submit" variant="brand">
                        Next
                        <FontAwesomeIcon icon={faArrowRight} className="rainbow-m-left_small" />
                    </Button>
                </div>
            </form>
        );
    }
}

CheckoutForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'checkout-form',
    validate,
    touchOnBlur: false,
})(CheckoutForm);
