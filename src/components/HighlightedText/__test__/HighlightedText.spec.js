import React from 'react';
import PropTypes from 'prop-types';
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
    it('should return 3 <span> with theirs respective values because the default wrapp ers are span', () => {
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
    it('should return 3 <p> with theirs respective values because the custom wrappers are p', () => {
        const TextContainer = styled.p`
            color: grey;
        `;

        const textComponent = ({ children }) => {
            return <TextContainer>{children}</TextContainer>;
        };

        const HitContainer = styled.p`
            color: #fff;
        `;

        const hitComponent = ({ children }) => {
            return <HitContainer>{children}</HitContainer>;
        };
        const component = mount(
            <HighlightedText
                parts={parts}
                TextComponent={textComponent}
                HitComponent={hitComponent}
            />,
        );
        const container = component.find('p');
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

        textComponent.propTypes = {
            children: PropTypes.node,
        };

        hitComponent.propTypes = {
            children: PropTypes.node,
        };

        textComponent.defaultProps = {
            children: undefined,
        };

        hitComponent.defaultProps = {
            children: undefined,
        };
    });
});
