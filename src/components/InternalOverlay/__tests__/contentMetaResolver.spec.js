import React from 'react';
import { mount } from 'enzyme';
import ContentMetaResolver from '../ContentMetaResolver';

describe('<ContentMetaResolver />', () => {
    beforeEach(() => {
        Element.prototype.getClientRects = jest.fn(() => {
            return [
                {
                    bottom: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                },
            ];
        });
    });

    it('should render component', () => {
        const child = () => <div id="test-id" />;
        const component = mount(<ContentMetaResolver component={child} onResolved={() => {}} />);
        expect(component.find('[id="test-id"]').exists()).toBe(true);
    });

    it('should call onResolved', () => {
        const mockOnResolved = jest.fn();
        const child = () => <div id="test-id" />;
        const component = mount(
            <ContentMetaResolver component={child} onResolved={mockOnResolved} />,
        );
        component.setProps({});
        expect(mockOnResolved).toHaveBeenCalledTimes(1);
    });
});
