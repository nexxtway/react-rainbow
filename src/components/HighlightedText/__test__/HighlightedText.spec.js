import React from 'react';
import { mount } from 'enzyme';
import styled from 'styled-components';
import HighlightedText from '../';

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
        expect(
            container
                .at(0)
                .html()
                .includes('Apples'),
        ).toBe(true);
        expect(
            container
                .at(1)
                .html()
                .includes('varieties'),
        ).toBe(true);
        expect(
            container
                .at(2)
                .html()
                .includes('Honeycrisp'),
        ).toBe(true);
    });
    it('should return 3 custom <span> with theirs respective values because the custom wrapper is a span', () => {
        const TextContainer = styled.span`
            color: grey;
        `;

        const HitContainer = styled.span`
            color: #fff;
        `;

        const component = mount(
            <HighlightedText
                parts={parts}
                textComponent={TextContainer}
                hitComponent={HitContainer}
            />,
        );
        const container = component.find('span');
        expect(
            container
                .at(0)
                .html()
                .includes('Apples'),
        ).toBe(true);
        expect(
            container
                .at(1)
                .html()
                .includes('varieties'),
        ).toBe(true);
        expect(
            container
                .at(2)
                .html()
                .includes('Honeycrisp'),
        ).toBe(true);
    });

    it('should return a custom <span> with id="hitText" in the container at(1) which corresponds to the text that has a type hit', () => {
        const TextContainer = styled.span`
            color: grey;
        `;

        const HitContainer = styled.span`
            color: #fff;
        `;

        // eslint-disable-next-line react/prop-types
        const hitComponent = ({ children }) => {
            return <HitContainer id="hitText">{children}</HitContainer>;
        };

        const component = mount(
            <HighlightedText
                parts={parts}
                textComponent={TextContainer}
                hitComponent={hitComponent}
            />,
        );
        const container = component.find('span');
        expect(container.at(1).prop('id')).toBe('hitText');
    });
});
