import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface ChartProps extends BaseProps {
    type: 'bar' | 'horizontalBar' | 'line' | 'radar' | 'pie' | 'doughnut' | 'polarArea' | 'bubble';
    labels: string[];
    showStacked?: boolean;
    showLegend?: boolean;
    legendPosition?: 'top' | 'bottom' | 'right' | 'left';
    disableAnimations?: boolean;
    disableLines?: boolean;
    disableCurves?: boolean;
    maintainAspectRatio?: boolean;
}

declare const Chart: React.ComponentType<ChartProps>;
export default Chart;
