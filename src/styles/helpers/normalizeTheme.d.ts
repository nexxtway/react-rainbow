import { DefaultTheme } from 'styled-components';
import { ThemeType } from '../../styled';

declare function normalizeTheme(theme: ThemeType): DefaultTheme;
export default normalizeTheme;
