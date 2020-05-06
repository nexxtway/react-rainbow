import { useState } from 'react';

export default function useToggle(initilal) {
    const [value, setValue] = useState(initilal);
    const toggle = newValue =>
        newValue && typeof newValue === 'boolean' ? setValue(newValue) : setValue(!value);

    return [value, toggle];
}
