import { BaseProps } from './../types';

export interface VisualPickerOptionFooterProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    description?: string | JSX.ElementChildrenAttribute;
}

export default function(props: VisualPickerOptionFooterProps): JSX.Element | null;
