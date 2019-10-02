import { ReactNode } from 'react';
import { BaseProps } from '../types';

interface PredictionShape {}

interface PlaceDetailsShape {}

export interface GoogleAddressLookupProps extends BaseProps {
    apiKey: string;
    label: ReactNode;
    hideLabel?: boolean;
    value?: string | PredictionShape | PlaceDetailsShape;
    name?: string;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    error?: ReactNode;
    disabled?: boolean;
    tabIndex?: number | string;
    id?: string;
    // onChange?: ;
    // onClick?: ;
    // onFocus: ;
    // onBlur?: ;
    // searchOptions?: ;
}

export default function(props: GoogleAddressLookupProps): JSX.Element | null;
