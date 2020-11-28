import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import CheckMark from './icons/checkMark';
import Exclamation from './icons/exclamation';
import { StyledContainer, StyledStepsList, StyledStepItem } from './styled';
import { isStepSelected, getActiveStepIndex } from './helpers';

export default function Path(props) {
    const { currentStepName, onClick, children, id, className, style } = props;
    const [hoveredStepName, setHoveredStepName] = useState(null);

    const steps = useMemo(() => {
        const selectedIndex = children.findIndex(child => child.props.name === currentStepName);
        const hoveredIndex = children.findIndex(child => child.props.name === hoveredStepName);
        const someStepHasError = children.some(child => child.props.hasError);

        return React.Children.map(children, (child, index) => {
            const { name, label, hasError } = child.props;
            const zIndex = children.length - index;
            const activeStepIndex = getActiveStepIndex({
                hoveredIndex,
                selectedIndex,
                someStepHasError,
            });
            const isChecked = index !== hoveredIndex && activeStepIndex > index;
            const isSelected = isStepSelected({
                index,
                hoveredIndex,
                selectedIndex,
                someStepHasError,
            });

            const renderCheckIcon = isChecked && index !== hoveredIndex;
            const renderErrorIcon = hasError && index !== hoveredIndex;

            return (
                <StyledStepItem
                    index={zIndex}
                    isSelected={isSelected}
                    hasError={hasError}
                    isChecked={isChecked}
                    key={name}
                    onMouseEnter={() => setHoveredStepName(name)}
                    onMouseLeave={() => setHoveredStepName(null)}
                    onClick={() => onClick(name)}
                >
                    {label}
                    <RenderIf isTrue={renderCheckIcon}>
                        <CheckMark />
                    </RenderIf>
                    <RenderIf isTrue={renderErrorIcon}>
                        <Exclamation />
                    </RenderIf>
                </StyledStepItem>
            );
        });
    }, [children, currentStepName, hoveredStepName, onClick]);

    return (
        <StyledContainer id={id} className={className} style={style}>
            <StyledStepsList>{steps}</StyledStepsList>
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
