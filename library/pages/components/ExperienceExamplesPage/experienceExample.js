import React from 'react';
import PropTypes from 'prop-types';
import ExperienceExampleCards from '../../../styleguideComponents/ExperienceExampleCards';

export default function ExperienceExample(props) {
    const { response } = props;

    if (response && Array.isArray(response.results) && response.results.length) {
        return <ExperienceExampleCards results={response.results} />;
    }
    return null;
}

ExperienceExample.propTypes = {
    response: PropTypes.object,
};

ExperienceExample.defaultProps = {
    response: null,
};
