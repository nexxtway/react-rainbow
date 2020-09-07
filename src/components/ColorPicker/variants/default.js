import React, { useRef, useContext, useImperativeHandle } from 'react';
import { ColorPickerContext } from '../context';
import { StyledFlexContainer } from '../styled';
import {
    StyledSaturationContainer,
    StyledSlidersContainer,
    StyledHexColorContainer,
    StyledRgbaColorContainer,
} from './styled';
import { Saturation, Hue, Alpha, Preview, Hex, Rgba, DefaultColors } from '../commons';
import RenderIf from '../../RenderIf';

const Default = React.forwardRef((_props, ref) => {
    const { colors } = useContext(ColorPickerContext);
    const firstRef = useRef();
    const lastRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            firstRef.current.focus();
        },
        click: () => {
            firstRef.current.click();
        },
        blur: () => {
            lastRef.current.blur();
        },
    }));

    const hasColors = colors.length > 0;

    return (
        <>
            <StyledSaturationContainer>
                <Saturation ref={firstRef} />
            </StyledSaturationContainer>
            <StyledFlexContainer>
                <StyledSlidersContainer>
                    <Hue />
                    <Alpha />
                </StyledSlidersContainer>
                <Preview />
            </StyledFlexContainer>
            <StyledFlexContainer>
                <StyledHexColorContainer>
                    <Hex />
                </StyledHexColorContainer>
                <StyledRgbaColorContainer>
                    <RenderIf isTrue={hasColors}>
                        <Rgba />
                    </RenderIf>
                    <RenderIf isTrue={!hasColors}>
                        <Rgba ref={lastRef} />
                    </RenderIf>
                </StyledRgbaColorContainer>
            </StyledFlexContainer>
            <RenderIf isTrue={hasColors}>
                <DefaultColors ref={lastRef} />
            </RenderIf>
        </>
    );
});

export default Default;
