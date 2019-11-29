import styled from 'styled-components';
import { COLOR_WHITE, COLOR_BRAND, COLOR_GRAY_4, COLOR_GRAY_2 } from '../../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../../styles/fontSizes';

const StyledTh = styled.th`
    text-transform: uppercase;
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    font-weight: 900;
    color: ${COLOR_GRAY_4};
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
        .rainbow-table_header-container {
            background-color: ${COLOR_WHITE};
            border-color: ${COLOR_BRAND};
        }

        .rainbow-table_header-content {
            color: ${COLOR_BRAND};
        }

        .rainbow-table_header-arrow {
            visibility: visible;
        }

        .rainbow-table_header-resize-bar,
        &:hover .rainbow-table_header-resize-bar {
            background-color: ${COLOR_BRAND};
        }

        &:hover .rainbow-table_header-container {
            border-color: ${COLOR_BRAND};
        }
    }

    ${props =>
        props.isResizable &&
        `
            cursor: pointer;

            &:hover {
                > div {
                    background-color: ${COLOR_WHITE};
                }

                .rainbow-table_header-resize-bar {
                    background-color: ${COLOR_GRAY_2};
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
                    background-color: ${COLOR_WHITE};
                }
            
                .rainbow-table_header-resize-bar {
                    background-color: ${COLOR_GRAY_2};
                }
            
                .rainbow-table_header-container {
                    border-color: ${COLOR_GRAY_2};
                }
            
                .rainbow-table_header-arrow {
                    visibility: visible;
                    margin-left: 12px;
                }
            }
        `};
    ${props =>
        props.isSorted &&
        `
            .rainbow-table_header-arrow {
                visibility: visible;
                margin-left: 12px;
            }
        
            .rainbow-table_header-arrow > g {
                fill: #576574;
            }
        
            :focus {
                .rainbow-table_header-arrow > g {
                    fill: #01b6f5;
                }
            }
        `};
`;

export default StyledTh;
