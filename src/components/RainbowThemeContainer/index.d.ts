import React from 'react';
import { ReactNode } from 'react';

export interface RainbowThemeContainerProps {
    theme?: object;
    children?: ReactNode;
}

declare const RainbowThemeContainer: React.ComponentType<RainbowThemeContainerProps>;
export default RainbowThemeContainer;
