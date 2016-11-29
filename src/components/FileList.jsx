import React from 'react';
import moment from 'moment';
import { IconSvg } from './Icon.jsx';
import { getFileIconNameFromFile } from './libs/files';

export default class FileList extends React.Component {
    render() {
        return (
            <ul className="slds-has-dividers--bottom-space">
                { this.renderFiles() }
            </ul>
        );
    }

    renderFiles() {
        return this.props.files.map((file, index) => {
            return (
                <li className="slds-item" key={ index }>
                    <div className="slds-tile slds-media">
                        <div className="slds-media__figure">
                            <IconSvg iconName={ getFileIconNameFromFile(file) }/>
                        </div>
                        <div className="slds-media__body">
                            <h3 className="slds-truncate" title="SLDS_038.zip">
                                <a href={ file.href || 'javascript:void(0);' } target="_black">{ file.name }</a>
                            </h3>
                            <div className="slds-tile__detail slds-text-body--small">
                                <ul className="slds-list--horizontal slds-has-dividers--right">
                                    <li className="slds-item">{ moment(file.lastModifiedDate || file.created_at).format('MMM DD, YYYY')}</li>
                                    <li className="slds-item">{ this.renderSize(file) }</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            );
        })
    }

    renderSize(file) {
        let size = file.size;
        let format = Intl.NumberFormat().format;

        return  size / 1048576 >= 1 ? `${ format(size / 1048576) } Mb` : `${ format(size / 1024) } Kb`;
    }
}

FileList.PropTypes = {
    files: React.PropTypes.array
};

FileList.defaultProps = {
    files: []
};