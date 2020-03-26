import React from 'react';
import PropTypes from 'prop-types';

export default function Drop(props) {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="64" height="70" viewBox="0 0 64 70">
            <g fill="none">
                <path
                    fill="currentColor"
                    d="M50 19c-1.508 0-3.01.246-4.435.72.29-1.211.435-2.456.435-3.72 0-8.822-7.178-16-16-16-8.528 0-15.519 6.707-15.976 15.122C6.089 16.102 0 22.907 0 31c0 8.822 7.178 16 16 16h34c7.72 0 14-6.28 14-14s-6.28-14-14-14z"
                />
                <path
                    fill="#000"
                    fillOpacity=".102"
                    d="M51 45H17C8.178 45 1 37.822 1 29c0-2.154.431-4.217 1.214-6.102C.807 25.282 0 28.056 0 31c0 8.822 7.178 16 16 16h34c5.874 0 10.914-3.637 12.989-8.777C60.534 42.281 56.079 45 51 45z"
                />
                <g>
                    <path
                        fill="#E0E0E2"
                        d="M24 7.6c-1.104 0-2-.85-2-1.9V0H4C1.79 0 0 1.701 0 3.8v30.4C0 36.299 1.79 38 4 38h22c2.209 0 4-1.701 4-3.8V7.6h-6z"
                        transform="translate(19 32)"
                    />
                    <path
                        fill="#E3E5ED"
                        d="M24 7.6c-1.104 0-2-.85-2-1.9V0H4C1.79 0 0 1.701 0 3.8v30.4C0 36.299 1.79 38 4 38h22c2.209 0 4-1.701 4-3.8V7.6h-6z"
                        transform="translate(19 32)"
                    />
                    <path
                        fill="#CACAD7"
                        d="M24 8h6l-8-8v6c0 1.104.896 2 2 2z"
                        transform="translate(19 32)"
                    />
                    <path
                        fill="#000"
                        fillOpacity=".107"
                        d="M24 15H6c-.552 0-1-.448-1-1s.448-1 1-1h18c.552 0 1 .448 1 1s-.448 1-1 1zM24 20H6c-.552 0-1-.448-1-1s.448-1 1-1h18c.552 0 1 .448 1 1s-.448 1-1 1zM24 25H6c-.552 0-1-.448-1-1s.448-1 1-1h18c.552 0 1 .448 1 1s-.448 1-1 1zM22 31H6c-.552 0-1-.448-1-1s.448-1 1-1h16c.552 0 1 .448 1 1s-.448 1-1 1z"
                        transform="translate(19 32)"
                    />
                </g>
                <g>
                    <path
                        fill="#FFF"
                        d="M15.707 7.293l-7-7c-.39-.39-1.024-.39-1.414 0l-7 7C-.324 7.91.13 9 1 9h2v10c0 .552.448 1 1 1h8c.552 0 1-.448 1-1V9h2c.87 0 1.325-1.09.707-1.707z"
                        transform="translate(22 10)"
                    />
                    <g fill="#000" fillOpacity=".098">
                        <path
                            d="M11 2H1c-.552 0-1-.448-1-1s.448-1 1-1h10c.552 0 1 .448 1 1s-.448 1-1 1zM11 6H1c-.552 0-1-.448-1-1s.448-1 1-1h10c.552 0 1 .448 1 1s-.448 1-1 1z"
                            transform="translate(22 10) translate(2 26)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
}

Drop.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
};

Drop.defaultProps = {
    style: undefined,
    className: undefined,
};
