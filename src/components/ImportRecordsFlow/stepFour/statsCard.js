import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import StyledStatsCard from './styled/styledstatsCard';
import StyledStatsCardContent from './styled/statsCardContent';
import StyledStatsCardTitle from './styled/statsCardTitle';
import StyledIcon from './styled/icon';
import StatsCardLeftContainer from './styled/statsLeftContainer';
import StyledStatsCardDescriptionContainer from './styled/statsCardDescriptionContainer';
import StatsCount from './statsCount';
import downloadErrorsCSV from '../helpers/downloadErrorsCsv';
import RenderIf from '../../RenderIf';
import InternalTooltip from '../../InternalTooltip';
import ButtonIcon from '../../ButtonIcon';
import useDefaultTooltipConnector from '../../InternalTooltip/hooks/useDefaultTooltipConnector';
import DownloadCsv from '../icons/downloadCsv';
import StyledTooltipText from './styled/styledTooltipText';
import getPluralization from '../helpers/getPluralization';

export default function StatsCard(props) {
    const { validRecords, invalidRecords, borderRadius } = props;
    const invalidCount = invalidRecords.length;
    const validCount = validRecords.length;
    const totalRecords = invalidCount + validCount;
    const titleText = `Total: ${totalRecords} record${getPluralization(totalRecords)} on your file`;
    const onClick = () => {
        downloadErrorsCSV({ invalidRecords });
    };
    const triggerRef = useRef();
    const tooltipRef = useRef();

    const { onFocus, onBlur, onMouseEnter, onMouseLeave, isVisible } = useDefaultTooltipConnector({
        tooltipRef,
        triggerRef: () => triggerRef.current.htmlElementRef,
    });

    return (
        <StyledStatsCard borderRadius={borderRadius}>
            <StyledIcon />
            <StyledStatsCardContent>
                <StatsCardLeftContainer>
                    <StyledStatsCardTitle>{titleText}</StyledStatsCardTitle>
                    <StyledStatsCardDescriptionContainer>
                        <StatsCount type="success" amount={validCount} />
                        <StatsCount type="error" amount={invalidCount} />
                    </StyledStatsCardDescriptionContainer>
                </StatsCardLeftContainer>
            </StyledStatsCardContent>
            <RenderIf isTrue={invalidCount > 0}>
                <ButtonIcon
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                    ref={triggerRef}
                    variant="base"
                    icon={<DownloadCsv />}
                    borderRadius={borderRadius}
                />
                <InternalTooltip
                    triggerElementRef={() => triggerRef.current.htmlElementRef}
                    isVisible={isVisible}
                    preferredPosition="top"
                    ref={tooltipRef}
                >
                    <StyledTooltipText>Download a CSV with the errors</StyledTooltipText>
                </InternalTooltip>
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
