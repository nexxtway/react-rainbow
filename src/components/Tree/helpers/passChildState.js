import getParent from '../helpers/getParent';
import getBrothersState from '../helpers/getBrothersState';

const stateMap = { all: true, some: 'indeterminate', none: false };

export default function passChildState(tree, childPath) {
    const parent = getParent(tree, childPath);
    const brothersState = getBrothersState(parent);
    parent.isChecked = stateMap[brothersState];

    if (childPath.length === 2) {
        return parent;
    }

    return passChildState(tree, childPath.slice(0, childPath.length - 1));
}
