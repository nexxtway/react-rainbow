/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import Header from './header';
import RenderIf from '../RenderIf';
import CloseIcon from './closeIcon';
import ButtonIcon from '../ButtonIcon';
import { uniqueId } from './../../libs/utils';
import { ESCAPE_KEY } from './../../libs/constants';
import './styles.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
        this.modalRef = React.createRef();
        this.modalHeadingId = uniqueId('modal-heading');
        this.modalContentId = uniqueId('modal-content');
        this.handleKeyEscapePressed = this.handleKeyEscapePressed.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    getBackDropClassNames() {
        const { isOpen } = this.props;
        return classnames('rainbow-modal_backdrop', { 'rainbow-modal_backdrop--open': isOpen });
    }

    getFocus() {
        const { isOpen } = this.props;
        if (isOpen) {
            this.buttonRef.current.focus();
        }
    }

    getContainerClassNames() {
        const { className, isOpen } = this.props;
        this.getFocus();
        return classnames(
            'rainbow-modal',
            {
                'rainbow-modal--fade-in': isOpen,
                'rainbow-modal-slide-down': !isOpen,
            },
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

    handleKeyEscapePressed(event) {
        const { isOpen, onRequestClose } = this.props;
        if (isOpen && event.keyCode === ESCAPE_KEY) {
            return onRequestClose();
        }
        return null;
    }

    handleClick(event) {
        const { isOpen, onRequestClose } = this.props;
        if (isOpen) {
            const isClickOutsideModal = !this.modalRef.current.contains(event.target);
            if (isClickOutsideModal) {
                return onRequestClose();
            }
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
                <div
                    onClick={this.handleClick}
                    className={this.getBackDropClassNames()}
                    onKeyDown={this.handleKeyEscapePressed}>
                    <section
                        role="dialog"
                        tabIndex="-1"
                        aria-labelledby={this.modalHeadingId}
                        aria-modal="true"
                        aria-hidden={!isOpen}
                        aria-describedby={this.modalContentId}
                        className={this.getContainerClassNames()}
                        style={style}
                        ref={this.modalRef}>
                        <div className="rainbow-modal_container">
                            <ButtonIcon
                                className="rainbow-modal_close"
                                icon={<CloseIcon />}
                                title="Close"
                                onClick={onRequestClose}
                                ref={this.buttonRef} />
                            <Header
                                id={this.modalHeadingId}
                                title={title} />
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
                </div>,
                document.body,
            )
        );
    }
}

Modal.propTypes = {
    /** Controls whether the Modal is opened or not */
    isOpen: PropTypes.bool,
    /** The title can include text or another component,
     * and is displayed in the header of the component. */
    title: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The size of the modal. Include medium and large. */
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
    /** The footer of the component. */
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
