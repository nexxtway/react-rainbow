import React, { useRef, useMemo, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PathContext } from '../Path/context';
import { StyledStepItem } from './styled';
import { getActiveStepIndex, isStepSelected } from './helpers';
import RenderIf from '../RenderIf';
import CheckMark from './icons/checkMark';
import Exclamation from './icons/exclamation';

export default function PathStep(props) {
    const { name, label, hasError, className, style } = props;
    const {
        selectedIndex,
        hoveredIndex,
        someStepHasError,
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
            hasError,
        });
    }, [name, hasError, privateUpdateStepProps]);

    const index = privateGetStepIndex(name);

    const activeStepIndex = useMemo(
        () =>
            getActiveStepIndex({
                hoveredIndex,
                selectedIndex,
                someStepHasError,
            }),
        [hoveredIndex, selectedIndex, someStepHasError],
    );

    const isChecked = index !== hoveredIndex && activeStepIndex > index;
    const isSelected = useMemo(
        () =>
            isStepSelected({
                index,
                hoveredIndex,
                selectedIndex,
                someStepHasError,
            }),
        [hoveredIndex, index, selectedIndex, someStepHasError],
    );

    const renderErrorIcon = hasError && index !== hoveredIndex;

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
            <RenderIf isTrue={isChecked}>
                <CheckMark />
            </RenderIf>
            <RenderIf isTrue={renderErrorIcon}>
                <Exclamation />
            </RenderIf>
        </StyledStepItem>
    );
}

PathStep.propTypes = {
    /** The name of the PathStep. */
    name: PropTypes.string,
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
    name: undefined,
    label: undefined,
    hasError: false,
    className: undefined,
    style: undefined,
};
