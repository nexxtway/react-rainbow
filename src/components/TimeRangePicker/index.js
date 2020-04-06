import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import TimeRangeComponent from './timeRangeComponent';
import RenderIf from '../RenderIf';
import Label from '../Input/label';
import { uniqueId } from '../../libs/utils';

/**
 * TimeRangePicker is a graphical user interface widget that
 * allows the user to select a time range.
 * @category Form
 */
export default function TimeRangePicker(props) {
    const { id, hour24, start, end, label, required, hideLabel, style, className } = props;

    return (
        <StyledContainer id={id} className={className} style={style}>
            <RenderIf isTrue={!!label}>
                <Label
                    label={label}
                    hideLabel={hideLabel}
                    required={required}
                    inputId={uniqueId('timepicker-label')}
                    readOnly
                />
            </RenderIf>
            <TimeRangeComponent hour24={hour24} start={start} end={end} label={label} />
        </StyledContainer>
    );
}

TimeRangePicker.propTypes = {
    /** Component unique identifier.  */
    id: PropTypes.string,
    /** Hour format to show the time. */
    hour24: PropTypes.bool,
    /** The initial time for the component */
    start: PropTypes.string,
    /** The final time for the component */
    end: PropTypes.string,
    /** Label to show on top of the component */
    label: PropTypes.string,
    /** Specifies that the TimeRangePicker must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** A boolean to hide the component label. */
    hideLabel: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

TimeRangePicker.defaultProps = {
    id: undefined,
    hour24: false,
    start: undefined,
    end: undefined,
    label: undefined,
    required: false,
    hideLabel: false,
    className: undefined,
    style: undefined,
};
