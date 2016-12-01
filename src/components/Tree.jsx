import React from 'react';

export default class Tree extends React.Component {
    render() {
        return (
            <div className="slds-tree_container" role="application">
                <h4 className="slds-text-title--caps" id="treeheading">{ this.props.headerText }</h4>
                <ul className="slds-tree" role="tree" aria-labelledby="treeheading">
                    { this.props.children }
                </ul>
            </div>
        );
    }
}

Tree.PropTypes = {
    headerText: React.PropTypes.string
};