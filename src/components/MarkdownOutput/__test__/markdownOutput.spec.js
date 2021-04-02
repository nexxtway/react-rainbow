import React from 'react';
import { mount } from 'enzyme';
import MarkdownOutput from '../index';
import useMarkdownToReact from '../hooks/useMarkdownToReact';
import { defaultRenderer, inlineRenderer } from '../renderers';

jest.mock('../hooks/useMarkdownToReact', () => jest.fn());

describe('<MarkdownOutput />', () => {
    it('should call useMarkdownToReact hook with right value', () => {
        const value = '# This is a level 1 header';
        mount(<MarkdownOutput value={value} />);
        expect(useMarkdownToReact).toHaveBeenCalledWith(value, defaultRenderer);
    });

    it('should use the inline renderer when variant is "inline"', () => {
        const value = '# This is a level 1 header';
        mount(<MarkdownOutput value={value} variant="inline" />);
        expect(useMarkdownToReact).toHaveBeenCalledWith(value, inlineRenderer);
    });
});
