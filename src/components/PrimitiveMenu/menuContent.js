/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
import React, { useCallback, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import { insertChildOrderly, getChildMenuItemNodes } from './utils';
import useArrowKeyNav from './hooks/useArrowKeyNav';
import Spinner from './../Spinner';
import { StyledContent } from './styled';

export default function MenuContent(props) {
    const { children, isLoading, ariaLabel, onRequestClose } = props;
    const childrenRefs = useRef([]);
    const containerRef = useRef();
    const [childCount, setChildCount] = useState(0);
    const {
        focusedChildIndex,
        handleKeyPress: keyDownHandler,
        focusMatchedItem,
        clearFocusedChild,
        focusChild,
    } = useArrowKeyNav({
        childrenRefs: childrenRefs.current,
        isLoading,
    });

    const privateOnClose = useCallback(() => {
        clearFocusedChild();
        onRequestClose();
    }, [clearFocusedChild, onRequestClose]);

    const privateOnHover = useCallback((_, childRef) => focusMatchedItem(childRef), [
        focusMatchedItem,
    ]);

    const privateRegisterChild = useCallback(childRef => {
        if (childRef) {
            const [...nodes] = getChildMenuItemNodes(containerRef.current);
            childrenRefs.current = insertChildOrderly(childrenRefs.current, childRef, nodes);
            setChildCount(childrenRefs.current.length);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const privateUnregisterChild = useCallback(childRef => {
        if (childRef) {
            childrenRefs.current = childrenRefs.current.filter(child => child !== childRef);
            setChildCount(childrenRefs.current.length);
        }
    }, []);

    useEffect(() => {
        if (!isLoading && childCount > 0) {
            focusChild(focusedChildIndex || 0);
        }
    }, [isLoading, childCount, focusChild, focusedChildIndex]);

    if (isLoading) {
        return <Spinner assistiveText="loading menu" isVisible size="small" />;
    }

    return (
        <StyledContent
            ref={containerRef}
            role="menu"
            aria-label={ariaLabel}
            onKeyDown={keyDownHandler}
        >
            <Provider
                value={{
                    privateOnClose,
                    privateOnHover,
                    privateRegisterChild,
                    privateUnregisterChild,
                }}
            >
                {children}
            </Provider>
        </StyledContent>
    );
}

MenuContent.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

MenuContent.defaultProps = {
    className: '',
    style: {},
};
