import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AssistiveText from '../AssistiveText';
import { uniqueId } from '../../libs/utils';
import StarFill from './starFill';
import StarBordered from './starBordered';
import StyledStartContainer from './styled/starContainer';
import StyledStartInput from './styled/starInput';
import StarHalf from './starHalf';

export default class Star extends Component {
    constructor(props) {
        super(props);
        this.starId = uniqueId('star');
        this.handleChange = this.handleChange.bind(this);
    }

    getAssitiveText() {
        const { value } = this.props;
        if (value === 1) {
            return `${value} Star`;
        }
        return `${value} Stars`;
    }

    handleChange(event) {
        const { readOnly, onChange } = this.props;
        if (readOnly) return null;
        return onChange(event);
    }

    renderStar() {
        const { isFilled, isHalf } = this.props;
        if (isFilled) {
            return isHalf ? <StarHalf /> : <StarFill />;
        }
        return <StarBordered />;
    }

    render() {
        const { value, name, readOnly } = this.props;

        return (
            <StyledStartContainer>
                <StyledStartInput
                    type="radio"
                    id={this.starId}
                    value={value}
                    name={name}
                    onChange={this.handleChange}
                    disabled={readOnly}
                />

                <label htmlFor={this.starId}>
                    {this.renderStar()}
                    <AssistiveText text={this.getAssitiveText()} />
                </label>
            </StyledStartContainer>
        );
    }
}

Star.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
    isFilled: PropTypes.bool.isRequired,
    isHalf: PropTypes.bool,
    name: PropTypes.string,
    readOnly: PropTypes.bool,
};

Star.defaultProps = {
    value: 1,
    onChange: () => {},
    name: undefined,
    readOnly: false,
    isHalf: false,
};
