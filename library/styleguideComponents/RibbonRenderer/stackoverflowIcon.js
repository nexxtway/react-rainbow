import React from 'react';
import PropTypes from 'prop-types';

export default function StackoverflowIcon(props) {
    const { className, style } = props;

    return (
        <svg className={className} style={style} width="89px" height="115px" viewBox="0 0 89 115">
            <g id="Variant-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group-75" transform="translate(0.000000, 0.569328)" fillRule="nonzero">
                    <polyline
                        id="Path"
                        fill="#E5712A"
                        points="63.2771377 72.6058172 19.8520257 62.0732458 21.9586718 53.3883552 65.3837838 63.9202677 63.2771377 72.6058172"
                    />
                    <polyline
                        id="Path"
                        fill="#E5712A"
                        points="66.1883552 62.2155778 26.397982 41.8831815 30.4643295 33.9251068 70.2547027 54.2575032 66.1883552 62.2155778"
                    />
                    <polyline
                        id="Path"
                        fill="#E5712A"
                        points="72.3171995 51.4523758 38.6668726 22.0535598 44.5459768 15.323758 78.1969627 44.721915 72.3171995 51.4523758"
                    />
                    <polyline
                        id="Path"
                        fill="#E5712A"
                        points="81.574713 41.9912484 56.4814414 5.01852252 63.8761184 -1.37490019e-12 88.96939 36.9727259 81.574713 41.9912484"
                    />
                    <polyline
                        id="Path"
                        fill="#E5712A"
                        points="62.5819511 83.4685199 17.9641493 81.0324015 18.4511094 72.108314 63.0689112 74.5450914 62.5819511 83.4685199"
                    />
                    <polyline
                        id="Path"
                        fill="#797B7B"
                        points="71.8328752 104.489514 71.8328752 67.4660489 80.7615753 67.4660489 80.7681647 113.428098 -2.84217094e-14 113.428098 0.00197683398 67.4271712 8.9385843 67.4271712 8.9385843 104.489514 71.8328752 104.489514"
                    />
                    <polygon
                        id="Path"
                        fill="#E5712A"
                        points="17.8402677 86.6512226 62.8277375 86.6512226 62.8277375 95.5878301 17.8402677 95.5878301"
                    />
                </g>
            </g>
        </svg>
    );
}

StackoverflowIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

StackoverflowIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
