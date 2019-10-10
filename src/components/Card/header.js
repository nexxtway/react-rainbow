import React from 'react';
import PropTypes from 'prop-types';
import HeaderTitle from './headerTitle';
import RenderIf from '../RenderIf';
import StyledHeaderContainer from './styled/headerContainer';
import StyledHeader from './styled/header';
import StyledIcon from './styled/icon';

export default function Header({ icon, title, actions }) {
    return (
        <RenderIf isTrue={!!(icon || title || actions)}>
            <StyledHeaderContainer>
                <StyledHeader>
                    <RenderIf isTrue={!!icon}>
                        <StyledIcon>{icon}</StyledIcon>
                    </RenderIf>
                    <HeaderTitle title={title} />
                </StyledHeader>
                <RenderIf isTrue={!!actions}>
                    <div>{actions}</div>
                </RenderIf>
            </StyledHeaderContainer>
        </RenderIf>
    );
}

Header.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    icon: PropTypes.node,
    actions: PropTypes.node,
};

Header.defaultProps = {
    title: null,
    icon: null,
    actions: null,
};
