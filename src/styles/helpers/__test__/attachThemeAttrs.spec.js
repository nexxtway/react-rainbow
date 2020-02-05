import attachThemeAttrs from '../attachThemeAttrs';
import styled from 'styled-components';

describe('attachThemeAttrs', () => {
    const rainbow = {
        foo: 'foo',
        bar: 'bar',
    };

    jest.mock('../getTheme', rainbow => {
        const result = {
            theme: { rainbow },
            ...rainbow,
        };
        return result;
    });
    const styledElement = styled.p.attrs({ theme: { rainbow } });

    it('should return a merged object with props and props.theme.rainbow', async () => {
        expect.assertions(1);
        await attachThemeAttrs(styledElement).attrs(props => {
            console.log('pwpreweprpwer');
            console.log(props);
            expect(props).toEqual({
                feoo: 12,
                theme: { rainbow },
                ...rainbow,
            });
        });
    });
});
