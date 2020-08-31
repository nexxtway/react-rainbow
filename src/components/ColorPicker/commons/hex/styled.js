import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import Input from '../../../Input';
import { CssInput } from '../styled';

export const StyledHexInput = styled(Input)`
    input {
        ${CssInput}
        padding: 0 0.7rem 0 1rem;

        :focus,
        :active {
            padding: 0 0.65625rem 0 0.9375rem;
        }
    }

    > div > span {
        left: 0.2rem;
    }
`;

export const StyledHexColorIcon = attachThemeAttrs(styled.span)`
    font: inherit;
    line-height: 2.5rem;
    font-size: 1rem;
`;
