import React from 'react';
import Icon from './../Icon.jsx';
import { getFileIconNameFromUrl } from './../libs/files';

export default class UrlOpenDownload extends React.Component {
    render() {
        return (
            <span>
                <Icon iconName={ getFileIconNameFromUrl(this.props.value) } iconSize="small"/>
                <a target="_black" href={ this.props.value } style={{ marginLeft: 5 }}>Open</a>
                <a download="true" href={ this.props.value } style={{ marginLeft: 5 }}>Download</a>
            </span>
        );            
    }
}