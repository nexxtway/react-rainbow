/* eslint-disable import/no-dynamic-require */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import StyledFlagIcon from './styled/flagIcon';

const FlagIcon = props => {
    const { isoCode } = props;
    return <StyledFlagIcon src={require(`./flags/${isoCode}.svg`)} alt={isoCode} />;
};

FlagIcon.propTypes = {
    isoCode: PropTypes.string,
};

FlagIcon.defaultProps = {
    isoCode: undefined,
};

export default FlagIcon;
