import React from 'react';
import PropTypes from 'prop-types';
import { QueryAt, QueryMulti } from 'react-prismic-cms';
import Util from './Utils';

export default function Query({ value, name }) {
    return (
        <QueryMulti component={Util} type={value} componentName={name}>
            <QueryAt path="document.type" value={value} />
            <QueryAt path="document.tags" value={[name]} />
        </QueryMulti>
    );
}

Query.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
