import React from 'react';
import PropTypes from 'prop-types';

const ResultItem = props => {
    const { objectID, type, text, description, url } = props;

    return (
        <div>
            {type}: {text}, {objectID}, {description}, {url}
        </div>
    );
};

ResultItem.propTypes = {
    objectID: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
};

ResultItem.defaultProps = {
    objectID: '',
    type: '',
    text: '',
    description: '',
    url: '',
};
export default ResultItem;
