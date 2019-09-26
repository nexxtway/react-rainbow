import { BaseProps } from './../types';

export interface GoogleAddressLookupProps extends BaseProps {
    apiKey: string;
    label: string | JSX.ElementChildrenAttribute;
    hideLabel?: boolean;
    name?: string;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    error?: string | JSX.ElementChildrenAttribute;
    disabled?: boolean;
    tabIndex?: number | string;
    id?: string;
    // onChange?: ;
    // onClick?: ;
    // onFocus: ;
    // onBlur?: ;
    // searchOptions?: ;
    // value?: ;
}

export default function(props: GoogleAddressLookupProps): JSX.Element | null;
