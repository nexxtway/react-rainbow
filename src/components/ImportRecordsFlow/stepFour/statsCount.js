import React from 'react';
import PropTypes from 'prop-types';
import StyledStatsCardDescription from './styled/statsCardDescription';
import { RenderIf } from 'react-rainbow-components';
import XCircle from '../icons/xCircle';
import CheckCircle from '../icons/checkCircle';

export default function StatsCount(props) {
    const { type, amount } = props;
    return (
        <>
            <RenderIf isTrue={type === 'success'}>
                <CheckCircle />
            </RenderIf>
            <RenderIf isTrue={type === 'error'}>
                <XCircle />
            </RenderIf>
            <StyledStatsCardDescription>
                {amount} {type === 'success' ? 'Successful' : 'Errors'}
            </StyledStatsCardDescription>
        </>
    );
}

StatsCount.propTypes = {
    type: PropTypes.oneOf(['success', 'error']),
    amount: PropTypes.number,
};

StatsCount.defaultProps = {
    type: 'success',
    amount: 0,
};
