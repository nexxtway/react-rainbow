import React, { Component } from 'react';

/**
 * The ActivityTimeline displays each of the user’s upcoming, current, and past activities.
 * @category Layout
 */
export default class ActivityTimeline extends Component {
    render() {
        const { children } = this.props;
        return <ul>{children}</ul>;
    }
}
