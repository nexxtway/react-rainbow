import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
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
import getIcon from './helpers/getIcon';
import getText from './helpers/getText';

const FileSelector = React.forwardRef((props, ref) => {
    const {
        className,
        style,
        id,
        name,
        label,
        error,
        bottomHelpText,
        placeholder,
        tabIndex,
        required,
        multiple,
        disabled,
        variant,
        hideLabel,
        accept,
        onChange,
        onFocus,
        onBlur,
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

    useEffect(() => {
        inputRef.current.files = files;
    }, [files]);

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

    const icon = getIcon(files, error, isDragOver);
    const text = getText(files, placeholder);

    const isFileSelected = files && files.length > 0;
    const isSingleFile = files && files.length === 1;
    const shouldRenderCancel = variant === 'inline' && isFileSelected && !isDragOver;

    return (
        <StyledContainer id={id} className={className} style={style}>
            <Label
                label={label}
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
                    >
                        {icon}
                    </StyledIconContainer>
                    <TruncatedText>{text}</TruncatedText>
                    <RenderIf isTrue={shouldRenderCancel}>
                        <StyledIconContainer iconPosition="right">
                            <StyledButtonIcon
                                id={buttonId}
                                size="xx-small"
                                icon={<CancelIcon />}
                                onClick={handleCancel}
                            />
                        </StyledIconContainer>
                    </RenderIf>
                </StyledBackdrop>
            </StyledDropzone>
            <RenderIf isTrue={!!bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
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
    /** Shows the help message below the input. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
    /** A boolean to hide the input label. */
    hideLabel: PropTypes.bool,
    /** A string that defines the file types the file input should accept. */
    accept: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
};

FileSelector.defaultProps = {
    className: undefined,
    style: undefined,
    id: undefined,
    name: undefined,
    label: undefined,
    error: undefined,
    bottomHelpText: undefined,
    placeholder: 'Drag & Drop or Click to Browse',
    tabIndex: undefined,
    required: false,
    multiple: false,
    disabled: false,
    variant: 'inline',
    hideLabel: false,
    accept: undefined,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
};

export default FileSelector;
