import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ButtonIcon from '../../../src/components/ButtonIcon';
import RenderIf from '../../../src/components/RenderIf';
import Notification from '../../../src/components/Notification';
import Close from './icons/close';
import MessageIcon from './messageIcon';
import { hideMessage } from '../../../src/redux/actions/message';
import './styles.css';

function Message(props) {
    // eslint-disable-next-line no-shadow
    const { className, style, message, variant, hideMessage } = props;

    const StyledNotification = styled(Notification)`
        position: absolute;
        z-index: 999999;
    `;

    function getClassName() {
        return classnames(
            'react-rainbow-message_container',
            {
                'react-rainbow-message_container--shown': message,
            },
            `react-rainbow-message_container-${variant}`,
            className,
        );
    }

    return (
        <>
            <RenderIf isTrue={!!message && variant === 'error'}>
                <article className={getClassName()} style={style}>
                    <div className="react-rainbow-message_content">
                        <MessageIcon variant={variant} />
                        <p className="nexxtway-message_text">{message}</p>
                        <ButtonIcon
                            size="medium"
                            icon={<Close />}
                            onClick={hideMessage}
                            className="react-rainbow-message_close-button"
                        />
                    </div>
                </article>
            </RenderIf>
            <RenderIf isTrue={!!message && variant === 'success'}>
                <div className="rainbow-p-right_small rainbow-flex rainbow-flex_column rainbow-align_end">
                    <StyledNotification
                        title={message}
                        description="One of our team members will contact you shortly."
                        icon="success"
                        onRequestClose={hideMessage}
                    />
                </div>
            </RenderIf>
        </>
    );
}

Message.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    message: PropTypes.node,
    variant: PropTypes.string,
    hideMessage: PropTypes.func.isRequired,
};

Message.defaultProps = {
    className: undefined,
    style: undefined,
    message: undefined,
    variant: 'success',
};

function stateToProps(state) {
    return state.message;
}

function dispatchToProps(dispatch) {
    return bindActionCreators(
        {
            hideMessage,
        },
        dispatch,
    );
}

export default connect(
    stateToProps,
    dispatchToProps,
)(Message);
