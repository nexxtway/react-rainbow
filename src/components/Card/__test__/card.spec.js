import React from 'react';
import renderer from 'react-test-renderer';
import Card from './../index';
import Button from './../../Button';

describe('<Card/>', () => {
    it('should render the right markup for the card component', () => {
        const component = renderer.create(
            <Card iconName="standard:contact" title="Card Header" footer="Card Footer" actions={<Button label="New" />} >
                Card Body (custom goes here)
            </Card>,
        );

        expect(component).toMatchSnapshot();
    });

    it('should render nothing when the card is created without any prop', () => {
        const component = renderer.create(<Card />);

        expect(component).toMatchSnapshot();
    });

    it('should render the right markup for the card body when only children is passed', () => {
        const component = renderer.create(<Card>Card Body</Card>);

        expect(component).toMatchSnapshot();
    });

    it('should render the right markup for the card footer when only footer is passed', () => {
        const component = renderer.create(<Card footer="Card footer" />);

        expect(component).toMatchSnapshot();
    });

    it('should render the right markup for the card header when only iconName is passed', () => {
        const component = renderer.create(<Card iconName="standard:contact" />);

        expect(component).toMatchSnapshot();
    });

    it('should render the right markup for the card header when only title is passed', () => {
        const component = renderer.create(<Card title="Card title" />);

        expect(component).toMatchSnapshot();
    });

    it('should render the right markup for the card header when only actions is passed', () => {
        const component = renderer.create(<Card actions={<Button label="New" />} />);

        expect(component).toMatchSnapshot();
    });
});
