import React from 'react';
import { Container } from 'flux/utils';
import ComponentStore from './flux-infra/ComponentStore';

class DisplayComponentDemos extends React.Component {
    static getStores() {
        return [ComponentStore]
    }
    
    static calculateState() {
        let storeState = ComponentStore.getState();

        return {
            components: storeState.get('components')
        }    
    }
    
    render() {
        let componentName = this.props.routeParams.name;
        let currentDemos = this.state.components.get(componentName);

        return (
            <div className="demos-container">
                { this.renderDemos(currentDemos) }
            </div>
        )
    }

    renderDemos(currentDemos) {
        return currentDemos ? currentDemos.map((demo, index) => {
            let name = demo.get('name');
            let Component = demo.get('component');

            return (
                <div className="demo" key={ index }>
                    <h1>{ name }</h1>
                    <Component/>
                </div>
            );
        }) : <h1>No demos.</h1>
    }
}

export default Container.create(DisplayComponentDemos)