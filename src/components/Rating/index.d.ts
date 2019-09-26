import { BaseProps } from './../types';

export interface RatingProps extends BaseProps {
    label?: string | JSX.ElementChildrenAttribute;
    value?: string;
    // onChange?: ;
    name?: string;
}

declare const Rating: React.ComponentType<RatingProps>;
export default Rating;
