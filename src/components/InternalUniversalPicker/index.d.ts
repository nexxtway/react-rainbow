type Value = string[] | string;

export interface InternalUniversalPickerProps {
    value?: Value;
    multiple?: boolean;
    onChange?: (value: Value) => void;
    children?: ReactNode;
}

export default function(props: InternalUniversalPickerProps): JSX.Element | null;
