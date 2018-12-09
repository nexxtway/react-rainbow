import React from 'react';
import PropTypes from 'prop-types';
import ExperienceExampleCard from './experienceExampleCard';
import './styles.css';

export default function Util(props) {
    const { response, type } = props;

    if (response && Array.isArray(response.results) && response.results.length) {
        if (type === 'experience-examples') {
            return <ExperienceExampleCard results={response.results} />;
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
