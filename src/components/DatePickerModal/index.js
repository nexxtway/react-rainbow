import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import { Header, HeaderTitle, StyledModal, StyledCalendar } from './styled';

export default function DatePickerModal(props) {
    const {
        id,
        className,
        style,
        locale,
        minDate,
        maxDate,
        selectionType,
        variant,
        value,
        onChange,
        onRequestClose,
        isOpen,
        title,
    } = props;

    const calendarId = id && `${id}_calendar`;

    return (
        <StyledModal
            id={id}
            className={className}
            style={style}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <RenderIf isTrue={title}>
                <Header variant={variant}>
                    <HeaderTitle>{title}</HeaderTitle>
                </Header>
            </RenderIf>
            <StyledCalendar
                id={calendarId}
                locale={locale}
                minDate={minDate}
                maxDate={maxDate}
                selectionType={selectionType}
                variant={variant}
                value={value}
                onChange={onChange}
            />
        </StyledModal>
    );
}

DatePickerModal.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /**
     * The DatePickerModal locale. Defaults to browser's language.
     */
    locale: PropTypes.string,
    /** The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years. */
    maxDate: PropTypes.instanceOf(Date),
    /** The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years. */
    minDate: PropTypes.instanceOf(Date),
    /** The type of the selection. It can be a single date or a range. The default value is 'single'. */
    selectionType: PropTypes.oneOf(['single', 'range']),
    /** The calendar type. Defaults to 'single' */
    variant: PropTypes.oneOf(['single', 'double']),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Sets the date for the DatePickerModal programmatically. */
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])),
    ]),
    /** Controls whether the DatePickerModal is opened or not. */
    isOpen: PropTypes.bool,
    /** The action triggered when the component request to close
     *  (e.g click close button, press esc key or click outside). */
    onRequestClose: PropTypes.func,
    /** The title can include text or another component,
     * and is displayed in the header of the component. */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

DatePickerModal.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    locale: undefined,
    maxDate: undefined,
    minDate: undefined,
    selectionType: 'single',
    variant: 'single',
    value: undefined,
    isOpen: false,
    onChange: () => {},
    onRequestClose: () => {},
    title: undefined,
};
