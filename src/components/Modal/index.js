import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import Header from './header';
import RenderIf from '../RenderIf';
import { uniqueId } from './../../libs/utils';
import './styles.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.modalHeadingId = uniqueId('modal-heading');
        this.modalContentId = uniqueId('modal-content');
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames(
            'rainbow-modal',
            'rainbow-modal--fade-in',
            this.getSizeClassNames(),
            className);
    }

    getSizeClassNames() {
        const { size } = this.props;
        if (size) {
            return `rainbow-modal--${size}`;
        }
        return null;
    }

    render() {
        const {
            title,
            style,
            children,
            footer,
            isOpen,
            onRequestClose,
        } = this.props;
        return (
            createPortal(
                <RenderIf isTrue={isOpen}>
                    <div className="rainbow-backdrop rainbow-modal--fade-in">
                        <section
                            role="dialog"
                            tabIndex="-1"
                            aria-labelledby={this.modalHeadingId}
                            aria-modal="true"
                            aria-hidden={!isOpen}
                            aria-describedby={this.modalContentId}
                            className={this.getContainerClassNames()}
                            style={style}>
                            <div className="rainbow-modal_container">
                                <Header
                                    id={this.modalHeadingId}
                                    title={title}
                                    onClick={onRequestClose} />
                                <div className="rainbow-modal_content rainbow-p-around_medium" id={this.modalContentId}>
                                    {children}
                                </div>
                                <RenderIf isTrue={!!footer}>
                                    <footer className="rainbow-modal_footer">
                                        {footer}
                                    </footer>
                                </RenderIf>
                            </div>
                        </section>
                    </div>
                </RenderIf>,
                document.body,
            )
        );
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    /** The title . */
    title: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The size of the modal. Include medium and large. This value defaults to medium. */
    size: PropTypes.oneOf([
        'medium',
        'large',
    ]),
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    footer: PropTypes.node,
    /** The action triggered when the close button is clicked. */
    onRequestClose: PropTypes.func,
};

Modal.defaultProps = {
    isOpen: false,
    title: '',
    size: undefined,
    children: null,
    className: undefined,
    style: undefined,
    footer: null,
    onRequestClose: () => {},
};
