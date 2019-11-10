import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import AssistiveText from '../AssistiveText';
import StyledImage from './styled/image';
import StyledImageFooter from './styled/imageFooter';
import StyledFooterTitle from './styled/footerTitle';
import StyledFooterDescription from './styled/footerDescription';

export default function ImageContainer(props) {
    const { className, tabIndex, imageSrc, assistiveText, hasContent, header, description } = props;

    return (
        <div className={className} tabIndex={tabIndex}>
            <StyledImage style={imageSrc} />
            <AssistiveText text={assistiveText} />
            <RenderIf isTrue={hasContent}>
                <StyledImageFooter>
                    <RenderIf isTrue={!!header}>
                        <StyledFooterTitle>{header}</StyledFooterTitle>
                    </RenderIf>
                    <RenderIf isTrue={!!description}>
                        <StyledFooterDescription>{description}</StyledFooterDescription>
                    </RenderIf>
                </StyledImageFooter>
            </RenderIf>
        </div>
    );
}

ImageContainer.propTypes = {
    className: PropTypes.string,
    tabIndex: PropTypes.number,
    imageSrc: PropTypes.object,
    assistiveText: PropTypes.string,
    hasContent: PropTypes.bool.isRequired,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

ImageContainer.defaultProps = {
    className: undefined,
    tabIndex: undefined,
    imageSrc: {},
    assistiveText: undefined,
    header: undefined,
    description: undefined,
};
