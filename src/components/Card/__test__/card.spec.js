import React from 'react';
import renderer from 'react-test-renderer';
import Card from './../index';

describe('<Card/>', () => {
    it('should have the right class names', () => {
        const component = renderer.create(
            <Card
                iconName="custom:custom72"
                title="Card Header"
                footer="Card Footer"
                actions={<div>Testing actions node</div>} >
                    <div>Testing childrens</div>
            </Card>,
        );
        expect(component).toMatchSnapshot();
    });
});
