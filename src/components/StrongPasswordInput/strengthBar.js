import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { StyledStrenghtBar, StyledStateBar, StyledStateLabel } from './styled';

export default function StrengthBar(props) {
    const { passwordState, passwordStateLabel } = props;
    return (
        <StyledStrenghtBar>
            <StyledStateBar passwordState={passwordState} />
            <RenderIf isTrue={!!passwordStateLabel}>
                <StyledStateLabel passwordState={passwordState}>
                    {passwordStateLabel}
                </StyledStateLabel>
            </RenderIf>
        </StyledStrenghtBar>
    );
}

StrengthBar.propTypes = {
    /**
     * The state of the password strenght
     */
    passwordState: PropTypes.oneOf(['poor', 'average', 'strong']),
    /**
     * The label to show at the right of the bar
     */
    passwordStateLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

StrengthBar.defaultProps = {
    passwordState: undefined,
    passwordStateLabel: undefined,
};
