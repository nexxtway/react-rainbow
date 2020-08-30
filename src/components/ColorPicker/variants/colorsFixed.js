import React, { useRef, useImperativeHandle } from 'react';
import { DefaultColors } from '../commons';

const ColorsFixed = React.forwardRef((_props, ref) => {
    const colorsRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            colorsRef.current.focus();
        },
        click: () => {
            colorsRef.current.click();
        },
        blur: () => {
            colorsRef.current.blur();
        },
    }));

    return <DefaultColors ref={colorsRef} />;
});

export default ColorsFixed;
