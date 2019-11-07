import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledLabel from './styled/label';
import StyledNotification from './styled/notification';

export default function ItemContent({ label, notification }) {
    return (
        <Fragment>
            <StyledLabel>{label}</StyledLabel>
            <RenderIf isTrue={!!notification}>
                <StyledNotification>{notification}</StyledNotification>
            </RenderIf>
        </Fragment>
    );
}

ItemContent.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    notification: PropTypes.node,
};

ItemContent.defaultProps = {
    label: '',
    notification: undefined,
};
