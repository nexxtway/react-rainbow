/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { QueryAt, QueryMulti } from 'react-prismic-cms';
import Util from './Utils';

export default function Query({ value }) {
    return (
        <QueryMulti component={Util} type={value}>
            <QueryAt path="document.type" value={value} />
        </QueryMulti>
    );
}

Query.propTypes = {
    value: PropTypes.string.isRequired,
};
