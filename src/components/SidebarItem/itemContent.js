import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledIcon from './styled/icon';
import StyledLabel from './styled/label';

export default function ItemContent(props) {
    const { label, icon, isSelected } = props;
    return (
        <Fragment>
            <StyledIcon>{icon}</StyledIcon>
            <RenderIf isTrue={!!label}>
                <StyledLabel isSelected={isSelected}>{label}</StyledLabel>
            </RenderIf>
        </Fragment>
    );
}

ItemContent.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    icon: PropTypes.node,
    isSelected: PropTypes.bool.isRequired,
};

ItemContent.defaultProps = {
    label: undefined,
    icon: null,
};
