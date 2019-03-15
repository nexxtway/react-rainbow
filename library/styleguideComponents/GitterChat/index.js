import { Component } from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';

/** See: https://sidecar.gitter.im/ */
class GitterChat extends Component {
    componentDidMount() {
        const {
            room,
            targetElement,
            activationElement,
            showChatByDefault,
            useStyles,
        } = this.props;

        ((window.gitter = {}).chat = {}).options = {
            room,
            targetElement,
            activationElement,
            showChatByDefault,
            useStyles,
        };
    }

    render() {
        return null;
    }
}

GitterChat.propTypes = {
    /** This is the Gitter room that the component will load. */
    room: PropTypes.string,
    /** This is where you want to embed the chat. It can take a dom node, array of dom nodes, or
     * a string selector like .my-custom-elment. */
    targetElement: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(Node),
    ]),
    /** When showChatByDefault is false, this is the element you have to click/interact with to get
     * the chat to actually embed, "Open Chat" button. You can define toggle/open/close buttons in
     * your page setting activationElment to false and using the .js-gitter-toggle-chat-button class
     * and an optional data-gitter-toggle-chat-state attribute. If you do not provide a
     * data-gitter-toggle-chat-state,it will default to 'toggle'.  */
    activationElement: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(Node),
        PropTypes.bool,
    ]),
    /** Whether to embed the chat on page load(true) or wait until the activationElement
     * is clicked. Useful for use cases where you have a page dedicated to chat. */
    showChatByDefault: PropTypes.bool,
    /** This will embed CSS into your document to style the activation and target element.
     * If you want to customise these, set this option to false and specify your own CSS. */
    useStyles: PropTypes.bool,
};

GitterChat.defaultProps = {
    room: undefined,
    targetElement: undefined,
    activationElement: undefined,
    showChatByDefault: false,
    useStyles: true,
};

export default scriptLoader('https://sidecar.gitter.im/dist/sidecar.v1.js')(GitterChat);
