import React, { useRef, useMemo, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { PathContext } from '../Path/context';
import { getActiveStepIndex, isStepSelected } from './helpers';
import { StyledStepItem } from './styled';
import CheckMark from './icons/checkMark';
import Exclamation from './icons/exclamation';

/**
 * PathStep represents a task within a path.
 */
export default function PathStep(props) {
    const { name, label, hasError, className, style } = props;
    const {
        selectedIndex,
        hoveredIndex,
        privateGetStepIndex,
        privateGetStepZIndex,
        privateRegisterStep,
        privateUnregisterStep,
        privateUpdateStepProps,
        privateUpdateHoveredStep,
        privateOnClick,
    } = useContext(PathContext);
    const stepRef = useRef();

    useEffect(() => {
        privateRegisterStep(stepRef.current, { name, label, hasError });

        return () => {
            privateUnregisterStep(stepRef, name);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        privateUpdateStepProps({
            name,
            label,
            hasError,
        });
    }, [name, label, hasError, privateUpdateStepProps]);

    const index = privateGetStepIndex(name);

    const activeStepIndex = useMemo(
        () =>
            getActiveStepIndex({
                hoveredIndex,
                selectedIndex,
            }),
        [hoveredIndex, selectedIndex],
    );

    const isChecked = activeStepIndex > index;
    const isSelected = useMemo(
        () =>
            isStepSelected({
                index,
                hoveredIndex,
                selectedIndex,
            }),
        [hoveredIndex, index, selectedIndex],
    );

    const renderCheckIcon = !hasError && (isChecked || isSelected || activeStepIndex === index);

    return (
        <StyledStepItem
            ref={stepRef}
            role="option"
            className={className}
            style={style}
            isSelected={isSelected}
            hasError={hasError}
            isChecked={isChecked}
            zIndex={privateGetStepZIndex(name)}
            onClick={() => privateOnClick(name)}
            onMouseEnter={() => privateUpdateHoveredStep(name)}
            onMouseLeave={() => privateUpdateHoveredStep(null)}
        >
            {label}
            <RenderIf isTrue={renderCheckIcon}>
                <CheckMark />
            </RenderIf>
            <RenderIf isTrue={hasError}>
                <Exclamation />
            </RenderIf>
        </StyledStepItem>
    );
}

PathStep.propTypes = {
    /** The name of the PathStep. */
    name: PropTypes.string.isRequired,
    /** The label of the PathStep. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Boolean indicating whether the PathStep has error. */
    hasError: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

PathStep.defaultProps = {
    label: undefined,
    hasError: false,
    className: undefined,
    style: undefined,
};
