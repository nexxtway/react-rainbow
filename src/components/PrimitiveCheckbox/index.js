import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';
import Label from './label';
import StyledContainer from './styled/container';
import StyledInnerContainer from './styled/innerContainer';

export default class PrimitiveCheckbox extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('input-checkbox');
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        const { checked } = this.props;
        this.inputRef.current.indeterminate = checked === 'indeterminate';
    }

    componentDidUpdate(prevProps) {
        const { checked: prevChecked } = prevProps;
        const { checked } = this.props;
        if (typeof prevChecked !== typeof checked) {
            this.inputRef.current.indeterminate = checked === 'indeterminate';
        }
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.inputRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.inputRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.inputRef.current.blur();
    }

    render() {
        const {
            style,
            className,
            value,
            onChange,
            label,
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            onKeyDown,
            id,
            name,
            checked,
        } = this.props;

        return (
            <StyledContainer id={id} className={className} style={style}>
                <StyledInnerContainer>
                    <input
                        id={this.inputId}
                        name={name}
                        type="checkbox"
                        value={value}
                        onChange={onChange}
                        tabIndex={tabIndex}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onClick={onClick}
                        onKeyDown={onKeyDown}
                        disabled={disabled}
                        checked={checked}
                        ref={this.inputRef}
                    />

                    <Label label={label} inputId={this.inputId} />
                </StyledInnerContainer>
            </StyledContainer>
        );
    }
}

PrimitiveCheckbox.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    checked: PropTypes.oneOf([true, false, 'indeterminate']),
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
};

PrimitiveCheckbox.defaultProps = {
    value: undefined,
    name: undefined,
    disabled: false,
    onChange: () => {},
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    checked: undefined,
    className: undefined,
    style: undefined,
    id: undefined,
};
