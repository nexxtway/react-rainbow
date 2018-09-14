import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from '../../libs/utils';
import { Provider } from './context';
import RenderIf from '../RenderIf';
import './styles.css';

/**
 * Represents a section within a VerticalNavigation.
 */
class VerticalSection extends Component {
    constructor(props) {
        super(props);
        this.entityHeaderId = uniqueId('entity-header');
    }

    getClassNames() {
        const { className } = this.props;
        return classnames('rainbow-vertical-section', className);
    }

    render() {
        const {
            label,
            style,
            children,
        } = this.props;

        return (
            <div className={this.getClassNames()} style={style}>
                <RenderIf isTrue={!!label}>
                    <h2 id={this.entityHeaderId} className="rainbow-vertical-section_title">
                        {label}
                    </h2>
                </RenderIf>
                <Provider value={this.entityHeaderId}>
                    <ul>
                        {children}
                    </ul>
                </Provider>
            </div>
        );
    }
}

VerticalSection.propTypes = {
    /** The heading text for this section. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /**
    * This prop that should not be visible in the documentation.
    * @ignore
    */
    children: PropTypes.node,
};

VerticalSection.defaultProps = {
    label: null,
    className: undefined,
    style: undefined,
    children: null,
};

export default VerticalSection;
