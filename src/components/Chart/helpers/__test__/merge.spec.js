import merge from '../merge';

describe('merge', () => {
    it('should merge the objects recursively', () => {
        const obj1 = {
            key1: 'value1',
            key2: {
                subKey1: true,
            },
        };
        const obj2 = {
            key2: {
                subKey2: 25,
            },
            key3: 'value3',
        };
        const resultObj = {
            key1: 'value1',
            key2: {
                subKey1: true,
                subKey2: 25,
            },
            key3: 'value3',
        };
        expect(merge(obj1, obj2)).toEqual(resultObj);
    });

    it('should overwrite existing keys', () => {
        const obj1 = {
            key: 'value',
        };
        const obj2 = {
            key: true,
        };
        expect(merge(obj1, obj2)).toEqual(obj2);
    });
});
