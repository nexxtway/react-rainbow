import { DefaultTheme } from 'styled-components';
import { RainbowTheme } from '../../styled';

interface Props {
    [key: string]: unknown;
    theme: DefaultTheme;
}

declare function getTheme(props: Props): RainbowTheme;
export default getTheme;
