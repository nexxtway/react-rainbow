import { ReactNode, MouseEvent } from 'react';
import { BaseProps, LookupValue } from '../types';

interface MatchedSubstringsShape {
    length?: number;
    offset?: number;
}

interface StructuredFormattingShape {
    main_text?: string;
    main_text_matched_substrings?: MatchedSubstringsShape[];
    secondary_text?: string;
}

interface TermsShape {
    offset?: number;
    value?: string;
}

interface PredictionShape {
    description?: string;
    matched_substrings?: MatchedSubstringsShape[];
    place_id?: string;
    structured_formatting?: StructuredFormattingShape[];
    terms?: TermsShape[];
    types?: string[];
}

interface AddressComponentsShape {
    long_name?: string;
    short_name?: string;
    types?: string[];
}

interface AspectsRatingShape {
    rating?: number;
    type?: string;
}

interface GeometryShape {
    location?: {
        lat: number;
        lng: number;
    };
    viewport?: {
        south: number;
        west: number;
        north: number;
        east: number;
    };
}

interface PhotosShape {
    height?: number;
    width?: number;
    html_attributions?: string[];
    photo_reference?: string;
}

interface ReviewsShape {
    aspects?: AspectsRatingShape[];
    author_name?: string;
    author_url?: string;
    language?: string;
    text?: string;
}

interface PlaceDetailsShape {
    address_components?: AddressComponentsShape[];
    aspects?: AspectsRatingShape[];
    formatted_address?: string;
    formatted_phone_number?: string;
    geometry?: GeometryShape;
    html_attributions?: string[];
    icon?: string;
    international_phone_number?: string;
    name?: string;
    permanently_closed?: boolean;
    photos?: PhotosShape[];
    place_id?: string;
    price_level?: number;
    rating?: number;
    reviews?: ReviewsShape[];
    types?: string[];
    url?: string;
    vicinity?: string;
    website?: string;
    predictionInfo?: PredictionShape;
}

interface RequiredLocation {
    latitude: number;
    longitude: number;
}

interface SearchOptionsShape {
    bounds?: {
        sw: RequiredLocation;
        ne: RequiredLocation;
    };
    country?: string[] | string;
    location?: RequiredLocation;
    radius?: number;
    types?: string[];
}

export interface GoogleAddressLookupProps extends BaseProps {
    apiKey: string;
    label?: ReactNode;
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
    onChange?: (value: null | string | PredictionShape | PlaceDetailsShape) => void;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    onBlur?: (event: null | LookupValue) => void;
    searchOptions?: SearchOptionsShape;
}

export default function(props: GoogleAddressLookupProps): JSX.Element | null;
