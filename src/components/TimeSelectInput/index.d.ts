import { ComponentType } from 'react';
import { BaseProps } from '../types';

export interface TimeSelectInputProps extends BaseProps {
    value?: string;
    onChange?: (time: string) => void;
    id?: string;
    hour24?: boolean;
}

declare const TimeSelectInput: ComponentType<TimeSelectInputProps>;
export default TimeSelectInput;
