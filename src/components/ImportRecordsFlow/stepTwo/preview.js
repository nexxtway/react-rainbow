import React from 'react';
import PropTypes from 'prop-types';
import Column from '../../Column';
import Spinner from '../../Spinner';
import CSVDocIcon from '../icons/csv';
import StyledSpinnerContainer from './styled/spinnerContainer';
import StyledTable from '../styled/table';
import StyledFileCard from './styled/fileCard';
import StyledFileCardContent from './styled/fileCardContent';
import StyledFileCardTitle from './styled/fileCardTitle';
import StyledFileCardDescription from './styled/fileCardDescription';
import StyledButtonIcon from './styled/buttonIcon';
import StyledIcon from './styled/icon';

function PreviewTable(props) {
    const { columns, data, isLoading } = props;

    if (isLoading) {
        return (
            <StyledSpinnerContainer>
                <Spinner />
            </StyledSpinnerContainer>
        );
    }
    return (
        <StyledTable keyField="id" data={data}>
            {columns.map(col => (
                <Column key={col} header={col} field={col} />
            ))}
        </StyledTable>
    );
}

PreviewTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default function Preview(props) {
    const { fileName, fileType, columns, data, isLoading, onRemoveFile } = props;
    const previewData = data.slice(0, 5);

    return (
        <div>
            <StyledFileCard>
                <CSVDocIcon />
                <StyledFileCardContent>
                    <StyledFileCardTitle title={fileName}>{fileName}</StyledFileCardTitle>
                    <StyledFileCardDescription>{fileType}</StyledFileCardDescription>
                </StyledFileCardContent>
                <StyledButtonIcon
                    icon={<StyledIcon />}
                    title="Remove file"
                    assistiveText="Remove file"
                    onClick={onRemoveFile}
                />
            </StyledFileCard>
            <PreviewTable columns={columns} data={previewData} isLoading={isLoading} />
        </div>
    );
}

Preview.propTypes = {
    fileName: PropTypes.string,
    fileType: PropTypes.string,
    columns: PropTypes.array,
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    onRemoveFile: PropTypes.func,
};

Preview.defaultProps = {
    fileName: '',
    fileType: '',
    columns: [],
    data: [],
    isLoading: false,
    onRemoveFile: () => {},
};
