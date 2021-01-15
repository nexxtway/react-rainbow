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

/**
 * The TimelineMarker displays one event of an item's timeline. It's generally used to compose the ActivityTimeline component.
 * @category Layout
 */
export default function TimelineMarker(props) {
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
        isVariantAccordion,
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
        event => privateOnToggleMarker(event, resolveActiveNames()),
        [privateOnToggleMarker, resolveActiveNames],
    );

    const isExpanded = useMemo(() => {
        if (isVariantAccordion) {
            if (multiple && Array.isArray(activeNames)) {
                return isInArray(activeNames, currentName);
            }
            return activeNames === currentName;
        }
        return true;
    }, [isVariantAccordion, currentName, activeNames, multiple]);

    const shouldRenderChildren = useMemo(() => isExpanded && !isLoading, [isLoading, isExpanded]);

    return (
        <StyledLi data-id="timeline-marker-li" className={className} style={style}>
            <StyledColumnLeft>
                <StyledIconContainer>
                    <RenderIf isTrue={isVariantAccordion}>
                        <ExpandCollapseButton
                            isExpanded={isExpanded}
                            isLoading={isLoading}
                            onClick={handleToggleMarker}
                        />
                    </RenderIf>
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

TimelineMarker.propTypes = {
    /** The text to be displayed as the TimelineMarker's label. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The text to be displayed as the TimelineMarker's description. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The text with the formatted datetime of the event. */
    datetime: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The icon to show at the left of the TimelineMarker.
     * If not passed by default a calendar icon will be showed.  */
    icon: PropTypes.node,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The name is used to determine which TimelineMarker was clicked.
     * If `name` is not passed it will be generated. */
    name: PropTypes.string,
    /** Set to true to show a loading symbol. Defaults to false */
    isLoading: PropTypes.bool,
};

TimelineMarker.defaultProps = {
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
