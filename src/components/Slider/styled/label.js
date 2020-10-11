import styled from 'styled-components';
import Label from '../../Input/label/labelText';

const StyledLabel = styled(Label)`
    margin-left: 0;
    margin-right: 0;

    ${props =>
        props.hideLabel &&
        `
            position: absolute !important;
            margin: -1px !important;
            border: 0 !important;
            padding: 0 !important;
            width: 1px !important;
            height: 1px !important;
            overflow: hidden !important;
            clip: rect(0 0 0 0) !important;
            text-transform: none !important;
            white-space: nowrap !important;
        `};
`;

export default StyledLabel;
