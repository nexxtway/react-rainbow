import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import ButtonMenu from '../../ButtonMenu';
import MoreIcon from './icons/more';

function MenuItems({ children, rowData }) {
    return React.Children.map(children, (child) => {
        if (isValidElement(child)) {
            return {
                ...child,
                props: {
                    ...child.props,
                    onClick: event => child.props.onClick(event, rowData),
                },
            };
        }
        return null;
    }, null);
}

export default function ActionsCell(props) {
    const {
        columnChildren,
        rowsLength,
        rowIndex,
        rowData,
    } = props;

    if (columnChildren) {
        const getMenuAlignment = () => {
            const menuItemsLength = columnChildren.length || 1;
            const rowLengthToBottom = rowsLength - (rowIndex + 1);
            let alignMenuAtBottom;

            if (rowsLength / 2 > menuItemsLength) {
                alignMenuAtBottom = rowLengthToBottom <= menuItemsLength;
            } else {
                alignMenuAtBottom = rowIndex > menuItemsLength;
            }
            if (alignMenuAtBottom) {
                return 'bottom-right';
            }
            return 'right';
        };

        return (
            <td className="rainbow-table_actions-cell-container" role="gridcell" tabIndex={-1}>
                <div className="rainbow-table_actions-cell">
                    <ButtonMenu
                        tabIndex={-1}
                        icon={<MoreIcon />}
                        menuAlignment={getMenuAlignment()}
                        buttonSize="small">

                        <MenuItems rowData={rowData}>
                            {columnChildren}
                        </MenuItems>
                    </ButtonMenu>
                </div>
            </td>
        );
    }
    return null;
}

ActionsCell.propTypes = {
    columnChildren: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
    rowsLength: PropTypes.number,
    rowIndex: PropTypes.number,
    rowData: PropTypes.object,
};

ActionsCell.defaultProps = {
    columnChildren: undefined,
    rowsLength: undefined,
    rowIndex: undefined,
    rowData: {},
};
