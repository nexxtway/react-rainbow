/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ChartContext from '../Chart/context';
import { useUniqueIdentifier } from '../../libs/hooks';

/** @category DataView */
export default function Dataset(props) {
    const datasetId = useUniqueIdentifier('dataset');
    const { title: label, values: data, ...rest } = props;
    const { registerDataset, unregisterDataset, updateDataset } = React.useContext(ChartContext);
    const isRegistered = useRef();

    useEffect(() => {
        if (isRegistered.current) {
            updateDataset(datasetId, {
                label,
                data,
                ...rest,
            });
        }
    });

    useEffect(() => {
        registerDataset(datasetId, {
            label,
            data,
            ...rest,
        });
        isRegistered.current = true;

        return () => {
            if (isRegistered.current) {
                unregisterDataset(datasetId);
                isRegistered.current = false;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <></>;
}

Dataset.propTypes = {
    /** The type of chart for the specific dataset, it can be different than the chart type */
    type: PropTypes.oneOf(['line']),
    /** The values to represent in the chart */
    values: PropTypes.arrayOf(PropTypes.number),
    /** The title for the dataset which appears in the legend and tooltips. */
    title: PropTypes.string,
    /** The fill color under the line. */
    backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    /** The color of the line, if left undefined, the backgroundColor is used */
    borderColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    /** The ID of the group to which this dataset belongs to
     * (when stacked, each group will be a separate stack) */
    stack: PropTypes.string,
    /** Whether to fill the area under the line */
    fill: PropTypes.bool,
};

Dataset.defaultProps = {
    type: undefined,
    values: [],
    title: 'Dataset',
    backgroundColor: undefined,
    borderColor: undefined,
    stack: undefined,
    fill: false,
};
