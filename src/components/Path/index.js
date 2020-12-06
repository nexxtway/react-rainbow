import React, { useCallback, useRef, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import isChildRegistered from '../InternalDropdown/helpers/isChildRegistered';
import insertChildOrderly from '../InternalDropdown/helpers/insertChildOrderly';
import { getChildStepsNodes } from './helpers';
import { StyledContainer, StyledStepsList } from './styled';

export default function Path(props) {
    const { currentStepName, onClick, children, id, className, style } = props;
    const [hoveredStepName, setHoveredStepName] = useState(null);
    const [stepsCount, setStepsCount] = useState(0);
    const registeredSteps = useRef([]);
    const containerRef = useRef();

    const privateRegisterStep = useCallback((stepRef, stepProps) => {
        if (isChildRegistered(stepProps.name, registeredSteps.current)) return;
        const [...nodes] = getChildStepsNodes(containerRef.current);
        const newStepsList = insertChildOrderly(
            registeredSteps.current,
            {
                ref: stepRef,
                ...stepProps,
            },
            nodes,
        );
        registeredSteps.current = newStepsList;
        setStepsCount(registeredSteps.current.length);
    }, []);

    const privateUnregisterStep = useCallback((stepRef, stepName) => {
        if (!isChildRegistered(stepName, registeredSteps.current)) return;
        registeredSteps.current = registeredSteps.current.filter(step => step.name !== stepName);
        setStepsCount(registeredSteps.current.length);
    }, []);

    const getStepIndex = useCallback(
        name => registeredSteps.current.findIndex(step => step.name === name),
        [],
    );

    const privateGetStepZIndex = useCallback(name => stepsCount - getStepIndex(name), [
        getStepIndex,
        stepsCount,
    ]);

    const privateUpdateStepProps = useCallback(stepProps => {
        if (!isChildRegistered(stepProps.name, registeredSteps.current)) return;
        const index = registeredSteps.current.findIndex(
            registeredStep => registeredStep.name === stepProps.name,
        );
        const updatedStep = registeredSteps.current[index];
        registeredSteps.current[index] = {
            ...updatedStep,
            ...stepProps,
        };
    }, []);

    const context = useMemo(() => {
        const selectedIndex = registeredSteps.current.findIndex(
            step => step.name === currentStepName,
        );
        const hoveredIndex = registeredSteps.current.findIndex(
            step => step.name === hoveredStepName,
        );

        return {
            selectedIndex,
            hoveredIndex,
            privateGetStepIndex: getStepIndex,
            privateGetStepZIndex,
            privateRegisterStep,
            privateUnregisterStep,
            privateUpdateStepProps,
            privateOnClick: onClick,
            privateUpdateHoveredStep: setHoveredStepName,
        };
    }, [
        currentStepName,
        getStepIndex,
        hoveredStepName,
        onClick,
        privateGetStepZIndex,
        privateRegisterStep,
        privateUnregisterStep,
        privateUpdateStepProps,
    ]);

    return (
        <StyledContainer id={id} className={className} style={style} ref={containerRef}>
            <StyledStepsList>
                <Provider value={context}>{children}</Provider>
            </StyledStepsList>
        </StyledContainer>
    );
}

Path.propTypes = {
    /** Specifies the current step in path. */
    currentStepName: PropTypes.string,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The content of the Path. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Path.defaultProps = {
    currentStepName: undefined,
    onClick: () => {},
    children: null,
    id: undefined,
    className: undefined,
    style: undefined,
};
