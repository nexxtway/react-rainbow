declare class ResizeSensor {
    constructor(
        element: Element,
        resizeListener: (size: { width: number; height: number }) => void,
    );
    detach(): void;
    reset(): void;
}
export default ResizeSensor;
