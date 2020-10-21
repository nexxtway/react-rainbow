import React from 'react';
import PropTypes from 'prop-types';

export default function Cancel(props) {
    const { className, style } = props;
    return (
        <svg
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <title>cancel</title>
            <g id="components" stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
                <g
                    id="Components-Table-with-InlineEdit-DesignGuidelines"
                    transform="translate(-394.000000, -644.000000)"
                    fill="currentColor"
                >
                    <path
                        d="M402,644 C406.418278,644 410,647.581722 410,652 C410,656.418278 406.418278,660 402,660 C397.581722,660 394,656.418278 394,652 C394,647.581722 397.581722,644 402,644 Z M403.80362,649.294548 L402,651.098167 L400.19638,649.294548 C399.947024,649.045191 399.54345,649.045646 399.294548,649.294548 C399.045646,649.54345 399.045191,649.947024 399.294548,650.19638 L401.098167,652 L399.294548,653.80362 C399.045646,654.052522 399.045191,654.456095 399.294548,654.705452 C399.543905,654.954809 399.947478,654.954354 400.19638,654.705452 L402,652.901833 L403.80362,654.705452 C404.052976,654.954809 404.45655,654.954354 404.705452,654.705452 C404.954354,654.45655 404.954809,654.052976 404.705452,653.80362 L402.901833,652 L404.705452,650.19638 C404.954354,649.947478 404.954809,649.543905 404.705452,649.294548 C404.456095,649.045191 404.052522,649.045646 403.80362,649.294548 Z"
                        id="cancel"
                    />
                </g>
            </g>
        </svg>
    );
}

Cancel.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Cancel.defaultProps = {
    className: undefined,
    style: undefined,
};
