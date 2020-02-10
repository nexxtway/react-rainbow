import styled from 'styled-components';
import attachThemeAttrs from '../attachThemeAttrs';

describe('attachThemeAttrs', () => {
    jest.mock('../getTheme', rainbow => {
        const result = {
            theme: { rainbow },
            ...rainbow,
        };
        return result;
    });
    const rainbow = {
        foo: 'foo',
        bar: 'bar',
    };
    const styledElement = styled.p.attrs({ theme: { rainbow } });
    it('should return a merged object with props and props.theme.rainbow', done => {
        attachThemeAttrs(styledElement).attrs(props => {
            expect(props.rainbow).toBe(rainbow);
            done();
        });
    });
});
