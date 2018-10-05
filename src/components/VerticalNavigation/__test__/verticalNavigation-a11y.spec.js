import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import VerticalNavigation from './../';
import VerticalSection from './../../VerticalSection';
import VerticalSectionOverflow from './../../VerticalSectionOverflow';
import VerticalItem from './../../VerticalItem';

describe('<VerticalNavigation/>', () => {
    it('should be accessible when use VerticalSection', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <VerticalNavigation selectedItem="item-1">
                <VerticalSection label="Section Label">
                    <VerticalItem name="item-1" label="Recent" />
                    <VerticalItem name="item-2" label="Projects" />
                </VerticalSection>
            </VerticalNavigation>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
    it('should be accessible when use VerticalSectionOverflow', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <VerticalNavigation>
                <VerticalSectionOverflow label="Section Label">
                    <VerticalItem name="item-1" label="Recent" />
                    <VerticalItem name="item-2" label="Projects" />
                </VerticalSectionOverflow>
            </VerticalNavigation>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
