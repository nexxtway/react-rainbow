import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem';

const DynamicMenuItem = props => {
    const { renderIf, disabled, rowData, ...rest } = props;

    const shouldRender = typeof renderIf === 'function' ? renderIf(rowData) : true;
    const isDisabled = typeof disabled === 'function' ? disabled(rowData) : false;

    if (shouldRender) {
        return <MenuItem {...rest} disabled={isDisabled} />;
    }
    return null;
};

DynamicMenuItem.propTypes = {
    ...MenuItem.propTypes,
    renderIf: PropTypes.func,
    disabled: PropTypes.func,
};

DynamicMenuItem.defaultProps = {
    ...MenuItem.defaultProps,
    renderIf: () => true,
    disabled: () => false,
};

export default DynamicMenuItem;
