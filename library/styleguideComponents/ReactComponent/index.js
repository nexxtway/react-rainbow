/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Prismic } from 'react-prismic-cms';
import Pathline from '../Pathline';
import Tabset from '../../../src/components/Tabset';
import Tab from '../../../src/components/Tab';
import RenderIf from '../../../src/components/RenderIf';
import Card from '../../../src/components/Card';
import Breadcrumbs from '../../../src/components/Breadcrumbs';
import Breadcrumb from '../../../src/components/Breadcrumb';
import CarbonAds from '../../pages/components/CarbonAds';
import TabLabel from './tabLabel';
import Description from './description';
import InteractiveExampleIcon from './icons/interactiveExampleIcon';
import ListIcon from './icons/listIcon';
import UtilsTab from './utilsTab';
import DescriptionLink from './descriptionLink';
import Query from './query';
import './styles.css';
import './media-queries.css';

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
        // eslint-disable-next-line no-undef
        if (_carbonads) _carbonads.refresh();
    }

    render() {
        const { name, description, examples, tabBody } = this.props;
        const descriptionText = description ? description.props.text : null;
        const { activeTabName } = this.state;

        return (
            <Prismic repo="rainbow-doc">
                <div className="react-rainbow-component_top-content">
                    <div className="react-rainbow-component_header">
                        <div>
                            <div className="rainbow-p-top_medium rainbow-p-left_x-large">
                                <Breadcrumbs>
                                    <Breadcrumb label="Components" href="/#/Components" />
                                    <Breadcrumb label={name} />
                                </Breadcrumbs>
                            </div>
                            <p className="react-rainbow-component_component-name">{name}</p>
                            <div className="rainbow-p-horizontal_x-large rainbow-p-top_medium">
                                <Description text={descriptionText} />
                                <DescriptionLink name={name} />
                            </div>
                        </div>
                        <CarbonAds className="react-rainbow-component_carbon-ads" />
                    </div>
                    <div className="rainbow-p-vertical_large rainbow-p-horizontal_x-large">
                        <Pathline name={name}>
                            {`import { ${name} } from 'react-rainbow-components';`}
                        </Pathline>
                    </div>
                    <Tabset
                        className="rainbow-p-horizontal_x-large react-rainbow-component_tabset"
                        activeTabName={activeTabName}
                        onSelect={this.handleOnSelect}
                    >
                        <Tab
                            name="examples"
                            label={
                                <TabLabel
                                    icon={
                                        <InteractiveExampleIcon className="rainbow-m-right_x-small" />
                                    }
                                    label="INTERACTIVE EXAMPLES"
                                />
                            }
                        />
                        <Tab
                            name="properties"
                            label={
                                <TabLabel
                                    icon={<ListIcon className="rainbow-m-right_x-small" />}
                                    label="PROPERTIES AND METHODS"
                                />
                            }
                        />
                        <UtilsTab name={name} />
                    </Tabset>
                </div>
                <div className="rainbow-p-top_small rainbow-p-horizontal_x-large react-rainbow-component_container">
                    <RenderIf isTrue={activeTabName === 'examples'}>
                        <div className="rainbow-m-left_x-large rainbow-m-right_x-large react-rainbow-component_interactive-example">
                            <div className={getEditLinkClassName()}>
                                <a
                                    className="rainbow-link"
                                    href={`https://github.com/nexxtway/react-rainbow/blob/master/src/components/${name}/readme.md`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faPencilAlt}
                                        className="rainbow-m-right_small"
                                    />
                                    Edit Interactive Examples
                                </a>
                            </div>
                            {examples}
                        </div>
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'properties'}>
                        <Card
                            className="rainbow-m-bottom_x-large rainbow-m-left_x-large rainbow-m-right_x-large react-rainbow-component_properties-table"
                            actions={
                                <a
                                    className="rainbow-link react-rainbow-component_tab-edit-link"
                                    href={`https://github.com/nexxtway/react-rainbow/blob/master/src/components/${name}/index.js`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faPencilAlt}
                                        className="rainbow-m-right_small"
                                    />
                                    Edit
                                </a>
                            }
                            title="Properties & Methods"
                        >
                            {tabBody}
                        </Card>
                    </RenderIf>
                    <RenderIf isTrue={activeTabName === 'utils'}>
                        <div className="react-rainbow-utils_container">
                            <Query value="related-component" name={name} />
                        </div>
                        <div className="react-rainbow-utils_container">
                            <Query value="experience-examples" name={name} />
                        </div>
                        <div className="react-rainbow-utils_container">
                            <Query value={['tutorials', 'page-object']} name={name} />
                        </div>
                    </RenderIf>
                </div>
            </Prismic>
        );
    }
}

ReactComponent.propTypes = {
    name: PropTypes.string.isRequired,
    tabBody: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
    examples: PropTypes.node.isRequired,
};
