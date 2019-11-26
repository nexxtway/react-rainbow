import styled from 'styled-components';
import { BORDER_RADIUS_1 } from '../../../styles/borderRadius';
import { SHADOW_4 } from '../../../styles/shadows';

const StyledImagesUl = styled.ul`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    border-radius: ${BORDER_RADIUS_1};
    border: 1px solid #dddbda;
    box-shadow: ${SHADOW_4};
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;

    :active,
    :focus {
        color: inherit;
        text-decoration: inherit;
        box-shadow: ${SHADOW_OUTLINE_2};
        outline: none;
    }
`;

export default StyledImagesUl;
