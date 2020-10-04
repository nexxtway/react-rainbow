import React from 'react';
import PropTypes from 'prop-types';

const ImageIcon = props => {
    const { className, style } = props;
    return (
        <svg viewBox="0 0 37 32" className={className} style={style}>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="LoadingShape"
                    transform="translate(-703.000000, -1054.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-18" transform="translate(697.000000, 1044.000000)">
                        <path
                            d="M18.0666502,21.5128497 L27.1441111,33.3756385 C28.0269375,34.5294218 29.5699898,34.6275853 30.5912767,33.5938869 L32.8119632,31.3451538 C33.8324441,30.3114554 35.3360054,30.4394387 36.1688635,31.629167 L41.9192438,39.843144 C42.7504901,41.0346453 42.2490344,42 40.7962473,42 L7.70049162,42 C6.24770458,42 5.60069613,40.9488933 6.25560279,39.6521362 L15.2830954,21.7715564 C15.9371961,20.4749605 17.1838238,20.3592275 18.0666502,21.5128497 Z M30.9333175,10 C33.8379245,10 36.1935253,12.355762 36.1935253,15.2602077 C36.1935253,18.1646535 33.8377633,20.5204155 30.9333175,20.5204155 C28.0279047,20.5204155 25.6731098,18.1646535 25.6731098,15.2602077 C25.6731098,12.355762 28.0279047,10 30.9333175,10 Z"
                            id="Combined-Shape"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

ImageIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

ImageIcon.defaultProps = {
    className: undefined,
    style: undefined,
};

export default ImageIcon;
