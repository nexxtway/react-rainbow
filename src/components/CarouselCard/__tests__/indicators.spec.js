import React from 'react';
import { render } from '@testing-library/react';
import Indicators from '../indicators';

const carouselItems = [
    {
        id: 'indicator-1',
        containerId: 'container-1',
        ref: {
            click: jest.fn(),
        },
        header: 'Header',
    },
    {
        id: 'indicator-2',
        containerId: 'container-2',
        ref: {
            click: jest.fn(),
        },
        header: 'Header 2',
    },
];

describe('<Indicators />', () => {
    it('should render the right amount of indicators', () => {
        const { getAllByRole } = render(<Indicators carouselChildren={carouselItems} />);

        expect(getAllByRole('tab').length).toBe(2);
    });
});
