import React from 'react';
import { render } from '@testing-library/react';
import AccordionSection from '..';

describe('<AccordionSection/>', () => {
    it('should have type button on section summary', () => {
        const { getByRole } = render(<AccordionSection label="Test section" />);
        expect(getByRole('button')).toHaveAttribute('type', 'button');
    });
});
