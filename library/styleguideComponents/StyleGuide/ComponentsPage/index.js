/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import filterSectionsByName from 'react-styleguidist/lib/utils/filterSectionsByName';
import Card from './../../../../src/components/Card';
import Input from './../../../../src/components/Input';
import './styles.css';

export default class ComponentsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    renderCards() {
        const { searchTerm } = this.state;
        const { components } = this.props;
        const filtered = filterSectionsByName(components, searchTerm);
        console.log(components);
        return filtered.map((component, index) => {
            const key = `component-${index}`;
            const src = `images/componentsThumbs/${component.name}.svg`;
            return (
                <Card
                    key={key}
                    className="react-rainbow-components-page_card"
                    footer={component.name}>
                    <img
                        src={src}
                        className="react-rainbow-components-page_card-image"
                        alt="" />
                </Card>
            );
        });
    }

    render() {
        const { searchTerm } = this.state;
        return (
            <div className="react-rainbow-components-page_container">
                <h1 className="react-rainbow-components-page_title">More than 40 components</h1>
                <Input
                    className="react-rainbow-components-page_search"
                    label="components filter"
                    hideLabel
                    iconName="utility:search"
                    value={searchTerm}
                    placeholder="Filter by name"
                    aria-label="Filter by name"
                    onChange={this.handleOnChange}
                    icon={
                        <FontAwesomeIcon icon={faSearch} className="rainbow-color_gray-3" />
                    } />
                <div className="react-rainbow-components-page_card-container">
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
