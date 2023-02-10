import React from 'react';
import PropTypes from 'prop-types';
import StyledStatsCard from './styled/styledstatsCard';
import StyledStatsCardContent from './styled/statsCardContent';
import StyledStatsCardTitle from './styled/statsCardTitle';
import StyledIcon from './styled/icon';
import StatsCardLeftContainer from './styled/statsLeftContainer';
import StyledStatsCardDescriptionContainer from './styled/statsCardDescriptionContainer';
import StyledDownloadIcon from './styled/styledDownloadIcon';
import StatsCount from './statsCount';
import downloadErrorsCSV from '../helpers/downloadErrorsCsv';
import StyledDownloadErrors from './styled/styledDownloadErrors';
import RenderIf from '../../RenderIf';

export default function StatsCard(props) {
    const { validRecords, invalidRecords, borderRadius } = props;
    const invalidCount = invalidRecords.length;
    const validCount = validRecords.length;
    const totalRecords = invalidCount + validCount;
    const onClick = () => {
        downloadErrorsCSV({ invalidRecords });
    };

    return (
        <StyledStatsCard borderRadius={borderRadius}>
            <StyledIcon />
            <StyledStatsCardContent>
                <StatsCardLeftContainer>
                    <StyledStatsCardTitle>
                        Total: {totalRecords} records on your file
                    </StyledStatsCardTitle>
                    <StyledStatsCardDescriptionContainer>
                        <StatsCount type="success" amount={validCount} />
                        <StatsCount type="error" amount={invalidCount} />
                    </StyledStatsCardDescriptionContainer>
                </StatsCardLeftContainer>
            </StyledStatsCardContent>
            <RenderIf isTrue={invalidCount > 0}>
                <StyledDownloadErrors onClick={onClick}>
                    <StyledDownloadIcon />
                    Download errors
                </StyledDownloadErrors>
            </RenderIf>
        </StyledStatsCard>
    );
}

StatsCard.propTypes = {
    validRecords: PropTypes.array,
    invalidRecords: PropTypes.array,
    borderRadius: PropTypes.oneOf(['rounded', 'square', 'semi-rounded', 'semi-square']),
};

StatsCard.defaultProps = {
    validRecords: [],
    invalidRecords: [],
    borderRadius: 'rounded',
};
