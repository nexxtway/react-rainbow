interface Params {
    tooltipRef: React.MutableRefObject<undefined>;
    triggerRef: () => React.MutableRefObject<undefined>;
}

interface ReturnType {
    onFocus: () => void;
    onBlur: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    isVisible: boolean;
}

declare function useDefaultTooltipConnector({ tooltipRef, triggerRef }: Params): ReturnType;
export default useDefaultTooltipConnector;
