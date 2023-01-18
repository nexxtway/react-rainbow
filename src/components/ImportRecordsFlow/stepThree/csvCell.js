import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../ButtonIcon';
import Plus from '../icons/plus';
import Pencil from '../icons/pencil';
import RenderIf from '../../RenderIf';
import { CellContainer, StyledCVSFieldContainer } from './styled/cvsFieldContainer';
import StyledCancelIcon from './styled/cancelIcon';

export default function CSVCell(props) {
    const { onClick, row, value } = props;

    return (
        <CellContainer>
            <RenderIf isTrue={value}>
                {value}
                <ButtonIcon
                    variant="outline-brand"
                    onClick={() => onClick(row.databaseField)}
                    icon={<Pencil />}
                    size="small"
                />
            </RenderIf>
            <RenderIf isTrue={!value}>
                <StyledCVSFieldContainer>
                    <StyledCancelIcon />
                    Not assigned yet
                </StyledCVSFieldContainer>
                <ButtonIcon
                    variant="outline-brand"
                    onClick={() => onClick(row.databaseField)}
                    icon={<Plus />}
                    size="small"
                />
            </RenderIf>
        </CellContainer>
    );
}

CSVCell.propTypes = {
    onClick: PropTypes.func,
    row: PropTypes.object.isRequired,
    value: PropTypes.string,
};

CSVCell.defaultProps = {
    onClick: () => {},
    value: undefined,
};
