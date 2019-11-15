/* eslint-disable import/no-extraneous-dependencies,no-param-reassign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import filterSectionsByName from './../../utils/filterSectionsByName';
import Card from '../../../src/components/Card';
import Input from '../../../src/components/Input';
import RenderIf from '../../../src/components/RenderIf';
import SearchIcon from './searchIcon';
import SectionHeading from '../../styleguideComponents/SectionHeading';
import CarbonAds from '../components/CarbonAds';
import './styles.css';

function handleOnError(event) {
    event.target.src = 'images/componentsThumbs/default-image.svg';
}

export default class ComponentsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    getComponentsByCategory() {
        const { searchTerm } = this.state;
        const { components } = this.props;
        const filtered = filterSectionsByName(components, searchTerm);
        const categorizedComponents = {
            forms: [],
            layouts: [],
            dataViews: [],
            miscellaneous: [],
            experiences: [],
        };
        filtered.forEach((component, index) => {
            const key = `component-${index}`;
            const src = `images/componentsThumbs/${component.name}.svg`;
            const href = `/#/${component.name}`;
            const card = (
                <a href={href} key={key} className="react-rainbow-components-page_card-container">
                    <Card className="react-rainbow-components-page_card" footer={component.name}>
                        <img
                            src={src}
                            onError={handleOnError}
                            className="react-rainbow-components-page_card-image"
                            alt={`Component ${component.name}`}
                        />
                    </Card>
                </a>
            );
            if (component.props.tags && component.props.tags.category) {
                const category = component.props.tags.category[0].description;
                if (category === 'Form') {
                    categorizedComponents.forms.push(card);
                } else if (category === 'Layout') {
                    categorizedComponents.layouts.push(card);
                } else if (category === 'Experiences') {
                    categorizedComponents.experiences.push(card);
                } else if (category === 'DataView') {
                    categorizedComponents.dataViews.push(card);
                }
            } else {
                categorizedComponents.miscellaneous.push(card);
            }
        });
        return categorizedComponents;
    }

    handleOnChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    renderCards() {
        const {
            forms,
            dataViews,
            layouts,
            miscellaneous,
            experiences,
        } = this.getComponentsByCategory();
        return (
            <div className="react-rainbow-components-page_cards-container">
                <RenderIf isTrue={!!layouts.length}>
                    <h1 className="react-rainbow-components-page_category-title">
                        Layout Components
                    </h1>
                </RenderIf>
                <div className="react-rainbow-components-page_card-group-container">{layouts}</div>
                <RenderIf isTrue={!!forms.length}>
                    <h1 className="react-rainbow-components-page_category-title">Forms</h1>
                </RenderIf>
                <div className="react-rainbow-components-page_card-group-container">{forms}</div>
                <RenderIf isTrue={!!miscellaneous.length}>
                    <h1 className="react-rainbow-components-page_category-title">Miscellaneous</h1>
                </RenderIf>
                <div className="react-rainbow-components-page_card-group-container">
                    {miscellaneous}
                </div>
                <RenderIf isTrue={!!dataViews.length}>
                    <h1 className="react-rainbow-components-page_category-title">Data View</h1>
                </RenderIf>
                <div className="react-rainbow-components-page_card-group-container">
                    {dataViews}
                </div>
                <RenderIf isTrue={!!experiences.length}>
                    <h1 className="react-rainbow-components-page_category-title">Experiences</h1>
                </RenderIf>
                <div className="react-rainbow-components-page_card-group-container">
                    {experiences}
                </div>
            </div>
        );
    }

    render() {
        const { searchTerm } = this.state;

        return (
            <div>
                <SectionHeading />
                <div className="react-rainbow-components-page_container">
                    <CarbonAds className="react-rainbow-components-page_carbon-ads" />
                    <h1 className="react-rainbow-components-page_title">More than 60 components</h1>
                    <Input
                        className="react-rainbow-components-page_search"
                        label="Find Components"
                        type="search"
                        hideLabel
                        value={searchTerm}
                        placeholder="Find Components"
                        aria-label="Find Components"
                        onChange={this.handleOnChange}
                        icon={<SearchIcon />}
                    />
                    {this.renderCards()}
                </div>
            </div>
        );
    }
}

ComponentsPage.propTypes = {
    components: PropTypes.array,
};

ComponentsPage.defaultProps = {
    components: [],
};
