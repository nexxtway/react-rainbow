import React from 'react';
import renderer from 'react-test-renderer';
import Badge from './../index';

describe('<Badge/>', () => {
    it('should have the right class names when variant default and have a custom class', () => {
        const component = renderer.create(
            <Badge label="Badge label" className="custom-class" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant inverse', () => {
        const component = renderer.create(
            <Badge label="Inverse Badge" variant="inverse" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant lightest', () => {
        const component = renderer.create(
            <Badge label="Lightest Badge" variant="lightest" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when iconName is utility:world', () => {
        const component = renderer.create(
            <Badge iconName="utility:world" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when iconName is utility:world and iconPosition is right', () => {
        const component = renderer.create(
            <Badge iconName="utility:world" iconPosition="right" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when iconName is utility:world and iconPosition is left', () => {
        const component = renderer.create(
            <Badge iconName="utility:world" iconPosition="left" />,
        );
        expect(component).toMatchSnapshot();
    });
});
