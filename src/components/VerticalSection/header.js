import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    const { label } = props;
    if (label) {
        return <h2 id="entity-header" className="slds-nav-vertical__title slds-text-title_caps">{label}</h2>;
    }
    return null;
}

Header.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Header;
