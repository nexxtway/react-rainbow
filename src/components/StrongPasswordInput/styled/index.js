import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import lighten from '../../../styles/helpers/color/lighten';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledStrenghtBar = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledStateBar = attachThemeAttrs(styled.div)`
    position: relative;
    flex-grow: 1;
    height: 2px;
    background-color: ${props => props.palette.text.disabled};
    margin: 0.65em;

    ::before {
        content: '';
        position: absolute;
        z-index: 1;
        height: 2px;
        transition-property: all;
        transition-duration: .5s;
        width: 0;
        background-color: ${props => props.palette.error.main}
    }

    ${props =>
        props.passwordState === 'poor' &&
        `
            background-color: ${props.palette.error.light};

            ::before {
                width: 33%;
                background-color: ${props.palette.error.main}
            }
        `}

    ${props =>
        props.passwordState === 'average' &&
        `
            background-color: ${lighten(props.palette.warning.main)};

            ::before {
                width: 66%;
                background-color: ${props.palette.warning.main}
            }
        `}

    ${props =>
        props.passwordState === 'strong' &&
        `
            background-color: ${props.palette.success.light};

            ::before {
                width: 100%;
                background-color: ${props.palette.success.main}
            }
        `}
`;

const StyledStateLabel = attachThemeAttrs(styled.span)`
    margin-right: 0.65em;
    color: ${props => props.palette.text.disabled};

    ${props =>
        props.passwordState === 'poor' &&
        `
            color: ${props.palette.error.main};
        `}

    ${props =>
        props.passwordState === 'average' &&
        `
            color: ${props.palette.warning.main};
        `}

    ${props =>
        props.passwordState === 'strong' &&
        `
            color: ${props.palette.success.main};
        `}
`;

export { StyledContainer, StyledStrenghtBar, StyledStateBar, StyledStateLabel };
