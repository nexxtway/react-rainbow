import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Provider } from './context';
import './styles.css';

export default class ProgressIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepChildren: [],
        };
        this.registerStep = this.registerStep.bind(this);
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-progress-indicator', className);
    }

    registerStep(name) {
        const { stepChildren } = this.state;
        const newChildrenRefs = stepChildren.concat([name]);
        this.setState({ stepChildren: newChildrenRefs });
    }

    render() {
        const {
            style,
            children,
            currentStepName,
            onClick,
        } = this.props;
        const { stepChildren } = this.state;
        const context = {
            currentStepName,
            stepChildren,
            privateRegisterStep: this.registerStep,
            privateOnClick: onClick,
        };
        return (
            <div className={this.getContainerClassNames()} style={style}>
                <ol className="rainbow-progress-indicator_list">
                    <Provider value={context}>
                        { children }
                    </Provider>
                </ol>
                <div className="rainbow-progress-indicator_bar" />
            </div>
        );
    }
}

ProgressIndicator.propTypes = {
    /** Specifies which step is active */
    currentStepName: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
};

ProgressIndicator.defaultProps = {
    currentStepName: '',
    className: undefined,
    style: undefined,
    onClick: () => {},
    children: null,
};
