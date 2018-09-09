import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';

export default function OptionItems({ options }) {
    return options.map(option => (
            <option value={option.value} disabled={option.disabled} key={uniqueId('option')}>{option.label}</option>
        ),
    );
}

OptionItems.propTypes = {
    options: PropTypes.array,
};

OptionItems.defautltProps = {
    options: [],
};
