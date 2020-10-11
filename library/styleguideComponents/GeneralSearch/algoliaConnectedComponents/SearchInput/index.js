import React from 'react';
import PropTypes from 'prop-types';
import { connectSearchBox } from 'react-instantsearch-dom';
import Input from '../../../../../src/components/Input';

const SearchInput = props => {
    // eslint-disable-next-line react/prop-types
    const { currentRefinement, refine, label, className, style } = props;
    return (
        <Input
            className={className}
            style={style}
            label={label}
            type="search"
            value={currentRefinement}
            onChange={event => refine(event.currentTarget.value)}
            placeholder="Type to search"
            autoComplete="off"
        />
    );
};

SearchInput.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    currentRefinement: PropTypes.string,
    refine: PropTypes.func,
    label: PropTypes.string,
};

SearchInput.defaultProps = {
    className: '',
    style: {},
    currentRefinement: '',
    refine: () => {},
    label: '',
};

export default connectSearchBox(SearchInput);
