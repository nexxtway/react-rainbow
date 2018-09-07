/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import CopyToClipboard from '../CopyToClipboard';

export default function CustomPathline(props) {
    const { name, children } = props;

    return (
        <div className="rainbow-flex">
                <span>
                    <span className="react-rainbow-text-color-violet">import </span>
                    <span className="react-rainbow-text-color-gray">{name}</span>
                    <span className="react-rainbow-text-color-violet"> from </span>
                    <span className="react-rainbow-text-color-green">{`'react-rainbow-components/components/${name}';`}</span>
                </span>
            <CopyToClipboard text={children} variant="base" />
        </div>
    );
}

CustomPathline.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
