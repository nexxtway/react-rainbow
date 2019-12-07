import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import AssistiveText from '../AssistiveText';
import StyledImage from './styled/image';
import StyledImageFooter from './styled/imageFooter';
import StyledFooterTitle from './styled/footerTitle';
import StyledFooterDescription from './styled/footerDescription';

export default function ImageContainer(props) {
    const { imageSrc, assistiveText, hasContent, header, description } = props;

    return (
        <Fragment>
            <StyledImage style={imageSrc} />
            <AssistiveText text={assistiveText} />
            <RenderIf isTrue={hasContent}>
                <StyledImageFooter>
                    <RenderIf isTrue={!!header}>
                        <StyledFooterTitle title="Imagen Header">{header}</StyledFooterTitle>
                    </RenderIf>
                    <RenderIf isTrue={!!description}>
                        <StyledFooterDescription>{description}</StyledFooterDescription>
                    </RenderIf>
                </StyledImageFooter>
            </RenderIf>
        </Fragment>
    );
}

ImageContainer.propTypes = {
    imageSrc: PropTypes.object,
    assistiveText: PropTypes.string,
    hasContent: PropTypes.bool.isRequired,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

ImageContainer.defaultProps = {
    imageSrc: {},
    assistiveText: undefined,
    header: undefined,
    description: undefined,
};
