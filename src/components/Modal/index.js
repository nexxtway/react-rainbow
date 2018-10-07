/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import RenderIf from './../RenderIf';
import ButtonIcon from './../ButtonIcon';
import { uniqueId } from './../../libs/utils';
import { ESCAPE_KEY, TAB_KEY } from './../../libs/constants';
import Header from './header';
import CloseIcon from './closeIcon';
import manageTab from './manage-tab';
import './styles.css';

/**
* Modals are used to display content in a layer above the app.
* This is used in cases such as the creation or editing of a record,
* as well as various types of messaging.
*/
export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
        this.modalRef = React.createRef();
        this.modalHeadingId = uniqueId('modal-heading');
        this.modalContentId = uniqueId('modal-content');
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        const { isOpen } = this.props;
        if (isOpen) {
            this.modalRef.current.focus();
        }
    }

    componentDidUpdate() {
        const { isOpen } = this.props;
        document.body.style.overflow = 'inherit';
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            this.modalTriggerElement = document.activeElement;
            this.modalRef.current.focus();
        }
    }

    getBackDropClassNames() {
        const { isOpen } = this.props;
        return classnames('rainbow-modal_backdrop', { 'rainbow-modal_backdrop--open': isOpen });
    }

    getContainerClassNames() {
        const { className, isOpen } = this.props;
        return classnames('rainbow-modal', {
            'rainbow-modal--open': isOpen,
            'rainbow-modal--close': !isOpen,
        }, this.getSizeClassNames(), className);
    }

    getSizeClassNames() {
        const { size } = this.props;
        if (size === 'small') {
            return null;
        }
        return `rainbow-modal--${size}`;
    }

    handleKeyPressed(event) {
        const { isOpen } = this.props;
        if (isOpen && event.keyCode === ESCAPE_KEY) {
            this.closeModal();
        }
        if (event.keyCode === TAB_KEY) {
            manageTab(this.modalRef.current, event);
        }
        return null;
    }

    handleClick(event) {
        const { isOpen } = this.props;
        if (isOpen) {
            const isClickOutsideModal = !this.modalRef.current.contains(event.target);
            if (isClickOutsideModal) {
                return this.closeModal();
            }
        }
        return null;
    }

    closeModal() {
        const { onRequestClose } = this.props;
        this.modalTriggerElement.focus();
        return onRequestClose();
    }

    render() {
        const {
            title,
            style,
            children,
            footer,
            isOpen,
            id,
        } = this.props;

        return (
            createPortal(
                <div
                    id={id}
                    onClick={this.handleClick}
                    className={this.getBackDropClassNames()}
                    onKeyDown={this.handleKeyPressed}>

                    <section
                        role="dialog"
                        tabIndex={-1}
                        aria-labelledby={this.modalHeadingId}
                        aria-modal
                        aria-hidden={!isOpen}
                        aria-describedby={this.modalContentId}
                        className={this.getContainerClassNames()}
                        style={style}
                        ref={this.modalRef}>

                        <ButtonIcon
                            className="rainbow-modal_close-button"
                            icon={<CloseIcon />}
                            title="Close"
                            onClick={this.closeModal}
                            ref={this.buttonRef} />

                        <Header
                            id={this.modalHeadingId}
                            title={title} />

                        <div className="rainbow-modal_content" id={this.modalContentId}>
                            {children}
                        </div>

                        <RenderIf isTrue={!!footer}>
                            <footer className="rainbow-modal_footer">
                                {footer}
                            </footer>
                        </RenderIf>
                    </section>
                </div>,
                document.body,
            )
        );
    }
}

Modal.propTypes = {
    /** The title can include text or another component,
     * and is displayed in the header of the component. */
    title: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The size of the Modal. Valid values are small, medium, and large.
    * This value defaults to small. */
    size: PropTypes.oneOf([
        'small',
        'medium',
        'large',
    ]),
    /** The footer can include text or another component. */
    footer: PropTypes.node,
    /** Controls whether the Modal is opened or not. If true, the modal is open. */
    isOpen: PropTypes.bool,
    /** The action triggered when the close button is clicked. */
    onRequestClose: PropTypes.func,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
};

Modal.defaultProps = {
    isOpen: false,
    title: null,
    size: 'small',
    children: null,
    className: undefined,
    style: undefined,
    footer: null,
    onRequestClose: () => {},
    id: undefined,
};
