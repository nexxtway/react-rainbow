import { useState, useCallback, useRef } from 'react';
import { useOutsideClick, useScrollingIntent } from '@rainbow-modules/hooks';

function resolveElement(ref) {
    if (typeof ref === 'function') {
        const ret = ref();
        return ret && ret.current;
    }
    return ref && ref.current;
}

export default function useDefaultTooltipConnector({ tooltipRef, triggerRef }) {
    const [isVisible, setVisible] = useState(false);
    const isFocused = useRef(false);

    useScrollingIntent({
        callback: () => setVisible(false),
        isListening: isVisible,
        triggerElementRef: triggerRef,
    });

    useOutsideClick(
        tooltipRef,
        event => {
            if (!resolveElement(triggerRef).contains(event.target)) {
                setVisible(false);
            }
        },
        isVisible,
    );

    const onFocus = useCallback(() => {
        isFocused.current = true;
        setVisible(true);
    }, []);

    const onBlur = useCallback(() => {
        isFocused.current = false;
    }, []);

    const onMouseEnter = useCallback(() => {
        setVisible(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        if (!isFocused.current) {
            setVisible(false);
        }
    }, []);

    return {
        onFocus,
        onBlur,
        onMouseEnter,
        onMouseLeave,
        isVisible,
    };
}
