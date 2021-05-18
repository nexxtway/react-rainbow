import React from 'react';
import { mount } from 'enzyme';
import RainbowThemeContainer from '..';

describe('<RainbowThemeContainer />', () => {
    it('should override the theme', () => {
        const theme = {
            rainbow: {
                palette: {
                    brand: '#5c56b6',
                },
            },
        };
        const component = mount(<RainbowThemeContainer value={theme} />);
        const normalizedTheme = component.find('ThemeProvider').prop('theme');
        const { main } = normalizedTheme.rainbow.palette.brand;
        expect(main).toBe('rgba(92, 86, 182, 1)');
    });
});
