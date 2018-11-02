/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../Chart/context';

class DatasetItem extends Component {
    componentDidMount() {
        const {
            privateRegister,
            type,
            values,
            title,
            backgroundColor,
            borderColor,
            fill,
            stack,
        } = this.props;

        const lineColor = borderColor || backgroundColor;

        privateRegister({
            type,
            data: values,
            label: title,
            backgroundColor,
            borderColor: lineColor,
            fill,
            stack,
        });
    }

    render() {
        return null;
    }
}

export default function Dataset(props) {
    return (
        <Consumer>
            {value => <DatasetItem {...props} {...value} />}
        </Consumer>
    );
}

Dataset.propTypes = {
    type: PropTypes.oneOf([
        'bar',
        'horizontalBar',
        'line',
        'radar',
        'pie',
        'doughnut',
        'polarArea',
        'bubble',
    ]),
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
    title: PropTypes.string,
    backgroundColor: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
    borderColor: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
    stack: PropTypes.string,
    fill: PropTypes.bool,
};

Dataset.defaultProps = {
    title: 'Dataset',
    type: undefined,
    backgroundColor: undefined,
    borderColor: undefined,
    stack: undefined,
    fill: false,
};
