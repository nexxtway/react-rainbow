import React, { useRef, useContext, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { useUniqueIdentifier } from '../../libs/hooks';
import { ActivityTimelineContext } from '../ActivityTimeline/context';
import CalendarIcon from './calendarIcon';
import StyledLi from './styled/li';
import StyledColumnLeft from './styled/columnLeft';
import StyledIconContainer from './styled/iconContainer';
import StyledContentContainer from './styled/contentContainer';
import StyledHeader from './styled/header';
import StyledLabel from './styled/label';
import StyledDatetime from './styled/datetime';
import StyledDescription from './styled/description';
import StyledBody from './styled/body';
import ExpandCollapseButton from './expandCollapseButton';
import removeItemFromArray from '../AccordionSection/removeItemFromArray';
import isInArray from '../AccordionSection/isInArray';

export default function AccordionTimelineMarker(props) {
    const {
        icon,
        name,
        isLoading,
        label,
        description,
        datetime,
        children,
        className,
        style,
    } = props;
    const {
        activeNames,
        multiple,
        privateRegisterMarker,
        privateUnregisterMarker,
        privateOnToggleMarker,
    } = useContext(ActivityTimelineContext);
    const generatedName = useUniqueIdentifier('timeline-marker');
    const currentName = useMemo(() => name || generatedName, [generatedName, name]);
    const stepRef = useRef();

    useEffect(() => {
        privateRegisterMarker(stepRef.current, { currentName });

        return () => {
            privateUnregisterMarker(stepRef, currentName);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const resolveActiveNamesWhenMultiple = useCallback(() => {
        if (activeNames === undefined) {
            return [currentName];
        }
        if (isInArray(activeNames, currentName)) {
            return removeItemFromArray(activeNames, currentName);
        }
        return activeNames.concat([currentName]);
    }, [currentName, activeNames]);

    const resolveActiveNames = useCallback(() => {
        if (multiple) {
            return resolveActiveNamesWhenMultiple();
        }
        if (currentName === activeNames) {
            return '';
        }
        return currentName;
    }, [currentName, multiple, activeNames, resolveActiveNamesWhenMultiple]);

    const handleToggleMarker = useCallback(
        () => privateOnToggleMarker({ name: resolveActiveNames() }),
        [privateOnToggleMarker, resolveActiveNames],
    );

    const isExpanded = useMemo(() => {
        if (multiple && Array.isArray(activeNames)) {
            return isInArray(activeNames, currentName);
        }
        return activeNames === currentName;
    }, [currentName, activeNames, multiple]);

    const shouldRenderChildren = useMemo(() => isExpanded && !isLoading, [isLoading, isExpanded]);

    return (
        <StyledLi data-id="timeline-marker-li" className={className} style={style}>
            <StyledColumnLeft>
                <StyledIconContainer>
                    <ExpandCollapseButton
                        isExpanded={isExpanded}
                        isLoading={isLoading}
                        onClick={handleToggleMarker}
                    />
                    {icon}
                </StyledIconContainer>
            </StyledColumnLeft>
            <StyledContentContainer>
                <div>
                    <StyledHeader>
                        <StyledLabel>{label}</StyledLabel>
                        <StyledDatetime>{datetime}</StyledDatetime>
                    </StyledHeader>
                    <StyledDescription>{description}</StyledDescription>
                </div>
                <RenderIf isTrue={shouldRenderChildren}>
                    <StyledBody>{children}</StyledBody>
                </RenderIf>
            </StyledContentContainer>
        </StyledLi>
    );
}

AccordionTimelineMarker.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    datetime: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    icon: PropTypes.node,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    className: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    isLoading: PropTypes.bool,
};

AccordionTimelineMarker.defaultProps = {
    label: null,
    description: null,
    datetime: null,
    icon: <CalendarIcon />,
    children: null,
    className: undefined,
    style: undefined,
    name: undefined,
    isLoading: false,
};
