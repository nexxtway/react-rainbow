import React from 'react';
import classnames from 'classnames';
import InputError from './InputError.jsx';
import { IconSvg } from './Icon.jsx';

export default class InputFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasDragOver: false
        }
    }

    render() {
        let dragZoneClasses = classnames('slds-file-selector__dropzone', {
            'slds-has-drag-over': this.state.hasDragOver && !this.props.disabled
        });
        let inputContainerClasses = classnames('slds-form-element', { 'slds-has-error' : this.state.hasError });

        return (
            <div className={ inputContainerClasses } onDrop={ (e) => this.handleDropEvent(e) } >
                <span className="slds-form-element__label">
                    { this.props.required ? <abbr className="slds-required" title="required">*</abbr> : null }
                    { this.props.label }
                </span>
                <div className="slds-form-element__control">
                    <div className="slds-file-selector slds-file-selector--files"
                         onDragLeave={ () => this.setState({ hasDragOver: false }) }
                         onDragOver={ () => this.setState({ hasDragOver: true }) }>
                        <div className={ dragZoneClasses }>
                            {/* input */}
                            <input className="slds-file-selector__input slds-assistive-text"
                                   ref={ (input) => this.input = input }
                                   type="file"
                                   name={ this.props.name }
                                   id={ this.props.id }
                                   multiple={ this.props.multiple }
                                   onChange={ (e) => this.handleOnChange(e) }
                                   required={ this.props.required }
                                   disabled={ this.props.disabled }
                                   aria-describedby="file-selector-id" />
                            {/* label */}
                            <label className="slds-file-selector__body" htmlFor={ this.props.id }>
                                <span className="slds-file-selector__button slds-button slds-button--neutral">
                                    <IconSvg iconName="utility:upload" className="slds-button__icon slds-button__icon--left"/>
                                    Upload Files
                                </span>
                                <span className="slds-file-selector__text slds-medium-show">or Drop Files</span>
                            </label>
                        </div>
                    </div>
                </div>
                <InputError isVisible={ !this.props.isValid } message="The field is invalid"/>
            </div>
        );
    }

    handleOnChange(e) {
        this.props.onChange && this.props.onChange(e);
    }

    handleDropEvent(e) {
        this.setState({ hasDragOver: false });
        if (this.props.disabled) return;

        let hasFiles = !!e.dataTransfer.files.length;
        let meetsMultipleCriteria = this.props.multiple || e.dataTransfer.files.length > 1;

        if (hasFiles && meetsMultipleCriteria) {
            this.input.files = e.dataTransfer.files;
        }
    }
}

InputFile.PropTypes = {
    multiple: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired
};

InputFile.defaultProps = {
    multiple: true
};

