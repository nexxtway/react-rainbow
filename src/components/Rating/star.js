import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AssistiveText from '../AssistiveText';
import { uniqueId } from '../../libs/utils';
import StarFill from './starFill';
import StarBordered from './starBordered';

export default class Star extends Component {
    constructor(props) {
        super(props);
        this.starId = uniqueId('star');
    }

    renderStar() {
        const { filled } = this.props;
        if (filled) {
            return <StarFill />;
        }
        return <StarBordered />;
    }

    render() {
        const {
            onChange,
            value,
            name,
            isChecked,
        } = this.props;
        const assistiveText = `${value} Stars`;

        return (
            <span className="rainbow-rating_star">
                <input
                    className="rainbow-rating_star-input"
                    type="radio"
                    id={this.starId}
                    value={value}
                    name={name}
                    checked={isChecked}
                    onChange={onChange} />

                <label htmlFor={this.starId}>
                    {this.renderStar()}
                    <AssistiveText text={assistiveText} />
                </label>
            </span>
        );
    }
}

Star.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
    filled: PropTypes.bool.isRequired,
    name: PropTypes.string,
    isChecked: PropTypes.bool,
};

Star.defaultProps = {
    value: 0,
    onChange: () => {},
    name: undefined,
    isChecked: false,
};
