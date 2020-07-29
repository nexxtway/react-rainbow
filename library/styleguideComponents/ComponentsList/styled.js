import styled from 'styled-components';
import StartupIcon from './icons/startupIcon';
import attachThemeAttrs from '../../../src/styles/helpers/attachThemeAttrs';
import Input from '../../../src/components/Input';
import Button from '../../../src/components/Button';

export const Icon = styled(StartupIcon)`
    width: 26px;
    height: 26px;
`;

export const StyledButton = attachThemeAttrs(styled.button)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18px 8px 8px 8px;
    margin: 0 auto;
    border: none;
    background: transparent;
    border-radius: 12px;
    font-size: 0.75rem;
    color: ${props => props.palette.text.header};
    letter-spacing: -0.2px;
    text-align: center;
    font-family: 'Lato Regular', Arial, sans-serif;

    :hover,
    :active,
    :focus {
        background-color: ${props => props.palette.action.hover};
        outline: 0;
        color: ${props => props.palette.text.label};
    }
`;

export const Dropdown = attachThemeAttrs(styled.div)`
    background-color: ${props => props.palette.background.main};
    box-shadow: 0 0 8px 0 rgba(170, 174, 178, 0.56);
    border-radius: 18px;
    padding: 20px 32px;
    overflow-y: auto;
    transition: all 0.05s ease;

    @media (max-width: 600px) {
        width: 100vw;
        height: 100vh;
        padding: 20px 16px;
    }
`;

export const FormTitle = attachThemeAttrs(styled.h1)`
    color: ${props => props.palette.brand.main};
    font-size: 24px;
    text-align: center;
    font-family: 'Lato', Arial, sans-serif;
    margin: 8px 0;
`;

export const FormSubtitle = attachThemeAttrs(styled.h2)`
    color: ${props => props.palette.text.header};
    font-size: 16px;
    text-align: center;
    font-family: 'Lato', Arial, sans-serif;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 640px;
    transition: all 0.05s ease;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
        margin-bottom: 0;
    }
`;

export const SmallInput = styled(Input)`
    width: 49%;

    @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const EmailInput = styled(SmallInput)`
    & span > svg {
        height: 40px !important;
        width: 40px !important;
    }

    & input {
        padding-left: 44px;

        :focus,
        :active {
            padding-left: 43px;
        }
    }
`;

export const NameInput = styled(SmallInput)`
    & span > svg {
        height: 40px !important;
        width: 40px !important;
    }

    & input {
        padding-left: 44px;

        :focus,
        :active {
            padding-left: 43px;
        }
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 8px;
    width: 100%;

    @media (max-width: 600px) {
        width: fit-content;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
`;

export const SendButton = styled(Button)`
    margin-left: 20px;

    @media (max-width: 600px) {
        width: 100%;
        margin-top: 20px;
    }
`;
