import React from 'react';
import PropTypes from 'prop-types';
import PreviewTable from './previewTable';
import CSVDocIcon from '../icons/csv';
import StyledFileCard from './styled/fileCard';
import StyledFileCardContent from './styled/fileCardContent';
import StyledFileCardTitle from './styled/fileCardTitle';
import StyledFileCardDescription from './styled/fileCardDescription';
import StyledButtonIcon from './styled/buttonIcon';
import StyledIcon from './styled/icon';

export default function Preview(props) {
    const { fileName, fileType, columns, data, isLoading, onRemoveFile } = props;
    const previewData = data.slice(0, 5);
    const name = fileName || 'Unknow File Name';
    const type = fileType || 'Unknow File Type';

    return (
        <div>
            <StyledFileCard>
                <CSVDocIcon />
                <StyledFileCardContent>
                    <StyledFileCardTitle title={name}>{name}</StyledFileCardTitle>
                    <StyledFileCardDescription>{type}</StyledFileCardDescription>
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
