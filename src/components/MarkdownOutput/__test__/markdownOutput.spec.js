import React from 'react';
import { mount } from 'enzyme';
import MarkdownOutput from '../index';
import useMarkdownToReact from '../hooks/useMarkdownToReact';

jest.mock('../hooks/useMarkdownToReact', () => jest.fn());

describe('<MarkdownOutput />', () => {
    it('', () => {
        const value = '# This is a level 1 header';
        mount(<MarkdownOutput value={value} />);
        expect(useMarkdownToReact).toHaveBeenCalledWith(value);
    });
});
