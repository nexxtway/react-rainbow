import { ChartOptions } from 'chart.js';
import { ReactNode, ComponentType } from 'react';
import { BaseProps } from '../types';

export interface ChartProps extends BaseProps {
    type?: 'bar' | 'horizontalBar' | 'line' | 'radar' | 'pie' | 'doughnut' | 'polarArea' | 'bubble';
    labels?: string[];
    showStacked?: boolean;
    showLegend?: boolean;
    legendPosition?: 'top' | 'bottom' | 'right' | 'left';
    disableAnimations?: boolean;
    disableLines?: boolean;
    disableCurves?: boolean;
    disableXAxisGridLines?: boolean;
    disableYAxisGridLines?: boolean;
    disableXAxisBorders?: boolean;
    disableYAxisBorders?: boolean;
    disableXAxisTickLabels?: boolean;
    disableYAxisTickLabels?: boolean;
    maintainAspectRatio?: boolean;
    plugins?: Array<object>;
    children?: ReactNode;
    options?: ChartOptions;
}

declare const Chart: ComponentType<ChartProps>;
export default Chart;
