import styled from 'styled-components';
import Label from '../../Input/label/labelText';

const labelAlignmentMap = {
    left: 'left',
    center: 'center',
    right: 'right',
};
const StyledLabel = styled(Label)`
    padding-left: 0;
    padding-right: 0;
    text-align: ${props =>
        Object.prototype.hasOwnProperty.call(labelAlignmentMap, props.labelAlignment)
            ? props.labelAlignment
            : 'left'};
`;

export default StyledLabel;
