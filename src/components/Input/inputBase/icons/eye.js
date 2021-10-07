import React from 'react';
import PropTypes from 'prop-types';

const EyeIcon = props => {
    const { className, style } = props;

    return (
        <svg className={className} style={style} width="16px" height="10px" viewBox="0 0 16 10">
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-Input-DesignGuidelines"
                    transform="translate(-613.000000, -228.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-3" transform="translate(609.000000, 221.000000)">
                        <path
                            d="M12.1405738,7.00860656 C15.5110656,7.00860656 18.4159836,8.9954918 19.7504098,11.8627049 C19.7913934,11.9512295 19.7913934,12.0528689 19.7504098,12.1397541 C18.4159836,15.0069672 15.5110492,16.9938525 12.1405738,16.9938525 C8.77009836,16.9938525 5.86516393,15.0069508 4.5307377,12.1397541 C4.4897541,12.0512295 4.4897541,11.9495902 4.5307377,11.8627049 C5.86516393,8.9954918 8.77008197,7.00860656 12.1405738,7.00860656 Z M12.1405738,8.55778689 C10.2389344,8.55778689 8.69631148,10.0987705 8.69631148,12.0020492 C8.69631148,13.9036885 10.2372951,15.4463279 12.1405738,15.4463279 C14.0422131,15.4463279 15.5848361,13.9036885 15.5848361,12.0020492 C15.5848361,10.1004098 14.0438525,8.55778689 12.1405738,8.55778689 Z M12.1405738,9.7954918 C13.3583164,9.7954918 14.3454918,10.7826672 14.3454918,12.0004098 C14.3454918,13.2181524 13.3583164,14.2053279 12.1405738,14.2053279 C10.9228312,14.2053279 9.93565574,13.2181524 9.93565574,12.0004098 C9.93565574,10.7826672 10.9228312,9.7954918 12.1405738,9.7954918 Z"
                            id="eye"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

EyeIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

EyeIcon.defaultProps = {
    className: undefined,
    style: undefined,
};

export default EyeIcon;
