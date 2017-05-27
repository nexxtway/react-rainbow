import React from 'react';

export default class Tab extends React.Component {}

Tab.PropTypes = {
    label: React.PropTypes.object.isRequired,
    title: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    component: React.PropTypes.instanceOf(React.Component)
};