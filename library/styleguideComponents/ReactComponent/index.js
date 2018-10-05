/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faFolderOpen, faWrench } from '@fortawesome/free-solid-svg-icons';
import Pathline from 'react-styleguidist/lib/rsg-components/Pathline';
import Tabset from '../../../src/components/Tabset';
import Tab from '../../../src/components/Tab';
import RenderIf from '../../../src/components/RenderIf';
import Card from './../../../src/components/Card';
import TabLabel from './tabLabel';
import Description from './description';
import './styles.css';

export default class ReactComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTabName: 'examples' };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(event, tab) {
        this.setState({ activeTabName: tab });
    }

    render() {
        const {
            name,
            heading,
            description,
            examples,
            tabBody,
        } = this.props;
        const descriptionText = description ? description.props.text : null;
        const { activeTabName } = this.state;

        return (
            <div>
                <div className="react-rainbow-component-top-content">
                    {heading}
                    <div className="rainbow-p-horizontal_x-large">
                        <Description text={descriptionText} />
                    </div>
                    <div className="rainbow-m-vertical_large rainbow-p-horizontal_x-large">
                        <Pathline name={name}>
                            {`import ${name} from 'react-rainbow-components/components/${name}'`}
                        </Pathline>
                    </div>

                    <Tabset
                        className="rainbow-p-horizontal_x-large rainbow-m-bottom_xx-large"
                        activeTabName={activeTabName}
                        onSelect={this.handleOnSelect}
                        fullWidth>

                        <Tab name="examples" label={<TabLabel icon={faFolderOpen} label="INTERACTIVE EXAMPLES" />} />
                        <Tab name="properties" label={<TabLabel icon={faList} label="PROPERTIES AND METHODS" />} />
                        <Tab name="utils" label={<TabLabel icon={faWrench} label="UTILS" />} />
                    </Tabset>
                </div>
                <div className="rainbow-p-top_small rainbow-p-horizontal_x-large">
                    <RenderIf isTrue={activeTabName === 'examples'}>
                        <div className="rainbow-m-left_x-large rainbow-m-right_xx-large">
                            {examples}
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'properties'}>
                        <Card
                            className="rainbow-m-bottom_x-large rainbow-m-left_xx-large rainbow-m-right_x-large"
                            icon={<FontAwesomeIcon icon={faList} size="lg" className="rainbow-color_brand" />}
                            title="Properties & Methods details">

                            {tabBody}
                        </Card>
                    </RenderIf>
                </div>
            </div>
        );
    }
}

ReactComponent.propTypes = {
    name: PropTypes.string.isRequired,
    heading: PropTypes.node.isRequired,
    tabBody: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
    examples: PropTypes.node.isRequired,
};
