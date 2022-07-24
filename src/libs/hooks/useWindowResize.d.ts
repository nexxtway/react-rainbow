declare function useWindowResize(
    handler: (this: Window, ev: UIEvent) => void,
    isListening?: boolean,
): void;
export default useWindowResize;
