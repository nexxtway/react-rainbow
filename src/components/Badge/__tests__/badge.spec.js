import React from 'react';
import Badge from './../index';
import renderer from 'react-test-renderer';

describe('<Badge/>', () => {
    it('should match the snapshot', () => {
        const component = renderer.create(
            <Badge label="Badge label" className="custom-class"/>
        );

        expect(component).toMatchSnapshot();
    });
});