import React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import attachThemeAttrs from '../attachThemeAttrs';
import defaultTheme from '../../defaultTheme';

describe('attachThemeAttrs', () => {
    let interpolatedProps = null;
    const interpolatedFn = props => {
        interpolatedProps = props;
    };
    const StyledComponent = attachThemeAttrs(styled.div)`
        position: relative;
        ${props => interpolatedFn(props)}
    `;

    beforeEach(() => {
        interpolatedProps = null;
    });

    it('should return a merge object with props and default themes values when props.theme.rainbow is an empty', () => {
        mount(<StyledComponent test />);
        expect(interpolatedProps.test).toBe(true);
        expect(interpolatedProps.palette).toEqual(defaultTheme.palette);
    });
    it('should return a merge object with props and props.theme.rainbow when props.theme.rainbow was passed', () => {
        const theme = {
            rainbow: {
                palette: {
                    brand: {
                        main: {
                            color: 'red',
                        },
                    },
                },
            },
        };
        mount(<StyledComponent test theme={theme} />);
        expect(interpolatedProps.test).toBe(true);
        expect(interpolatedProps.palette).toEqual(theme.rainbow.palette);
    });
});
