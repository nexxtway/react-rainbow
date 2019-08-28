import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import XLSX from 'xlsx';
import Modal from '../Modal';
import getDataFromWorkbook from './helpers/getDataFromWorkbook';
import getHeaderRowFromWorkbook from './helpers/getHeaderRowFromWorkbook';
import getDataToImport from './helpers/getDataToImport';
import isStepThreeNextButtonDisabled from './helpers/isStepThreeNextButtonDisabled';
import Footer from './footer';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import StepFour from './stepFour';
import './styles.css';

const stepNames = ['step-1', 'step-2', 'step-3', 'step-4'];

const stepsMap = {
    'step-1': StepOne,
    'step-2': StepTwo,
    'step-3': StepThree,
    'step-4': StepFour,
};

const modalTitleMap = {
    'step-1': 'Whats do you want to do?',
    'step-2': 'Select Data File',
    'step-3': 'Assign Fields',
    'step-4': 'Review and Start Import',
};

function EmptyComponent() {
    return null;
}

const ADD_RECORDS = Symbol('add-records');
const MERGE_RECORDS = Symbol('merge-records');

/**
 * @category Experiences
 */

function ImportRecordsFlow(props) {
    const { className, style, isOpen, onRequestClose, schema, onComplete } = props;
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [actionOption, setActionOption] = useState('');
    const [matchField, setMatchField] = useState('default');
    const [fileName, setFileName] = useState('');
    const [fileType, setFileType] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasFileSelected, setHasFileSelected] = useState(false);
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);
    const [fieldsMap, setFieldsMap] = useState({});
    const [schemaFields, setSchemaFields] = useState([]);

    const isBackButtonDisabled = currentStepIndex === 0;
    const currentStep = stepNames[currentStepIndex];
    const StepComponent = stepsMap[currentStep] || EmptyComponent;

    const removeFile = () => {
        setHasFileSelected(false);
        setFileName('');
        setFileType('');
        setData([]);
        setColumns([]);
        setFieldsMap({});
    };

    useEffect(() => {
        setSchemaFields(Object.keys(schema.attributes));
    }, [schema.attributes]);

    const prevIsOpen = useRef(isOpen);
    useEffect(() => {
        if (prevIsOpen.current && !isOpen) {
            setCurrentStepIndex(0);
            removeFile();
            setActionOption('');
            setMatchField('default');
        }
        prevIsOpen.current = isOpen;
    }, [isOpen]);

    const getModalTitle = () => {
        if (currentStepIndex === 1 && hasFileSelected) {
            return 'Your File Preview';
        }
        return modalTitleMap[currentStep];
    };

    const goBackStep = () => {
        if (currentStepIndex > 0) {
            const prevStepIndex = currentStepIndex - 1;
            setCurrentStepIndex(prevStepIndex);
        }
    };

    const goNextStep = () => {
        if (currentStepIndex === 3) {
            onComplete(
                getDataToImport({
                    data,
                    fieldsMap,
                    schema,
                    actionOption,
                    matchField,
                }),
            );
        }
        if (currentStepIndex < stepNames.length - 1) {
            const nextStepIndex = currentStepIndex + 1;
            setCurrentStepIndex(nextStepIndex);
        }
    };

    const isNextButtonDisabled = () => {
        if (currentStepIndex === 0) {
            return !actionOption || (actionOption === 'merge-records' && matchField === 'default');
        }
        if (currentStepIndex === 1) {
            return !hasFileSelected || isLoading;
        }
        if (currentStepIndex === 2) {
            return isStepThreeNextButtonDisabled({
                fieldsMap,
                attributes: schema.attributes,
                matchField,
            });
        }
        return false;
    };

    const processFile = file => {
        const { name, type } = file;
        setFileName(name);
        setFileType(type);
        setIsLoading(true);
        setHasFileSelected(true);
        const reader = new FileReader();
        reader.onload = event => {
            const uInt8ArrayData = new Uint8Array(event.target.result);
            const workbook = XLSX.read(uInt8ArrayData, { type: 'array', raw: true });
            setColumns(getHeaderRowFromWorkbook(workbook));
            setData(getDataFromWorkbook(workbook));
            setIsLoading(false);
        };
        reader.readAsArrayBuffer(file);
    };

    const assignField = (databaseFieldToAssign, fileFieldsToAssign) => {
        setFieldsMap({
            ...fieldsMap,
            [databaseFieldToAssign]: fileFieldsToAssign.join(','),
        });
    };

    return (
        <Modal
            className={className}
            style={style}
            title={getModalTitle()}
            size="medium"
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            footer={
                <Footer
                    onBack={goBackStep}
                    onNext={goNextStep}
                    currentStep={currentStep}
                    isBackButtonDisabled={isBackButtonDisabled}
                    isNextButtonDisabled={isNextButtonDisabled()}
                />
            }
        >
            <StepComponent
                schemaFields={schemaFields}
                attributes={schema.attributes}
                actionOption={actionOption}
                onChangeAction={setActionOption}
                matchField={matchField}
                onChangeMatchField={setMatchField}
                onProcessFile={processFile}
                fileName={fileName}
                fileType={fileType}
                isLoading={isLoading}
                hasFileSelected={hasFileSelected}
                columns={columns}
                data={data}
                onRemoveFile={removeFile}
                onAssignField={assignField}
                fieldsMap={fieldsMap}
            />
        </Modal>
    );
}

ImportRecordsFlow.propTypes = {
    schema: PropTypes.shape({
        collection: PropTypes.string,
        attributes: PropTypes.object,
    }).isRequired,
    /** Returns true when the modal is open, false otherwise. */
    isOpen: PropTypes.bool,
    /** The action triggered when the close buttonIcon is clicked. */
    onRequestClose: PropTypes.func,
    /** The action triggered when the ImportRecordsFlow is completed. */
    onComplete: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

ImportRecordsFlow.defaultProps = {
    className: '',
    style: {},
    isOpen: false,
    onRequestClose: () => {},
    onComplete: () => {},
    schema: {},
};

ImportRecordsFlow.MERGE_RECORDS = MERGE_RECORDS;
ImportRecordsFlow.ADD_RECORDS = ADD_RECORDS;

export default ImportRecordsFlow;
