import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';
import Button from '../Button';
import UpIcon from './icons/upArrow';
import DownIcon from './icons/downArrow';

export default function Timeselect(props) {
    const {
        value,
        onChange,
    } = props;

    return (
        <article>
            <div className="rainbow-time-picker_time-content">
                <span className="rainbow-time-picker_time">
                    <input className="rainbow-time-picker_time-input" />
                </span>
                <span className="rainbow-time-picker_time-dots">:</span>
                <span className="rainbow-time-picker_time">
                    <input className="rainbow-time-picker_time-input" />
                </span>
                <span className="rainbow-time-picker_time">
                    <input className="rainbow-time-picker_time-input" />
                </span>
                <div className="rainbow-time-picker_icon-button-container">
                    <ButtonIcon
                        className="rainbow-time-picker_icon-button"
                        variant="border-filled"
                        icon={<UpIcon />}
                        size="x-small" />
                    <ButtonIcon
                        className="rainbow-time-picker_icon-button"
                        variant="border-filled"
                        icon={<DownIcon />}
                        size="x-small" />
                </div>
            </div>
            <div className="rainbow-time-picker_footer">
                <Button
                    className="rainbow-time-picker_button"
                    variant="base"
                    label="Cancel" />

                <Button
                    className="rainbow-time-picker_button"
                    variant="brand"
                    label="OK"
                    onClick={() => onChange()} />
            </div>
        </article>
    );
}

Timeselect.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func,
};

Timeselect.defaultProps = {
    value: undefined,
    onChange: () => {},
};
