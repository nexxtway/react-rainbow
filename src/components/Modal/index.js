import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import RenderIf from './../RenderIf';
import { uniqueId } from './../../libs/utils';
import { ESCAPE_KEY, TAB_KEY } from './../../libs/constants';
import Header from './header';
import CloseIcon from './closeIcon';
import manageTab from '../../libs/manageTab';
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from '../../libs/scrollController';
import CounterManager from '../../libs/counterManager';
import StyledBackDrop from './styled/backDrop';
import StyledModalContainer from './styled/modalContainer';
import StyledCloseButton from './styled/closeButton';
import StyledContent from './styled/content';
import StyledFooter from './styled/footer';

/**
 * Modals are used to display content in a layer above the app.
 * This is used in cases such as the creation or editing of a record,
 * as well as various types of messaging.
 * @category Layout
 */
export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
        this.modalRef = React.createRef();
        this.contentRef = React.createRef();
        this.modalHeadingId = uniqueId('modal-heading');
        this.modalContentId = uniqueId('modal-content');
        this.handleKeyPressed = this.handleKeyPressed.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        const { isOpen } = this.props;
        if (isOpen) {
            this.contentElement = this.contentRef.current;
            CounterManager.increment();
            disableBodyScroll(this.contentRef.current);
            this.modalTriggerElement = document.activeElement;
            this.modalRef.current.focus();
        }
    }

    componentDidUpdate(prevProps) {
        const { isOpen, onOpened } = this.props;
        const { isOpen: prevIsOpen } = prevProps;

        const wasOpened = isOpen && !prevIsOpen;
        const wasClosed = !isOpen && prevIsOpen;

        if (wasOpened) {
            CounterManager.increment();
            this.contentElement = this.contentRef.current;
            disableBodyScroll(this.contentRef.current);
            this.modalTriggerElement = document.activeElement;
            this.modalRef.current.focus();
            onOpened();
        }

        if (wasClosed) {
            CounterManager.decrement();
            if (this.modalTriggerElement) {
                this.modalTriggerElement.focus();
            }
            if (!CounterManager.hasModalsOpen()) {
                enableBodyScroll(this.contentElement);
                clearAllBodyScrollLocks();
            }
        }
    }

    componentWillUnmount() {
        const { isOpen } = this.props;
        if (isOpen) {
            CounterManager.decrement();
        }
        if (!CounterManager.hasModalsOpen()) {
            enableBodyScroll(this.contentElement);
            clearAllBodyScrollLocks();
        }
    }

    handleKeyPressed(event) {
        event.stopPropagation();
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
        if (CounterManager.counter > 1) {
            event.stopPropagation();
        }
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
        return onRequestClose();
    }

    render() {
        const {
            title,
            style,
            className,
            children,
            footer,
            isOpen,
            id,
            size,
            hideCloseButton,
        } = this.props;

        if (isOpen) {
            return createPortal(
                <StyledBackDrop
                    role="presentation"
                    isOpen={isOpen}
                    id={id}
                    onClick={this.handleClick}
                    onKeyDown={this.handleKeyPressed}
                >
                    <StyledModalContainer
                        role="dialog"
                        tabIndex={-1}
                        aria-labelledby={this.modalHeadingId}
                        aria-modal
                        aria-hidden={!isOpen}
                        aria-describedby={this.modalContentId}
                        style={style}
                        ref={this.modalRef}
                        isOpen={isOpen}
                        className={className}
                        size={size}
                    >
                        <RenderIf isTrue={!hideCloseButton}>
                            <StyledCloseButton
                                id="modal-close-button"
                                icon={<CloseIcon />}
                                title="Close"
                                onClick={this.closeModal}
                                ref={this.buttonRef}
                            />
                        </RenderIf>

                        <Header id={this.modalHeadingId} title={title} />

                        <StyledContent id={this.modalContentId} ref={this.contentRef}>
                            {children}
                        </StyledContent>

                        <RenderIf isTrue={!!footer}>
                            <StyledFooter>{footer}</StyledFooter>
                        </RenderIf>
                    </StyledModalContainer>
                </StyledBackDrop>,
                document.body,
            );
        }
        return null;
    }
}

Modal.propTypes = {
    /** The title can include text or another component,
     * and is displayed in the header of the component. */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The size of the Modal. Valid values are small, medium, and large.
     * This value defaults to small. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The footer can include text or another component. */
    footer: PropTypes.node,
    /** Controls whether the Modal is opened or not. If true, the modal is open. */
    isOpen: PropTypes.bool,
    /** The action triggered when the component request to close
     *  (e.g click close button, press esc key or click outside the modal). */
    onRequestClose: PropTypes.func,
    /** A callback triggered when the modal is opened. This is usefull for example to set focus
     * to an element inside the modal content after it is opened.
     */
    onOpened: PropTypes.func,
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
    /** If true, hide the close button in the modal */
    hideCloseButton: PropTypes.bool,
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
    onOpened: () => {},
    id: undefined,
    hideCloseButton: false,
};
