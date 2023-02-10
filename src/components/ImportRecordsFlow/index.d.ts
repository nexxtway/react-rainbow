import { BaseProps } from '../types';

interface CompleteValue {
    collection?: string;
    actionType?: symbol;
    mergeByKey?: string;
    data?: object[];
}

export type ValidationErrorObject = Record<string, string>;

export interface ImportRecordsFlowProps<T extends Record<string, unknown>> extends BaseProps {
    schema?: {
        collection?: string;
        attributes?: object;
    };
    isOpen?: boolean;
    onRequestClose?: () => void;
    onComplete?: (value: CompleteValue) => void;
    actionType?: 'add-records';
    validateRecordFn?: (record: T) => ValidationErrorObject;
}

export default function(props: ImportRecordsFlowProps): JSX.Element | null;
