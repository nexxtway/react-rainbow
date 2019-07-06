import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TimedToast extends Component {
    constructor(props) {
        super(props);

        this.onAnimationEnd = this.onAnimationEnd.bind(this);
        this.timer = null;
        this.animationState = null;
    }

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

    onAnimationEnd() {
        if (this.animationState === null) {
            this.animationState = 1;
            this.forceUpdate();
        } else if (this.animationState === 2) {
            this.props.onRemove();
        }
    }

    getContainerClassNames() {
        let classModifier = '';

        if (this.animationState === null) {
            classModifier = 'show';
        } else if (this.animationState === 1) {
            classModifier = 'visible';
        } else if (this.animationState === 2) {
            classModifier = 'hide';
        }

        return classnames('rainbow-notification-item-container', classModifier);
    }

    requestHide() {
        this.animationState = 2;
        this.forceUpdate();
    }

    render() {
        const { protoType } = this.props;
        const notify = React.cloneElement(protoType, {
            onRequestClose: () => {
                this.requestHide();
            },
        });

        return (
            <div className={this.getContainerClassNames()} onAnimationEnd={this.onAnimationEnd}>
                {notify}
            </div>
        );
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
