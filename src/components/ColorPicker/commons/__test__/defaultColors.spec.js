import React from 'react';
import { mount } from 'enzyme';
import { Provider } from '../../context';
import { DefaultColors } from '..';
import Color from '../defaultColors/color';

describe('<DefaultColors />', () => {
    it('should render first Color component with tabIndex 1 and isChecked true', () => {
        const context = {
            rgba: [0, 0, 0, 1],
            tabIndex: 1,
            colors: ['rgba(0, 0, 0, 1)', 'rgba(255, 255, 255, 1)'],
        };
        const wrapper = mount(
            <Provider value={context}>
                <DefaultColors />
            </Provider>,
        );

        expect(
            wrapper
                .find(Color)
                .at(0)
                .props(),
        ).toStrictEqual(
            expect.objectContaining({
                color: context.colors[0],
                tabIndex: 1,
                isChecked: true,
            }),
        );

        expect(
            wrapper
                .find(Color)
                .at(1)
                .props(),
        ).toStrictEqual(
            expect.objectContaining({
                color: context.colors[1],
                tabIndex: -1,
                isChecked: false,
            }),
        );
    });
});
