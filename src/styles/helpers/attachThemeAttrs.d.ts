import { ThemedStyledFunction } from 'styled-components';

declare function attachThemeAttrs<C, T, O, A>(
    styledElement: ThemedStyledFunction<C, T, O, A>,
): ThemedStyledFunction<C, T, O, A>;
export default attachThemeAttrs;
