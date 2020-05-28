import React, { forwardRef } from 'react';

const withForwardedRef = Comp => {
    const handle = (props, ref) => <Comp {...props} forwardedRef={ref} />;

    const name = Comp.displayName || Comp.name;
    handle.displayName = `withForwardedRef(${name})`;

    return forwardRef(handle);
};

export default withForwardedRef;
