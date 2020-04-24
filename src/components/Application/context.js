import React from 'react';
import getBrowserLocale from '../../libs/utils/getBrowserLocale';

const defaultContext = {
    locale: getBrowserLocale(),
};
export const AppContext = React.createContext(defaultContext);
export const { Provider, Consumer } = AppContext;
