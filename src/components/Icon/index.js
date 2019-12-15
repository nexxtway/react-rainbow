import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledIconContainer from './styled/iconContainer';

/**
 * Icon component is used as a legend o status.
 */
export default function Icon(props) {
    const { variant, icon } = props;

    return (
        <StyledIconContainer variant={variant}>
            <FontAwesomeIcon icon={icon} />
        </StyledIconContainer>
    );
}

Icon.propTypes = {
    /** The variant of the icon. */
    variant: PropTypes.oneOf(['brand', 'success', 'warning', 'error']),
    /**
     * The icon shape.
     */
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
};

Icon.defaultProps = {
    variant: 'brand',
    icon: {},
};
