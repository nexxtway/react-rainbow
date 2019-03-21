import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from '../RequiredAsterisk';
import CalendarIcon from './icons/calendarIcon';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
import Modal from './../Modal';
import ButtonIcon from './../ButtonIcon';
import Select from './../Select';
import './styles.css';

/**
 * A datepicker is a text input to capture a date.
 * @category Form
 */
export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    openModal() {
        this.setState({ isOpen: true });
    }

    closeModal() {
        this.setState({ isOpen: false });
    }

    render() {
        const {
            value,
            placeholder,
            label,
            hideLabel,
            required,
            id,
            inputId,
            style,
            className,
        } = this.props;
        const {
            isOpen,
        } = this.state;

        const getContainerClassNames = () => classnames('rainbow-date-picker_container', className);

        const getLabelClassNames = () => classnames('rainbow-date-picker_label', {
            'rainbow-date-picker_label--hide': hideLabel,
        });

        const options = [
            { value: '2018', label: '2018' },
            { value: '2019', label: '2019' },
            { value: '2020', label: '2020' },
        ];

        return (
            <div className={getContainerClassNames()} style={style}>
                <label className={getLabelClassNames()} htmlFor={inputId} id={id}>
                    <RequiredAsterisk required={required} />
                    {label}
                </label>
                <div className="rainbow-date-picker_input-container">
                    <input
                        id={inputId}
                        className="rainbow-date-picker_input"
                        placeholder={placeholder}
                        value={value.toString()}
                        onClick={() => this.openModal()}
                        readOnly />

                    <CalendarIcon className="rainbow-date-picker_icon" onClick={() => this.openModal()} />
                </div>
                <Modal isOpen={isOpen} onRequestClose={() => this.closeModal()}>
                    <section className="rainbow-date-picker_modal-container">
                        <article className="rainbow-date-picker_calendar-container">
                            <div className="rainbow-date-picker_calendar-month-container">
                                <ButtonIcon size="medium" icon={<LeftIcon />} />
                                <h3 className="rainbow-date-picker_calendar-month-text">
                                    Month
                                </h3>
                                <ButtonIcon size="medium" icon={<RightIcon />} />
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th className="rainbow-date-picker_calendar-header">
                                            <abbr title="Sunday">Sun</abbr>
                                        </th>
                                        <th className="rainbow-date-picker_calendar-header">
                                            <abbr title="Monday">Mon</abbr>
                                        </th>
                                        <th className="rainbow-date-picker_calendar-header">
                                            <abbr title="Tuesday">Tue</abbr>
                                        </th>
                                        <th className="rainbow-date-picker_calendar-header">
                                            <abbr title="Wednesday">Wed</abbr>
                                        </th>
                                        <th className="rainbow-date-picker_calendar-header">
                                            <abbr title="Thursday">Thu</abbr>
                                        </th>
                                        <th className="rainbow-date-picker_calendar-header">
                                            <abbr title="Friday">Fri</abbr>
                                        </th>
                                        <th className="rainbow-date-picker_calendar-header">
                                            <abbr title="Saturday">Sat</abbr>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">1</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">2</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">3</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">4</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">5</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">6</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">7</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">8</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">9</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">10</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">11</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">12</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">13</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">14</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">15</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button--selected">16</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">17</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">18</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">19</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">20</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">21</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">22</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">23</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">24</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">25</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">26</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">27</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">28</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">29</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">30</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button">31</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button--disabled">1</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button--disabled">2</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button--disabled">3</button>
                                        </td>
                                        <td className="rainbow-date-picker_calendar-day">
                                            <button className="rainbow-date-picker_calendar-day-button--disabled">4</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </article>
                        <article className="rainbow-date-picker_calendar-details-container">
                            <div className="rainbow-date-picker_calendar-details-text-container">
                                <h1 className="rainbow-date-picker_calendar-details-day">
                                    16
                                </h1>
                                <h2 className="rainbow-date-picker_calendar-details-week">
                                    Monday
                                </h2>
                            </div>
                            <Select className="rainbow-date-picker_calendar-select-year" options={options} />
                        </article>
                    </section>
                </Modal>
            </div>
        );
    }
}

DatePicker.propTypes = {
    value: PropTypes.instanceOf(Date),
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Text label for the input. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]).isRequired,
    /** A boolean to hide the input label. */
    hideLabel: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form.
    * This value defaults to false. */
    required: PropTypes.bool,
    /** The id of the outer element. */
    id: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

DatePicker.defaultProps = {
    value: undefined,
    placeholder: null,
    required: false,
    hideLabel: false,
    id: undefined,
    className: undefined,
    style: undefined,
};
