import React from 'react';
import PropTypes from 'prop-types';

const FolderOpen = props => {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="18px" height="13px" viewBox="0 0 20 15">
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-Tree"
                    transform="translate(-192.000000, -1368.000000)"
                    fillRule="nonzero"
                >
                    <g id="Group-30" transform="translate(127.000000, 1189.000000)">
                        <g id="folderOpen(1)" transform="translate(65.000000, 179.000000)">
                            <path
                                d="M17.8435394,14.3005117 L0,14.3005117 L0,1.23441365 C0,0.566695096 0.541279318,0.0254157783 1.20899787,0.0254157783 L7.48473348,0.0254157783 C7.8280597,0.0254157783 8.15518124,0.171385928 8.38452026,0.426908316 L9.69509595,1.88720682 C9.92443497,2.14272921 10.2515565,2.28869936 10.5948827,2.28869936 L16.6344989,2.28869936 C17.3022175,2.28869936 17.8435394,2.82997868 17.8435394,3.49769723 L17.8435394,14.3005117 L17.8435394,14.3005117 Z"
                                id="Path"
                                fill="#FCD462"
                            />
                            <rect
                                id="Rectangle"
                                fill="#EBF0F3"
                                x="3.27398721"
                                y="3.64814499"
                                width="13.4223881"
                                height="4.41599147"
                            />
                            <path
                                d="M17.1007676,14.7660128 L0.967761194,14.7660128 C0.332110874,14.7660128 -0.130746269,14.1633262 0.0333049041,13.5492111 L1.93462687,5.36575693 C2.04767591,4.94255864 2.43104478,4.64814499 2.86908316,4.64814499 L19.0020896,4.64814499 C19.6377399,4.64814499 20.100597,5.25083156 19.9365458,5.8649467 L18.0352239,14.0484009 C17.9221748,14.4715991 17.538806,14.7660128 17.1007676,14.7660128 Z"
                                id="Path"
                                fill="#F6C358"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

FolderOpen.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

FolderOpen.defaultProps = {
    className: undefined,
    style: undefined,
};

export default FolderOpen;
