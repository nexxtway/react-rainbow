import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { StyledStrenghtBar, StyledStateBar, StyledStateLabel } from './styled';

export default function StrengthBar(props) {
    const { passwordState, passwordStateLabels } = props;

    const label = useMemo(
        () => (passwordStateLabels ? passwordStateLabels[passwordState] : undefined),
        [passwordState, passwordStateLabels],
    );

    return (
        <StyledStrenghtBar>
            <StyledStateBar passwordState={passwordState} />
            <RenderIf isTrue={!!label}>
                <StyledStateLabel passwordState={passwordState}>{label}</StyledStateLabel>
            </RenderIf>
        </StyledStrenghtBar>
    );
}

StrengthBar.propTypes = {
    /**
     * The state of the password strenght
     */
    passwordState: PropTypes.oneOf(['weak', 'average', 'strong']),
    /**
     * The label to show at the right of the bar
     */
    passwordStateLabels: PropTypes.shape({
        weak: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        average: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        strong: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }),
};

StrengthBar.defaultProps = {
    passwordState: undefined,
    passwordStateLabels: undefined,
};
