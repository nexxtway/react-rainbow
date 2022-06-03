/* eslint-disable react/no-unused-prop-types */
import React, { useState, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import Label from '../Input/label';
import RenderIf from '../RenderIf';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import {
    StyledContainer,
    StyledDropzone,
    TruncatedText,
    StyledBackdrop,
    StyledIconContainer,
    StyledButtonIcon,
    StyledInput,
} from './styled';
import { CancelIcon } from './icons';
import { useUniqueIdentifier, useErrorMessageId, useLabelId, useReduxForm } from '../../libs/hooks';
import Icon from './icon';
import getText from './helpers/getText';

const FileSelector = React.forwardRef((props, ref) => {
    const {
        className,
        style,
        id,
        name,
        label,
        error,
        uploadIcon,
        bottomHelpText,
        placeholder,
        tabIndex,
        required,
        multiple,
        disabled,
        variant,
        labelAlignment,
        hideLabel,
        accept,
        onChange,
        onFocus,
        onBlur,
        value,
    } = useReduxForm(props);

    const [isDragOver, setIsDragOver] = useState(false);
    const [files, setFiles] = useState();
    const [hasFocus, setHasFocus] = useState();

    const inputId = useUniqueIdentifier('input');
    const buttonId = useUniqueIdentifier('cancel-button');
    const dropzoneId = useUniqueIdentifier('dropzone');
    const labelId = useLabelId(label);
    const errorMessageId = useErrorMessageId(error);

    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        click: () => {
            inputRef.current.click();
        },
        blur: () => {
            inputRef.current.blur();
        },
    }));

    const clearInput = () => {
        inputRef.current.value = '';
        if (!/safari/i.test(navigator.userAgent)) {
            inputRef.current.type = '';
            inputRef.current.type = 'file';
        }
    };

    const handleDragEnter = () => {
        if (disabled) {
            return;
        }
        setIsDragOver(true);
    };

    const handleDragLeave = event => {
        if (!event.relatedTarget || event.relatedTarget.id !== buttonId) {
            setIsDragOver(false);
        }
    };

    const handleDrop = event => {
        setIsDragOver(false);
        setFiles(event.nativeEvent.dataTransfer.files);
    };

    const handleChange = event => {
        const eventFiles = event.target.files;
        setFiles(eventFiles);
        if (onChange) {
            onChange(eventFiles);
        }
    };

    const handleCancel = event => {
        event.preventDefault();
        event.stopPropagation();

        const list = new DataTransfer();
        setFiles(list.files);
        clearInput();
        if (onChange) {
            onChange(list.files);
        }
    };

    const handleFocus = event => {
        setHasFocus(true);
        onFocus(event);
    };

    const handleBlur = event => {
        setHasFocus(false);
        onBlur(event);
    };

    const text = getText(files, placeholder, value);
    const isFileSelected = files && files.length > 0;
    const isSingleFile = files && files.length === 1;
    const shouldRenderCancel = isFileSelected && !isDragOver && value !== null;

    return (
        <StyledContainer id={id} className={className} style={style}>
            <Label
                label={label}
                labelAlignment={labelAlignment}
                hideLabel={hideLabel}
                required={required}
                inputId={inputId}
                id={labelId}
            />
            <StyledDropzone
                id={dropzoneId}
                variant={variant}
                isDragOver={isDragOver}
                hasFocus={hasFocus}
                disabled={disabled}
                error={error}
            >
                <StyledInput
                    type="file"
                    id={inputId}
                    name={name}
                    multiple={multiple}
                    disabled={disabled}
                    required={required}
                    onChange={handleChange}
                    tabIndex={tabIndex}
                    accept={accept}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    aria-labelledby={labelId}
                    aria-describedby={errorMessageId}
                    ref={inputRef}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                />
                <StyledBackdrop isFileSelected={isFileSelected} variant={variant}>
                    <StyledIconContainer
                        iconPosition="left"
                        isSingleFile={isSingleFile}
                        variant={variant}
                        error={error}
                        disabled={disabled}
                    >
                        <Icon
                            files={files}
                            error={error}
                            isDragOver={isDragOver}
                            value={value}
                            uploadIcon={uploadIcon}
                        />
                    </StyledIconContainer>
                    <TruncatedText>{text}</TruncatedText>
                    <RenderIf isTrue={shouldRenderCancel}>
                        <StyledIconContainer iconPosition="right">
                            <StyledButtonIcon
                                id={buttonId}
                                size="xx-small"
                                icon={<CancelIcon />}
                                onClick={handleCancel}
                                pickerVariant={variant}
                            />
                        </StyledIconContainer>
                    </RenderIf>
                </StyledBackdrop>
            </StyledDropzone>
            <RenderIf isTrue={bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={error}>
                <ErrorText alignSelf="center" id={errorMessageId}>
                    {error}
                </ErrorText>
            </RenderIf>
        </StyledContainer>
    );
});

FileSelector.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The name of the input. */
    name: PropTypes.string,
    /** Text label for the input. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The icon shown in the FileSelector. In case of not being specified, a cloud icon will be shown by default. */
    uploadIcon: PropTypes.node,
    /** Shows the help message below the input. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that multiple files can be picked. */
    multiple: PropTypes.bool,
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that the variant of the file selector. */
    variant: PropTypes.oneOf(['inline', 'multiline']),
    /** Describes the position of the FileSelector label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the FileSelector label. */
    hideLabel: PropTypes.bool,
    /** A string that defines the file types the file input should accept. */
    accept: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** A null value that prevents the icon from changing after a file is loaded  */
    value: PropTypes.object,
};

FileSelector.defaultProps = {
    className: undefined,
    style: undefined,
    id: undefined,
    name: undefined,
    label: undefined,
    error: undefined,
    uploadIcon: undefined,
    bottomHelpText: undefined,
    placeholder: 'Drag & Drop or Click to Browse',
    tabIndex: undefined,
    required: false,
    multiple: false,
    disabled: false,
    variant: 'inline',
    labelAlignment: 'center',
    hideLabel: false,
    accept: undefined,
    value: undefined,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
};

export default FileSelector;
