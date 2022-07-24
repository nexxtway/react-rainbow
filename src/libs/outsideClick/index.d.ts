declare class OutsideClick {
    constructor();
    startListening(
        containerRef?: Element,
        callback?: (this: OutsideClick, event: MouseEvent) => void,
    ): void;
}

export default OutsideClick;
