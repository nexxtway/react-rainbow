import { BaseProps } from '../types';

interface CompleteValue {
    collection?: string;
    actionType?: symbol;
    mergeByKey?: string;
    data?: object[];
}

export interface ImportRecordsFlowProps extends BaseProps {
    schema?: {
        collection?: string;
        attributes?: object;
    };
    isOpen?: boolean;
    onRequestClose?: () => void;
    onComplete?: (value: CompleteValue) => void;
    actionType?: 'add-records';
}

export default function(props: ImportRecordsFlowProps): JSX.Element | null;
