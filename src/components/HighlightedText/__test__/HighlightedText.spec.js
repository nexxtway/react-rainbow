import React from 'react';
import { mount } from 'enzyme';
import styled from 'styled-components';
import HighlightedText from '..';

describe('<HighlightedText />', () => {
    const parts = [
        {
            value: 'Apples',
            type: 'text',
        },
        {
            value: 'varieties',
            type: 'hit',
        },
        {
            value: 'Honeycrisp',
            type: 'text',
        },
    ];
    it('should return 3 <span> with theirs respective values because the default wrapper is a span', () => {
        const component = mount(<HighlightedText parts={parts} />);
        const container = component.find('span');
        expect(container.length).toBe(3);
        parts.forEach(({ value }, index) => {
            expect(
                container
                    .at(index)
                    .html()
                    .includes(value),
            ).toBe(true);
        });
    });

    it('it should not return a <p> container', () => {
        const component = mount(<HighlightedText parts={parts} isInline />);
        expect(component.html().includes('<p>')).toBe(false);
    });

    it('should return a custom <span> with id="hitText" in the container at(1) which corresponds to the text that has a type hit', () => {
        const TextContainer = styled.span`
            color: #808080;
        `;

        const HitContainer = styled.span`
            color: #fff;
        `;

        // eslint-disable-next-line react/prop-types
        const HitComponent = ({ children }) => {
            return <HitContainer id="hitText">{children}</HitContainer>;
        };

        const component = mount(
            <HighlightedText
                parts={parts}
                textComponent={TextContainer}
                hitComponent={HitComponent}
            />,
        );
        const container = component.find('span');
        expect(container.at(1).prop('id')).toBe('hitText');
    });
});
