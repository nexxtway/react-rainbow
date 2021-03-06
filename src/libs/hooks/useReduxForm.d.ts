import { SyntheticEvent, FocusEvent } from 'react';

type FormProps = {
    name?: string;
    onBlur?: (event: SyntheticEvent<FocusEvent>) => void;
    onChange?: (event: SyntheticEvent<InputEvent>) => void;
    onFocus?: (event: SyntheticEvent<FocusEvent>) => void;
    value?: any;
    error?: any;
    dirty?: boolean;
};

declare function useReduxForm<T>(props: T): FormProps & T;
export default useReduxForm;
