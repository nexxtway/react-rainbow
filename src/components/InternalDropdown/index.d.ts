import { ReactNode } from 'react';
import { BaseProps } from '../types';

interface DropdownValue {
    label?: string;
    name?: string | number;
    icon?: ReactNode;
    value?: any;
}

export interface InternalDropdownProps extends BaseProps {
    /** The id of the outer element. */
    id?: string;
    /** If is set to true, then is showed a loading symbol. */
    isLoading?: boolean;
    /** The content of the InternalDropdown. Used to render the options
     * passed. */
    children?: ReactNode;
    /** Specifies the selected value of the InternalDropdown. Must have a name which identifies de selected option.
     * Also it can have whatever other key value pairs you want.
     */
    value?: DropdownValue | Array<DropdownValue>;
    /** The action triggered when click/select an option. */
    onChange?: (value: DropdownValue | Array<DropdownValue>) => void;
    /** If is set to true, then a search input to filter is showed. */
    enableSearch?: boolean;
    /** Specifies that multiple items can be selected */
    multiple?: boolean;
    /** Show checkbox */
    showCheckbox?: boolean;
    /** The text to show on the header when showCheckbox is true */
    placeholder?: string;
    /** Action triggered when search query changes */
    onSearch?: (query: string) => void;
    /** When true, the onSearch callback will be debounced */
    debounce?: boolean;
    /** A component that is displayed when no search matches are found */
    emptyComponent?: ReactNode;
    /** The border radius of the container. Valid values are square, semi-square, semi-rounded and rounded. This value defaults to rounded. */
    borderRadius?: 'square' | 'semi-square' | 'semi-rounded' | 'rounded';
}
