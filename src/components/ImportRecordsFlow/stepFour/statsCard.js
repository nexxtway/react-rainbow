import React from 'react';
import PropTypes from 'prop-types';
import StyledStatsCard from './styled/styledstatsCard';
import StyledStatsCardContent from './styled/statsCardContent';
import StyledStatsCardTitle from './styled/statsCardTitle';
import StyledStatsCardDescription from './styled/statsCardDescription';
import StyledIcon from './styled/icon';
import StatsCardLeftContainer from './styled/statsLeftContainer';
import StyledStatsCardDescriptionContainer from './styled/statsCardDescriptionContainer';
import StyledDownloadButton from './styled/styledDownloadButton';
import StyledDownloadIcon from './styled/styledDownloadIcon';
import StatsCount from './statsCount';
import downloadErrorsCSV from '../helpers/downloadErrorsCsv';

export default function StatsCard(props) {
    const { validatedData, errors, data } = props;

    const onClick = () => {
        downloadErrorsCSV({ errors });
    };

    return (
        <StyledStatsCard>
            <StyledIcon />
            <StyledStatsCardContent>
                <StatsCardLeftContainer>
                    <StyledStatsCardTitle>
                        Total: {data.length} records on your file
                    </StyledStatsCardTitle>
                    <StyledStatsCardDescriptionContainer>
                        <StatsCount type="success" amount={validatedData.length} />
                        <StatsCount type="error" amount={errors.length} />
                    </StyledStatsCardDescriptionContainer>
                </StatsCardLeftContainer>
            </StyledStatsCardContent>
            <StyledDownloadButton variant="base" onClick={onClick}>
                <StyledDownloadIcon />
                Download errors
            </StyledDownloadButton>
        </StyledStatsCard>
    );
}

StatsCard.propTypes = {
    validatedData: PropTypes.array,
    errors: PropTypes.array,
    data: PropTypes.array,
};

StatsCard.defaultProps = {
    validatedData: [],
    errors: [],
    data: [],
};
