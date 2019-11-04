import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AssistiveText from '../AssistiveText';
import { uniqueId } from '../../libs/utils';
import StarFill from './starFill';
import StarBordered from './starBordered';
import StyledStartContainer from './styled/starContainer';
import StyledStartInput from './styled/starInput';

export default class Star extends Component {
    constructor(props) {
        super(props);
        this.starId = uniqueId('star');
    }

    getAssitiveText() {
        const { value } = this.props;
        if (value === 1) {
            return `${value} Star`;
        }
        return `${value} Stars`;
    }

    renderStar() {
        const { filled } = this.props;
        if (filled) {
            return <StarFill />;
        }
        return <StarBordered />;
    }

    render() {
        const { onChange, value, name } = this.props;

        return (
            <StyledStartContainer>
                <StyledStartInput
                    type="radio"
                    id={this.starId}
                    value={value}
                    name={name}
                    onChange={onChange}
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
    filled: PropTypes.bool.isRequired,
    name: PropTypes.string,
};

Star.defaultProps = {
    value: 1,
    onChange: () => {},
    name: undefined,
};
