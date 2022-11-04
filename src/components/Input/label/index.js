import React from 'react';
import PropTypes from 'prop-types';
import RequiredAsterisk from '../../RequiredAsterisk';
import HiddenElement from '../../Structural/hiddenElement';
import LabelText from './labelText';
import RenderIf from '../../RenderIf';

export default function Label(props) {
    const {
        className,
        label,
        required,
        inputId,
        readOnly,
        id,
        labelAlignment,
        hideLabel,
        variant,
        as,
        size,
    } = props;
    if (hideLabel) {
        return (
            <HiddenElement as="label" htmlFor={inputId} id={id}>
                <RequiredAsterisk required={required} />
                {label}
            </HiddenElement>
        );
    }

    return (
        <RenderIf isTrue={label}>
            <LabelText
                className={className}
                readOnly={readOnly}
                labelAlignment={labelAlignment}
                htmlFor={inputId}
                as={as}
                id={id}
                variant={variant}
                size={size}
            >
                <RequiredAsterisk required={required} />
                {label}
            </LabelText>
        </RenderIf>
    );
}

Label.propTypes = {
    className: PropTypes.string,
    label: PropTypes.node,
    required: PropTypes.bool,
    inputId: PropTypes.string,
    readOnly: PropTypes.bool,
    id: PropTypes.string,
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    hideLabel: PropTypes.bool,
    as: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'inverse']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Label.defaultProps = {
    className: undefined,
    label: undefined,
    required: false,
    inputId: undefined,
    readOnly: false,
    id: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    as: undefined,
    variant: 'default',
    size: 'medium',
};
