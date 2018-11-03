/* eslint-disable react/prop-types,react/no-unused-prop-types */
import PropTypes from 'prop-types';

export default function Dataset() {}

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
