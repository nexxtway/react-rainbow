import React from 'react';
import PropTypes from 'prop-types';

const InteractiveExampleIcon = props => {
    const { className } = props;
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            viewBox="0 0 18 16"
        >
            <g fill="none" fillRule="evenodd">
                <path
                    fill="#D5D7DF"
                    d="M12.704 14.604c-.237-.156-1.594-.668-1.594-.668h-.006l-.357-2.861h-3.54l-.357 2.86h-.007s-1.357.513-1.594.669l-.2.307c-.084.055 0 .148.132.148H12.772c.132 0 .216-.093.133-.148l-.201-.307z"
                />
                <path
                    fill="#E3E5ED"
                    d="M17.046 0H.874A.874.874 0 0 0 0 .874v9.616c0 .483.391.874.874.874h16.172a.874.874 0 0 0 .875-.874V.874A.874.874 0 0 0 17.046 0"
                />
                <path fill="#01B6F5" d="M1.045 10.418h15.997V.627H1.045z" />
                <g fill="#FFF">
                    <path d="M3.697 4.649l2.041-1.481c.04-.036.096-.045.153-.045.24 0 .546.287.546.655 0 .153-.056.287-.144.35L4.878 5.151l1.415 1.024c.088.063.144.197.144.35 0 .368-.305.655-.546.655-.057 0-.113-.009-.153-.045L3.697 5.654a.633.633 0 0 1 0-1.005zM11.35 2.511a.382.382 0 0 1-.034.164L8.355 8.887c-.06.129-.219.215-.379.215a.47.47 0 0 1-.47-.456c0-.052.016-.112.041-.164L10.5 2.27a.37.37 0 0 1 .353-.215c.236 0 .496.18.496.456zM14.73 6.508L12.69 7.99c-.041.035-.097.044-.154.044-.24 0-.546-.287-.546-.655 0-.152.056-.287.145-.35l1.414-1.023-1.414-1.024c-.089-.063-.145-.197-.145-.35 0-.368.305-.655.546-.655.057 0 .113.009.153.045l2.041 1.481a.632.632 0 0 1 0 1.005z" />
                </g>
            </g>
        </svg>
    );
};

InteractiveExampleIcon.propTypes = {
    className: PropTypes.string,
};

InteractiveExampleIcon.defaultProps = {
    className: undefined,
};

export default InteractiveExampleIcon;
