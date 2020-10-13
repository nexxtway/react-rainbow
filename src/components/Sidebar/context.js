import React from 'react';

const { Provider, Consumer } = React.createContext();

function withContext(Component) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return props => <Consumer>{context => <Component {...props} {...context} />}</Consumer>;
}

export { Provider, withContext };
