import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TimedToast extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        const { timeout } = this.props;
        if (timeout > 0) {
            this.timer = setTimeout(() => {
                this.requestHide();
            }, timeout);
        }
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    requestHide() {
        this.props.onRemove();
    }

    render() {
        const { protoType } = this.props;
        const notify = React.cloneElement(protoType, {
            onRequestClose: () => {
                this.requestHide();
            },
        });

        return <div className="rainbow-notification-item-container">{notify}</div>;
    }
}

TimedToast.propTypes = {
    protoType: PropTypes.node,
    onRemove: PropTypes.func,
    timeout: PropTypes.number,
};

TimedToast.defaultProps = {
    protoType: null,
    onRemove: () => {},
    timeout: 5000,
};
