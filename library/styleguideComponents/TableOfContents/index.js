/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import filterSectionsByName from 'react-styleguidist/lib/utils/filterSectionsByName';
import Input from './../../../src/components/Input';
import ComponentsList from './../ComponentsList';

export default class TableOfContents extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.state = {
            searchTerm: '',
        };
    }

    handleOnChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    renderLevel(sections, useRouterLinks = false, hashPath = [], useHashId = false) {
        const items = sections.map((section) => {
            const children = [...(section.sections || []), ...(section.components || [])];
            const sectionDepth = section.sectionDepth || 0;
            const childHashPath =
                sectionDepth === 0 && useHashId ? hashPath : [...hashPath, section.name];
            return Object.assign({}, section, {
                heading: !!section.name && children.length > 0,
                content:
                    children.length > 0 &&
                    this.renderLevel(children, useRouterLinks, childHashPath, sectionDepth === 0),
            });
        });

        return (
            <ComponentsList
                searchTerm={this.state.searchTerm}
                items={items}
                hashPath={hashPath}
                useHashId={useHashId}
                useRouterLinks={useRouterLinks}
            />
        );
    }

    renderSections() {
        const { searchTerm } = this.state;
        const { sections, useRouterLinks } = this.props;
        const firstLevel = sections.length === 1 ? sections[0].components : sections;
        const filtered = filterSectionsByName(firstLevel, searchTerm);

        return this.renderLevel(filtered, useRouterLinks);
    }

    render() {
        const { searchTerm } = this.state;

        return (
            <div>
                <div className="rainbow-p-top_large rainbow-p-bottom_medium rainbow-p-horizontal_large">
                    <Input
                        iconName="utility:search"
                        value={searchTerm}
                        placeholder="Filter by name"
                        aria-label="Filter by name"
                        onChange={this.handleOnChange}
                        icon={
                            <FontAwesomeIcon icon={faSearch} className="rainbow-color_gray-3" />
                        } />
                </div>
                {this.renderSections()}
            </div>
        );
    }
}

TableOfContents.propTypes = {
    sections: PropTypes.any.isRequired,
    useRouterLinks: PropTypes.bool.isRequired,
};
