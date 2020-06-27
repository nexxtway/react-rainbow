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
import TypeScript from './images/typescript';
import './styles.css';

export default function FeatureList(props) {
    const { className, style } = props;

    const getContainerClassNames = () => classnames('react-rainbow-feature-list', className);

    return (
        <div className={getContainerClassNames()} style={style}>
            <Item
                className="react-rainbow-feature-list_item"
                image={<Components />}
                title="80+ components"
                description="More than 80 components built on top of React."
            />

            <Item
                className="react-rainbow-feature-list_item"
                image={<InteractiveExamples />}
                title="Interactive examples"
                description="Proper documentation based on interactive examples to help you understand the features of each component."
            />

            <Item
                className="react-rainbow-feature-list_item"
                image={<Testing />}
                title="First class testing"
                description="Our components are test infected. We like to test our components as much as possible."
            />

            <Item
                className="react-rainbow-feature-list_item"
                image={<Internationalization />}
                title="Internationalization"
                description="We designed each component with i18n in mind. Any new component or feature we may add in the future, have to be able to work fully in different locales."
            />

            <Item
                className="react-rainbow-feature-list_item"
                image={<Accesibility />}
                title="Accessibility"
                description="Accessibility is part of our definition of done. It's a must have for each component."
            />

            <Item
                className="react-rainbow-feature-list_item"
                image={<PageObject />}
                title="Wdio page objects"
                description="We know how important for you is to test your UI. Our npm package provides webdriver.io page object for almost every component."
            />

            <Item
                className="react-rainbow-feature-list_item"
                image={<ReduxForm />}
                title="Redux-Form integration"
                description="Our inputable components work seamlessly with redux-form."
            />

            <Item
                className="react-rainbow-feature-list_item"
                image={<TypeScript />}
                title="TypeScript Support"
                description="Our components come with Typescript typings out of the box."
            />
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
