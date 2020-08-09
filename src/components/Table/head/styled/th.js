import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../../styles/fontSizes';

const StyledTh = attachThemeAttrs(styled.th)`
    text-transform: uppercase;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 900;
    color: ${props => props.palette.text.title};
    line-height: normal;
    white-space: nowrap;
    position: static;
    padding: 0;
    border-top: 0;
    box-sizing: border-box;

    &:first-of-type .rainbow-table_header-container {
        padding-left: 18px;
    }

    :focus {
        outline:none;

        .rainbow-table_header-container {
            background-color: ${props => props.palette.background.main};
            border-color: ${props => props.palette.brand.main};
            color: ${props => props.palette.brand.main};
        }

        .rainbow-table_header-arrow {
            visibility: visible;
        }

        .rainbow-table_header-resize-bar,
        &:hover .rainbow-table_header-resize-bar {
            background-color: ${props => props.palette.brand.main};
        }

        &:hover .rainbow-table_header-container {
            border-color: ${props => props.palette.brand.main};
        }
    }

    ${props =>
        props.isResizable &&
        `
            cursor: pointer;

            &:hover {
                > div {
                    background-color: ${props.palette.background.main};
                }

                .rainbow-table_header-resize-bar {
                    background-color: ${props.palette.border.divider};
                }

                .rainbow-table_header-container {
                    border-color: transparent;
                    border-right-color: transparent;
                }
            }
        `};
    ${props =>
        props.sortable &&
        `
            cursor: pointer;

            :hover {
                > div {
                    background-color: ${props.palette.background.main};
                }
            
                .rainbow-table_header-resize-bar {
                    background-color: ${props.palette.border.divider};
                }
            
                .rainbow-table_header-container {
                    border-color: ${props.palette.border.divider};
                }
            
                .rainbow-table_header-arrow {
                    visibility: visible;
                    margin-left: 12px;
                }
            }
        `};

        ${props =>
            props.variant === 'listview' &&
            `
            :hover {
                > div, .rainbow-table_header-resize-bar {
                    background-color: transparent;
                }

                :first-child * {
                    border-top-left-radius: 13px; 
                    border-bottom-left-radius: 13px;
                }

                :last-child * {
                    border-bottom-right-radius: 13px; 
                    border-top-right-radius: 13px; 
                }
            }

            :focus {
        
                .rainbow-table_header-container {
                    background-color: transparent;
                    border-color: transparent;
                }

                .rainbow-table_header-resize-bar,
                &:hover .rainbow-table_header-resize-bar {
                    background-color: transparent;
                    border-color: transparent;
                }
        
                &:hover .rainbow-table_header-container {
                    background-color: transparent;
                    border-color: transparent;
                }
            }
        `}

    ${props =>
        props.isSorted &&
        `
            .rainbow-table_header-arrow {
                visibility: visible;
                margin-left: 12px;
            }
        `};
`;

export default StyledTh;
