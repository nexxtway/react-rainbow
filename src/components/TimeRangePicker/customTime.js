import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeSelect from './timeSelect';
import get12HourTime from './helpers/get12HourTime';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { ENTER_KEY, SPACE_KEY } from '../../libs/constants';
import StyledModal from './styled/modal';
import StyledClockContainer from './styled/clockContainer';
import ClockIcon from './icons/clock';
import StyledButtonIcon from './styled/buttonIcon';

/**
 * A TimePicker is used to input a time by displaying an interface the user can interact with.
 * @category Form
 */
class CustomTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            value: undefined,
        };
        this.btnRef = React.createRef();
        this.timeSelectRef = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.setFocusToHourInput = this.setFocusToHourInput.bind(this);
    }

    componentDidUpdate({ value: prevValue }) {
        const { value } = this.state;
        if (prevValue !== value) {
            this.updateValue(value);
        }
    }

    setFocusToHourInput() {
        this.timeSelectRef.current.focusHourInput();
    }

    updateValue(newValue) {
        this.setState({
            value: this.props.hour24 ? newValue : get12HourTime(newValue),
        });
    }

    handleKeyDown(event) {
        const { keyCode } = event;
        const shouldOpenModal = keyCode === ENTER_KEY || keyCode === SPACE_KEY;
        if (shouldOpenModal) {
            this.setState({ isOpen: true });
        }
    }

    handleClick(event) {
        const { onClick } = this.props;
        this.setState({ isOpen: true });
        onClick(event);
    }

    closeModal() {
        const { onBlur } = this.props;
        this.setState({ isOpen: false });
        onBlur();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.btnRef.current.click();
    }

    render() {
        const { cancelLabel, okLabel, onChange, hour24, opener } = this.props;
        const { isOpen, value } = this.state;

        return (
            <StyledClockContainer id="time-range-picker-clock-container" opener={opener}>
                <StyledButtonIcon
                    shaded
                    size="small"
                    variant="border-filled"
                    icon={<ClockIcon />}
                    onClick={this.handleClick}
                    ref={this.btnRef}
                />
                <StyledModal
                    id="time-range-picker_modal"
                    isOpen={isOpen}
                    onRequestClose={this.closeModal}
                    onOpened={this.setFocusToHourInput}
                >
                    <TimeSelect
                        onCloseModal={this.closeModal}
                        onChange={onChange}
                        cancelLabel={cancelLabel}
                        okLabel={okLabel}
                        value={value}
                        ref={this.timeSelectRef}
                        hour24={hour24}
                    />
                </StyledModal>
            </StyledClockContainer>
        );
    }
}

CustomTime.propTypes = {
    hour24: PropTypes.bool,
    cancelLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    okLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    opener: PropTypes.object,
};

CustomTime.defaultProps = {
    hour24: false,
    cancelLabel: 'Cancel',
    okLabel: 'OK',
    onChange: () => {},
    onClick: () => {},
    onBlur: () => {},
    opener: {},
};

export default withReduxForm(CustomTime);
