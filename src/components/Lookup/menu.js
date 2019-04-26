import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonIcon from '../ButtonIcon';
import CloseIcon from './icons/closeIcon';

export default function Menu(props) {
    const {
        value,
        className,
        style,
    } = props;

    const getContainerClassName = () => classnames('rainbow-lookup_menu-container', className);

    return (
        <div className={getContainerClassName()} style={style}>
            <div className="rainbow-lookup_menu-input-container">
                <input
                    className="rainbow-lookup_menu-input"
                    type="search"
                    value={value} />
                <ButtonIcon
                    className="rainbow-lookup_menu-input-icon"
                    size="small"
                    icon={<CloseIcon />} />
            </div>
        </div>
    );
}

Menu.propTypes = {
    /** Sets the date for the Lookup programmatically. */
    value: PropTypes.object,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Menu.defaultProps = {
    value: undefined,
    className: undefined,
    style: undefined,
};
