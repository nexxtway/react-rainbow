import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from '../RequiredAsterisk';

export default class Label extends Component {
    constructor(props) {
        super(props);
        this.labelRef = React.createRef();
    }

    getLabelClassNames() {
        const { readOnly, hideLabel } = this.props;
        return classnames('rainbow-lookup_input-label', {
            'rainbow-lookup_input-label-read-only': readOnly,
            'rainbow-lookup_input-label--hide': hideLabel,
        });
    }

    getHeight() {
        const labelElement = this.labelRef.current;
        if (labelElement) {
            return labelElement.clientHeight;
        }
        return undefined;
    }

    render() {
        const {
            label,
            required,
            inputId,
            id,
        } = this.props;

        return (
            <label
                className={this.getLabelClassNames()}
                htmlFor={inputId}
                id={id}
                ref={this.labelRef}>

                <RequiredAsterisk required={required} />
                {label}
            </label>
        );
    }
}

Label.propTypes = {
    label: PropTypes.node.isRequired,
    required: PropTypes.bool.isRequired,
    inputId: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired,
    id: PropTypes.string,
    hideLabel: PropTypes.bool,
};

Label.defaultProps = {
    id: undefined,
    hideLabel: false,
};
