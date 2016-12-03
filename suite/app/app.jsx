import React from 'react';
import { Container } from 'flux/utils';
import {GlobalHeader, Tree, TreeItem } from './../../entry';
import {AppStyles} from './styles';
import ComponentStore from './flux-infra/ComponentStore';
import { toggleExpandTree } from './flux-infra/LeftNavActions';
import LeftNavStore from './flux-infra/LeftNavStore';

class App extends React.Component {
    static getStores() {
        return [ComponentStore, LeftNavStore];
    }

    static calculateState() {
        return {
            components: ComponentStore.getState().get('components'),
            leftNav: LeftNavStore.getState().get('sessions')
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
                                  onClick={ e => toggleExpandTree('components') }
                                  isExpanded={ this.state.leftNav.getIn(['components', 'isExpanded']) }>
                            { this.renderComponentItems() }
                        </TreeItem>
                    </Tree>
                </div>
                <div style={ AppStyles.content }>
                    { this.props.children }
                </div>
            </div>
        );
    }

    renderComponentItems() {
        let components = Object.keys(this.state.components.toJSON());

        return components.map(componentName => {
            return <TreeItem label={ componentName } level={2} onClick={ ()  => this.props.router.push(`/component/${ componentName }`) } key={ componentName } />;
        });
    }
}

export default Container.create(App);