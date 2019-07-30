import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CheckmarkIcon from '../VisualPickerOption/checkmark';
import { uniqueId } from './../../libs/utils';
import './styles.css';

export default class VisualPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generatedName: uniqueId('visual-picker'),
        };
        this.inputs = {};
        this.handleChange = this.handleChange.bind(this);
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-visual-picker_fieldset-container', className);
    }

    handleChange() {
        const { onChange } = this.props;
        const selectedItems = Object.keys(this.inputs).reduce((prev, key) => {
            const node = this.inputs[key];
            if (node.checked) {
                prev.push(Number(node.value));
            }
            return prev;
        }, []);

        onChange({ selectedItems });
    }

    isChecked(index) {
        const { selectedItems } = this.props;
        return selectedItems.indexOf(index) !== -1;
    }

    renderContent(item) {
        const { Content } = this.props;

        if (Content) {
            return (
                <span className="rainbow-visual-picker__text rainbow-align_absolute-center">
                    <Content item={item} />
                </span>
            );
        }
        return null;
    }

    renderFooter(item) {
        const { Footer } = this.props;

        if (Footer) {
            return (
                <span className="rainbow-visual-picker__body">
                    <Footer item={item} />
                </span>
            );
        }
        return null;
    }

    renderDoneIcon(index) {
        return this.isChecked(index) ? <CheckmarkIcon color="white" /> : null;
    }

    renderLabel() {
        const { label } = this.props;
        return label ? (
            <legend className="rainbow-visual-picker_legend-element">{label}</legend>
        ) : null;
    }

    renderVisualPickerItems() {
        const { multiple, disabled } = this.props;
        return this.props.items.map((item, index) => {
            const generatedId = uniqueId('visual-picker-item');
            return (
                <div key={generatedId} className={this.getItemClassName(index)}>
                    <input
                        ref={input => {
                            this.inputs[`input-${index}`] = input;
                        }}
                        type={multiple ? 'checkbox' : 'radio'}
                        id={generatedId}
                        disabled={disabled}
                        value={index}
                        checked={this.isChecked(index)}
                        onChange={this.handleChange}
                        name={this.state.generatedName}
                    />
                    <label className="rainbow-visual-picker_figure" htmlFor={generatedId}>
                        {this.renderContent(item)}
                        {this.renderFooter(item)}
                        <span className="rainbow-visual-picker_icon-container rainbow-visual-picker_text-check">
                            {this.renderDoneIcon(index)}
                        </span>
                    </label>
                </div>
            );
        });
    }

    render() {
        const { multiple, style, selectedItems } = this.props;

        if (selectedItems.length > 1 && !multiple) {
            console.warn('When multiple selection is not enabled only one item can be selected'); // eslint-disable-line
        }

        return (
            <fieldset className={getContainerClassName()} style={style}>
                {this.renderLabel()}
                <div className="rainbow-visual-picker_fieldset-items-container">
                    {this.renderVisualPickerItems()}
                </div>
            </fieldset>
        );
    }
}

VisualPicker.propTypes = {
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** If is set to true the visual picker will be disabled */
    disabled: PropTypes.bool,
    /** It is an array of objects with the items to show */
    items: PropTypes.arrayOf(PropTypes.object),
    /** The list of indexes for the selected items */
    selectedItems: PropTypes.arrayOf(PropTypes.number),
    /** The title at the top of the component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** It is what will be displayed inside the component. It is a function that
     take the iteration item as argument and return an element */
    Content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** It is what will be displayed at the bottom of the component. It is a function that
     take the iteration item as argument and return an element */
    Footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** If true then a multiple selection is allowed */
    multiple: PropTypes.bool,
    /** The callback fired when a item is selected */
    onChange: PropTypes.func,
};

VisualPicker.defaultProps = {
    disabled: false,
    label: '',
    items: [],
    selectedItems: [],
    Content: null,
    Footer: null,
    multiple: false,
    onChange: () => {},
    className: '',
    style: {},
};
