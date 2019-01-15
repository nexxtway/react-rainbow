/* eslint-disable react/prop-types, react/no-multi-comp */
import React from 'react';
import SketchLogo from './sketch.svg';
import IllustratorLogo from './illustrator.svg';
import PhotoshopLogo from './photoshop.svg';
import DonwloadIcon from './cloud-arrow-donwload.svg';
import RenderIf from './../../../../src/components/RenderIf';
import './styles.css';

function AnchorIcon({ logo, href, alt }) {
    return (
        <RenderIf isTrue={!!href}>
            <a className="react-rainbow-donwload-button_anchor" href={href}>
                <img src={logo} alt={alt} />
                <div className="react-rainbow-donwload-button_button--hover">
                    <img className="react-rainbow-donwload-button_icon" src={DonwloadIcon} alt="donwload icon" />
                </div>
            </a>
        </RenderIf>
    );
}

export default function DonwloadDesignButtons(props) {
    const {
        className,
        sketchUrl,
        photoshopUrl,
        illustratorUrl,
    } = props;

    return (
        <div className={className}>
            <AnchorIcon logo={SketchLogo} href={sketchUrl} alt="sketch logo" />
            <AnchorIcon logo={IllustratorLogo} href={illustratorUrl} alt="illustrator logo" />
            <AnchorIcon logo={PhotoshopLogo} href={photoshopUrl} alt="photoshop logo" />
        </div>
    );
}
