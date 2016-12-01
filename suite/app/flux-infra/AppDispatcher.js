'use strict';

import {Dispatcher} from 'flux';

const AppDispatcher = new Dispatcher();
export default AppDispatcher;

// So we can conveniently do, `import {dispatch}`
export const dispatch = AppDispatcher.dispatch.bind(AppDispatcher);