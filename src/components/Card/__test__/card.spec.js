import React from 'react';
import { shallow } from 'enzyme';
import Card from './../index';

describe('<Card/>', () => {
    it('should set to true the isTrue prop in RenderIf', () => {
        const component = shallow(
            <Card
                title="Card Header"
                footer="Card Footer"
                actions={<div>Testing actions node</div>}
            >
                Testing childrens
            </Card>,
        );
        expect(component.find('RenderIf').prop('isTrue')).toBe(true);
    });
    it('should set to true the isTrue prop in RenderIf when isLoading', () => {
        const component = shallow(
            <Card
                title="Card Header"
                footer="Card Footer"
                isLoading
                actions={<div>Testing actions node</div>}
            >
                Testing childrens
            </Card>,
        );
        expect(component.find('RenderIf').prop('isTrue')).toBe(false);
    });
    it('should set to true the isTrue prop in RenderIf when footer is not passed', () => {
        const component = shallow(
            <Card title="Card Header" actions={<div>Testing actions node</div>}>
                Testing childrens
            </Card>,
        );
        expect(component.find('RenderIf').prop('isTrue')).toBe(false);
    });
});
