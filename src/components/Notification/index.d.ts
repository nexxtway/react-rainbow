import { BaseProps } from './../types';

export interface NotificationProps extends BaseProps {
    // icon?: ;
    title?: string | JSX.ElementChildrenAttribute;
    description?: string | JSX.ElementChildrenAttribute;
    hideCloseButton?: boolean;
    // onRequestClose?: ;
}

export default function(props: NotificationProps): JSX.Element | null;
