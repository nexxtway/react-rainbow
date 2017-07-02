import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './../index';

describe('<Spinner/>', () => {
    it('should render the right markup for brand variant', () => {
        const component = renderer.create(<Spinner variant="brand" />);

        expect(component).toMatchSnapshot();
    });

    it('should render the spinner by default if isVisible is not passed', () => {
        const component = renderer.create(<Spinner />);

        expect(component).toMatchSnapshot();
    });

    it('should render nothing if isVisible is set to false', () => {
        const component = renderer.create(<Spinner isVisible={false} />);

        expect(component).toMatchSnapshot();
    });

    it('should render the assistiveText if it is passed', () => {
        const component = renderer.create(<Spinner assistiveText="Loading" />);

        expect(component).toMatchSnapshot();
    });
});
