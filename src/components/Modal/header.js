import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './closeIcon';
import HeaderTitle from './headerTitle';
import RenderIf from '../RenderIf';
import ButtonIcon from '../ButtonIcon';
import './styles.css';

export default function Header(props) {
    const {
        title,
        id,
        onClick,
    } = props;
    return (
        <div className="rainbow-modal_header">
            <ButtonIcon className="rainbow-modal_close" icon={<CloseIcon />} title="Close" onClick={onClick} />
            <RenderIf isTrue={!!title}>
                <header>
                    <RenderIf isTrue={!!title}>
                        <HeaderTitle id={id} title={title} />
                    </RenderIf>
                </header>
            </RenderIf>
        </div>
    );
}

Header.propTypes = {
    id: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    onClick: PropTypes.func,
};

Header.defaultProps = {
    id: undefined,
    title: undefined,
    onClick: () => {},
};
