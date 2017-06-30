import React from 'react';
import renderer from 'react-test-renderer';
import Badge from './../index';

describe('<Badge/>', () => {
    it('should match the snapshot', () => {
        const component = renderer.create(<Badge label="Badge label" className="custom-class" />);

        expect(component).toMatchSnapshot();
    });
});
