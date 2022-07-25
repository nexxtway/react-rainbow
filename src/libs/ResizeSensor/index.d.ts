declare class ResizeSensor {
    constructor(element: Element, resizeListener: () => void);
    detach(): void;
    reset(): void;
}
export default ResizeSensor;
