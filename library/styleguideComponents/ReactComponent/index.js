/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCode, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Pathline from 'react-styleguidist/lib/rsg-components/Pathline';
import { Prismic } from 'react-prismic-cms';
import Tabset from '../../../src/components/Tabset';
import Tab from '../../../src/components/Tab';
import RenderIf from '../../../src/components/RenderIf';
import Card from './../../../src/components/Card';
import TabLabel from './tabLabel';
import Description from './description';
import UtilsTab from './utilsTab';
import DescriptionLink from './descriptionLink';
import Query from './query';
import './styles.css';

const getEditLinkClassName = () => {
    const isExpanded = window.location.href.includes('/#!/');
    return classnames('react-rainbow-component_example-edit-link-container', {
        'react-rainbow-component_example-edit-link-container--compress': isExpanded,
    });
};

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
            <Prismic repo="rainbow-doc">
                <div className="react-rainbow-component_top-content">
                    {heading}
                    <p className="react-rainbow-component_component-name">
                        {name}
                    </p>
                    <div className="rainbow-p-horizontal_x-large rainbow-p-top_medium">
                        <Description text={descriptionText} />
                        <DescriptionLink name={name} />
                    </div>
                    <div className="rainbow-p-vertical_large rainbow-p-horizontal_x-large">
                        <Pathline name={name}>
                            {`import ${name} from 'react-rainbow-components/components/${name}'`}
                        </Pathline>
                    </div>

                    <Tabset
                        className="rainbow-p-horizontal_x-large rainbow-m-bottom_xx-large"
                        activeTabName={activeTabName}
                        onSelect={this.handleOnSelect}>

                        <Tab name="examples" label={<TabLabel icon={faCode} label="INTERACTIVE EXAMPLES" />} />
                        <Tab name="properties" label={<TabLabel icon={faList} label="PROPERTIES AND METHODS" />} />
                        <UtilsTab name={name} />
                    </Tabset>
                </div>
                <div className="rainbow-p-top_small rainbow-p-horizontal_x-large">
                    <RenderIf isTrue={activeTabName === 'examples'}>
                        <div className="rainbow-m-left_x-large rainbow-m-right_xx-large">
                            <div className={getEditLinkClassName()}>
                                <a
                                    className="rainbow-link"
                                    href={`https://github.com/90milesbridge/react-rainbow/blob/master/src/components/${name}/readme.md`}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faPencilAlt} className="rainbow-m-right_small" />
                                    Edit Interactive Examples
                                </a>
                            </div>
                            {examples}
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'properties'}>
                        <Card
                            className="rainbow-m-bottom_x-large rainbow-m-left_xx-large rainbow-m-right_x-large"
                            icon={<FontAwesomeIcon icon={faList} size="lg" className="rainbow-color_brand" />}
                            actions={
                                <a
                                    className="rainbow-link react-rainbow-component_tab-edit-link"
                                    href={`https://github.com/90milesbridge/react-rainbow/blob/master/src/components/${name}/index.js`}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faPencilAlt} className="rainbow-m-right_small" />
                                    Edit
                                </a>
                            }
                            title="Properties & Methods details">

                            {tabBody}
                        </Card>
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'utils'}>
                        <div className="react-rainbow-utils_container">
                            <Query value="page-object" name={name} />
                            <Query value="tutorials" name={name} />
                        </div>
                        <div className="react-rainbow-utils_container">
                            <Query value="experience-examples" name={name} />
                        </div>
                    </RenderIf>
                </div>
            </Prismic>
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
