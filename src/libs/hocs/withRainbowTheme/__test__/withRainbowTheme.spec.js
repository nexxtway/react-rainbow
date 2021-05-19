import React from 'react';
import { mount } from 'enzyme';
import Button from '../../../../components/Button';
import withRainbowTheme from '..';

describe('withRainbowTheme', () => {
    it('should return a function that renders the passed component inside RainbowThemeContainer', () => {
        const theme = {
            rainbow: {
                palette: {
                    brand: '#5c56b6',
                },
            },
        };

        const FancyButton = withRainbowTheme(Button, theme);
        const component = mount(<FancyButton label="Fancy button" />);
        const themeContainer = component.find('RainbowThemeContainer');
        expect(themeContainer.exists()).toBe(true);
        expect(themeContainer.find(Button).prop('label')).toBe('Fancy button');
    });
});
