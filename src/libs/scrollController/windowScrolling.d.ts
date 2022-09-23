declare class WindowScrolling {
    constructor();
    startListening(callback: (event: UIEvent) => void): void;
    stopListening(): void;
}
export default WindowScrolling;
