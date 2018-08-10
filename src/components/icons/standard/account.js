import React from 'react';
import iconContainer from './../../IconContainer';
import iconPropTypes from './../propTypes';
import iconDefaultProps from './../defaultProps';

function Account(props) {
    const { className, style } = props;

    return (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="m79 51.1c0.1-2.1-1.4-2.7-2-2.7h-21.8c-1.9 0-2.2 2-2.2 2.2v23.4h26v-22.9z m-15 16.8c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m0-10.2c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m10 10.2c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m0-10.2c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m-15-17.4v-11.6c0.1-2.1-1.4-2.7-2-2.7h-33.8c-1.9 0-2.2 2-2.2 2.2v45.8h26v-29.3s0-2.4 2.2-2.4h7.9s1.9-1.2 1.9-2z m-27 26.6c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m0-10.3c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m0-10.2c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m0-10.2c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m11 30.7c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m0-10.3c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m0-10.2c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m0-10.2c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z m11 0c0 1.1-0.9 2-2 2h-2c-1.1 0-2-0.9-2-2v-2c0-1.1 0.9-2 2-2h2c1.1 0 2 0.9 2 2v2z" />
        </svg>
    );
}

Account.propTypes = iconPropTypes;
Account.defaultProps = iconDefaultProps;

export default iconContainer(Account);
