import React from 'react';
import PropTypes from 'prop-types';
import ComponentExampleCard from './../../../../styleguideComponents/ComponentExampleCard';

export default function Util(props) {
    const { response, type } = props;

    if (response && Array.isArray(response.results) && response.results.length) {
        if (type === 'experience-examples') {
            return <ComponentExampleCard results={response.results} />;
        }
        return null;
    }
    return null;
}

Util.propTypes = {
    response: PropTypes.object,
    type: PropTypes.string,
};

Util.defaultProps = {
    response: null,
    type: undefined,
    name: undefined,
};
