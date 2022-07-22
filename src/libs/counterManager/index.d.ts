declare class CounterManager {
    constructor();
    increment(): void;
    decrement(): void;
    hasModalOpen(): boolean;
}

const counterManager = new CounterManager();
export default counterManager;
