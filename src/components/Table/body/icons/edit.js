import React from 'react';
import PropTypes from 'prop-types';

export default function Edit(props) {
    const { className, style } = props;
    return (
        <svg
            width="14px"
            height="13px"
            viewBox="0 0 14 13"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <title>Shape</title>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-Table-with-InlineEdit-DesignGuidelines"
                    transform="translate(-397.000000, -433.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-6" transform="translate(142.000000, 409.000000)">
                        <g id="Group-5" transform="translate(0.000000, 10.000000)">
                            <g id="Group-13" transform="translate(10.000000, 5.000000)">
                                <path
                                    d="M259,11.029476 C258.999463,10.4863552 258.77082,9.97606369 258.356116,9.59252681 C257.500816,8.80145097 256.110339,8.80254195 255.256002,9.59550226 L246.430707,17.8094602 C246.143645,18.0753672 245.924524,18.4045523 245.796989,18.7615085 L245.78875,18.7847171 L245,22 L248.47812,21.2781532 L248.504012,21.2702186 C248.889186,21.1519937 249.244508,20.9490672 249.532319,20.6823668 L258.358791,12.467417 C258.772746,12.0831859 259.000533,11.5724976 259,11.029476 Z M246.928758,20.5596786 L246.559954,20.2175998 L246.826259,19.131755 L248.103003,20.3159884 L246.928758,20.5596786 Z M257.583628,11.7507277 L249.014688,19.7260537 L247.462973,18.2867241 L253.3327,12.8236789 L254.226518,13.6522455 L255.00061,12.9346636 L254.105188,12.1046092 L254.937912,11.3297 L255.834939,12.1612421 L256.609032,11.4436602 L255.7104,10.6106303 L256.031057,10.3121916 C256.458493,9.91546349 257.154695,9.91486839 257.582879,10.3109022 C257.790445,10.5029186 257.904928,10.7584115 257.905249,11.0302695 C257.905463,11.3022266 257.791515,11.5578187 257.583628,11.7507277 Z M250.75899,20.9741603 L258.999998,20.9741603 L258.999998,21.9889908 L249.667986,21.9889908 L250.75899,20.9741603 Z"
                                    id="Shape"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

Edit.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Edit.defaultProps = {
    className: undefined,
    style: undefined,
};
