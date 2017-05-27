import React from 'react';
import uniqueId from './libs/uniqueId';

export default class Select extends React.Component {
    render() {
        let selectUniqueId = uniqueId('select');
        return (
            <div className="slds-form-element">
                <label className="slds-form-element__label" htmlFor={ selectUniqueId }>
                    { this.props.required ? <abbr className="slds-required" title="required">*</abbr> : null }
                    { this.props.label }
                </label>
                <div className="slds-form-element__control">
                    <div className="slds-select_container">
                        <select id={ selectUniqueId }
                                className="slds-select"
                                name={ this.props.name }
                                required={ this.props.required }
                                disabled={ this.props.disabled }
                                onChange={ (e) => this.handleOnChange(e) }
                                value={ this.props.value }>
                            { this.props.children }
                            { this.props.options ? this.renderOptions() : null }
                        </select>
                    </div>
                </div>
            </div>
        );
    }

    handleOnChange(e) {
        this.props.onChange && this.props.onChange(e);
    }

    renderOptions() {
        return this.props.options.map((option) => {
            let value = typeof option === 'string' ? option : option.value;
            let label = option.label || value;

            return <option value={ value }>{ label }</option>
        })
    }
}

Select.PropTypes = {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.object,
    onChange: React.PropTypes.func,
    options: React.PropTypes.array,
    required: React.PropTypes.bool,
    disabled: React.PropTypes.bool
}