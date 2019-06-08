import React, { Component } from 'react';

export default class ActivityTimeline extends Component {
    render() {
        const { children } = this.props;
        return <ul>{children}</ul>;
    }
}
