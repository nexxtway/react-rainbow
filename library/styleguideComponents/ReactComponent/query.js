import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryAt, QueryMulti, QueryAny } from 'react-prismic-cms';
import Util from './Utils';

export default function Query({ value, name }) {
    if (Array.isArray(value)) {
        return (
            <QueryMulti component={Util} type={value} componentName={name}>
                <QueryAny path="document.type" value={value} />
                <QueryAt path="document.tags" value={[name]} />
            </QueryMulti>
        );
    }
    return (
        <QueryMulti component={Util} type={value} componentName={name}>
            <QueryAt path="document.type" value={value} />
            <QueryAt path="document.tags" value={[name]} />
        </QueryMulti>
    );
}

Query.propTypes = {
    value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
};
