import React, { Component } from 'react';
import { BaseProps } from './../types';

export interface ProgressIndicatorProps extends BaseProps {
    currentStepName?: string;
    // onClick?: ;
}

declare const ProgressIndicator: React.ComponentType<ProgressIndicatorProps>;
export default ProgressIndicator;
