import React from 'react';

const { Provider, Consumer } = React.createContext();

function withContext(Component) {
    return props => <Consumer>{context => <Component {...props} {...context} />}</Consumer>;
}

export { Provider, withContext };
