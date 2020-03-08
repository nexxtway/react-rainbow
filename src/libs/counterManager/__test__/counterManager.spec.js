import CounterManager from '../';

describe('CounterManager', () => {
    it('should set counter to 3', () => {
        CounterManager.increment();
        CounterManager.increment();
        CounterManager.increment();
        expect(CounterManager.counter).toBe(3);
        expect(CounterManager.hasModalsOpen()).toBe(true);
    });
    it('should set counter to 1', () => {
        CounterManager.decrement();
        CounterManager.decrement();
        expect(CounterManager.counter).toBe(1);
        expect(CounterManager.hasModalsOpen()).toBe(true);
    });
    it('should set counter to 0', () => {
        CounterManager.decrement();
        expect(CounterManager.counter).toBe(0);
        expect(CounterManager.hasModalsOpen()).toBe(false);
    });
});
