/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { QueryAt } from 'react-prismic-cms';
import Tab from '../../../src/components/Tab';
import TabLabel from './tabLabel';

function TabItem({ response }) {
    if (response && response.total_results_size) {
        return <Tab name="utils" label={<TabLabel icon={faWrench} label="UTILS" />} />;
    }
    return null;
}

TabItem.propTypes = {
    response: PropTypes.object.isRequired,
};

export default function UtilsTab({ name }) {
    return (
        <QueryAt path="document.tags" value={[name]} component={TabItem} />
    );
}

UtilsTab.propTypes = {
    name: PropTypes.string.isRequired,
};
