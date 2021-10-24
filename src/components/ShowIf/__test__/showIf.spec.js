import React from 'react';
import { mount } from 'enzyme';
import ShowIf from '..';

describe('<ShowIf />', () => {
    it('should render the children in the DOM when isTrue is false', () => {
        const component = mount(
            <ShowIf>
                <span data-id="test" />
            </ShowIf>,
        );
        expect(component.find('[data-id="test"]').exists()).toBe(true);
    });
});
