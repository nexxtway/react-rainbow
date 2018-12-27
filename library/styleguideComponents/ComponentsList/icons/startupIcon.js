import React from 'react';
import PropTypes from 'prop-types';

const StartupIcon = (props) => {
    const { className } = props;
    return (
        <svg className={className} width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
            <g id="re-design-layout" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="re-design-layout-componentes-V2" transform="translate(-33.000000, -106.000000)">
                    <g id="Group-97" transform="translate(-1.000000, 70.000000)">
                        <g id="sidebar">
                            <g id="Group-9" transform="translate(10.000000, 36.000000)">
                                <g id="Group-2">
                                    <g id="startup-(1)" transform="translate(34.000000, 10.000000) scale(-1, 1) translate(-34.000000, -10.000000) translate(24.000000, 0.000000)">
                                        <path d="M13.7437052,12.2450199 L12.2034263,12.2033865 L12.2450598,13.7436653 C12.2866932,16.2414343 14.3681673,18.2812749 16.8659363,18.3645418 L18.4062151,18.4061753 L18.3645817,16.8658964 C18.2812749,14.3681275 16.2414343,12.2866534 13.7437052,12.2450199 Z" id="Path" fill="#FFB900" />
                                        <path d="M14.16,13.0776096 L13.0776494,13.0359761 L13.1192829,14.1183267 C13.1609163,15.9084064 14.6595618,17.4070518 16.4496414,17.4486853 L17.531992,17.4903187 L17.4903586,16.4079681 C17.4487251,14.6178884 15.9500398,13.119243 14.16,13.0776096 Z" id="Path" fill="#FFCC00" />
                                        <path d="M19.9880876,12.1201195 C19.7799602,11.7454582 19.4885259,11.4124303 19.1971315,11.120996 C18.4478088,10.3716733 17.5319522,9.87211155 16.5328287,9.6223506 C14.6595219,9.16442231 12.5780478,9.66398406 11.120996,11.120996 C9.66394422,12.578008 9.16442231,14.6594821 9.6223506,16.5328287 C9.87211155,17.4903187 10.3716733,18.4477689 11.120996,19.1970916 C11.4123904,19.4884861 11.7870518,19.7799203 12.1201195,19.9880478 C9.95537849,20.0713147 7.70741036,19.2803586 6.04223108,17.6151793 C4.71007968,16.2830279 3.96075697,14.6594821 3.71099602,12.9526693 C3.37796813,10.4965339 4.1689243,7.95713147 6.04223108,6.0838247 C7.91553785,4.21051793 10.4965737,3.41956175 12.9110757,3.75258964 C14.6178884,4.0023506 16.2830677,4.75171315 17.5735857,6.0838247 C19.2803984,7.70741036 20.0713546,9.95541833 19.9880876,12.1201195 Z" id="Path" fill="#FE4849" />
                                        <path d="M16.4079681,12.161753 C15.2423506,5.04314741 9.12282869,-0.202151394 1.54625498,0.00597609562 L0.0476095618,0.0476095618 L0.00597609562,1.54625498 C-0.202151394,9.12282869 5.04314741,15.2423506 12.161753,16.4079681 L16.4079681,12.161753 Z" id="Path" fill="#E3E5ED" />
                                        <g id="Group" fill="#EA4243">
                                            <path d="M8.91466135,15.4921116 C9.95537849,15.9084064 11.0377689,16.1998008 12.161753,16.4079681 L16.3663347,12.2033865 C16.1998008,11.0794024 15.8667729,9.99701195 15.4504781,8.95629482 L8.91466135,15.4921116 Z" id="Path" />
                                            <path d="M6.50015936,0.672071713 C4.95988048,0.214143426 3.2947012,-0.0356573705 1.54625498,0.00597609562 L0.0476095618,0.0476095618 L0.00597609562,1.54625498 C-0.0356573705,3.2947012 0.214103586,4.95988048 0.672031873,6.50015936 L6.50015936,0.672071713 Z" id="Path" />
                                        </g>
                                        <path d="M12.161753,16.4079681 C12.5780478,16.4912351 13.0359761,16.5328685 13.4522709,16.574502 L16.5328287,13.4939442 C16.4911952,13.0360159 16.4495618,12.6197211 16.3662948,12.2034263 L12.161753,16.4079681 Z" id="Path" fill="#E3E5ED" />
                                        <circle id="Oval" fill="#EA4243" cx="6.95278884" cy="6.97059761" r="3.20541833" />
                                        <circle id="Oval" fill="#01B6F5" cx="6.95278884" cy="6.97059761" r="2.24796813" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

StartupIcon.propTypes = {
    className: PropTypes.string,
};

StartupIcon.defaultProps = {
    className: undefined,
};

export default StartupIcon;
