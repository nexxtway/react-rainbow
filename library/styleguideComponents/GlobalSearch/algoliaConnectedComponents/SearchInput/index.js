import React, { useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { connectSearchBox } from 'react-instantsearch-dom';
import Input from '../../../../../src/components/Input';
import SearchIcon from './searchIcon';

const SearchInput = props => {
    // eslint-disable-next-line react/prop-types
    const { currentRefinement, refine, label, className, style, customRef, onChange } = props;
    const handleChange = event => {
        onChange(event);
        refine(event.currentTarget.value);
    };

    useImperativeHandle(customRef, () => ({
        clear() {
            refine('');
        },
    }));

    return (
        <Input
            className={className}
            style={style}
            label={label}
            type="search"
            value={currentRefinement}
            onChange={handleChange}
            placeholder="Type to search"
            autoComplete="off"
            icon={<SearchIcon />}
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
