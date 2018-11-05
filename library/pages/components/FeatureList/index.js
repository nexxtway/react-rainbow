import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Item from './item';
import Components from './images/components';
import InteractiveExamples from './images/interactive-examples';
import Testing from './images/testing';
import Internationalization from './images/internationalization';
import Accesibility from './images/accesibility';
import PageObject from './images/page-object';
import ReduxForm from './images/redux-form';
import './styles.css';

export default function FeatureList(props) {
    const {
        className,
        style,
    } = props;

    const getContainerClassNames = () => classnames('react-rainbow-feature-list', className);

    return (
        <div className={getContainerClassNames()} style={style}>
            <Item
                className="react-rainbow-feature-list_item"
                image={<Components />}
                title="40+ Components"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore." />

            <Item
                className="react-rainbow-feature-list_item"
                image={<InteractiveExamples />}
                title="Interactive Examples"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore." />

            <Item
                className="react-rainbow-feature-list_item"
                image={<Testing />}
                title="100% Testing"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore." />

            <Item
                className="react-rainbow-feature-list_item"
                image={<Internationalization />}
                title="Internationalization"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore." />

            <Item
                className="react-rainbow-feature-list_item"
                image={<Accesibility />}
                title="Accesibility"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore." />

            <Item
                className="react-rainbow-feature-list_item"
                image={<PageObject />}
                title="Page Object Integration"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore." />

            <Item
                className="react-rainbow-feature-list_item"
                image={<ReduxForm />}
                title="Redux-Form Integration"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore." />
        </div>
    );
}

FeatureList.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

FeatureList.defaultProps = {
    className: undefined,
    style: undefined,
};
