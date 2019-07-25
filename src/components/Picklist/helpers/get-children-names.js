import React from 'react';

export default function getChildrenNames(children) {
    return React.Children.map(children, child => {
        if (
            child &&
            child.type.displayName === 'PicklistOption' &&
            typeof child.props.name === 'string'
        ) {
            return child.props.name;
        }
        return null;
    });
}
