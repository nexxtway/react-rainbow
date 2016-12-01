import React from 'react';
import {GlobalHeader, Tree, TreeItem } from './../../entry';
import {AppStyles} from './styles';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    render() {
        return (
            <div>
                <GlobalHeader logo={ <img src="assets/images/logo-noname.svg" alt="" /> }/>
                <div style={ AppStyles.leftNav }>
                    <Tree>
                        <TreeItem label="Components" level={1}
                                  isToggle={ true }
                                  onClick={ e => this.setState({ isExpanded: !this.state.isExpanded })}
                                  isExpanded={ this.state.isExpanded }>
                            <TreeItem label="Button" level={2} onClick={ ()  => this.props.router.push('/component/Button') }/>
                            <TreeItem label="Badge" level={2} onClick={ () => this.props.router.push('/component/Badge') }/>
                        </TreeItem>
                    </Tree>
                </div>
                <div style={ AppStyles.content }>
                    { this.props.children }
                </div>
            </div>
        );
    }
}