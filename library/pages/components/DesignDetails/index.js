/* eslint-disable react/prop-types, react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from './../../../../src/components/Breadcrumb';
import Breadcrumbs from './../../../../src/components/Breadcrumbs';
import Card from './../../../../src/components/Card';
import InnerImg from './innerImg';
import DonwloadDesignButtons from './../DonwloadDesignButtons';
import RenderIf from './../../../../src/components/RenderIf';
import { libraryPages, websitePages } from './pagesData';
import CarbonAds from '../CarbonAds';
import './styles.css';
import './media-queries.css';

function getCategoryPages(category) {
    if (category === 'library') {
        return libraryPages;
    }
    return websitePages;
}

function CategoryCards({ category, title }) {
    const pages = getCategoryPages(category).filter(page => page.name !== title);
    return pages.map((page, index) => {
        const key = `category-page-${index}`;
        const { name, icon, href } = page;

        return (
            <a key={key} className="react-rainbow-designs_anchor" href={href}>
                <Card className="react-rainbow-designs_card" footer={name}>
                    <span className="react-rainbow-designs_card-image">{icon}</span>
                </Card>
            </a>
        );
    });
}

export default function DesignDetails(props) {
    const {
        title,
        category,
        description,
        children,
        sketchUrl,
        illustratorUrl,
        photoshopUrl,
        liveUrl,
        // viewsAmount,
        // downloadsAmount,
        imageSrc,
        previewUrl,
    } = props;
    const cardStyles = { backgroundImage: `url("${imageSrc}")` };

    return (
        <section className="react-rainbow-designs-details_view-port rainbow-p-vertical_medium rainbow-p-horizontal_x-large rainbow-background-color_gray-1">
            <header className="react-rainbow-design-detail_header">
                <div>
                    <Breadcrumbs>
                        <Breadcrumb label="Designs" href="/#/Designs/" />
                        <Breadcrumb label={title} />
                    </Breadcrumbs>
                    <h1 className="react-rainbow-design-detail_title">{title}</h1>
                </div>
                <CarbonAds className="react-rainbow-design-detail_carbon-ads rainbow-m-bottom_small" />
            </header>
            <section className="react-rainbow-design-detail_content rainbow-m-top_x-small rainbow-flex">
                <article className="react-rainbow-design-detail_img-container">
                    {/* <h3 className="react-rainbow-design-detail_count-details">
                        <span> {viewsAmount} views </span>
                        •
                        <span> {downloadsAmount} downloads </span>
                    </h3> */}
                    <a href={previewUrl} target="_blank" rel="noopener noreferrer">
                        <Card className="react-rainbow-design-detail_img" style={cardStyles}>
                            <InnerImg liveUrl={liveUrl} previewUrl={previewUrl} />
                        </Card>
                    </a>
                </article>
                <article className="react-rainbow-design-detail_info-container">
                    <DonwloadDesignButtons
                        className="react-rainbow-design-detail_donwload-buttons-container"
                        sketchUrl={sketchUrl}
                        photoshopUrl={photoshopUrl}
                        illustratorUrl={illustratorUrl}
                    />
                    <article>
                        <h2 className="react-rainbow-design-detail_subtitle">Description</h2>
                        <p className="react-rainbow-design-detail_description">{description}</p>
                        {children}
                    </article>
                </article>
            </section>
            <section>
                <RenderIf isTrue={category && getCategoryPages(category).length > 1}>
                    <h2 className="react-rainbow-design-detail_subtitle rainbow-align-content_center">
                        More like this
                    </h2>
                    <div className="react-rainbow-design-detail_category rainbow-flex">
                        <CategoryCards category={category} title={title} />
                    </div>
                </RenderIf>
            </section>
        </section>
    );
}

DesignDetails.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node,
    // viewsAmount: PropTypes.oneOfType([
    //     PropTypes.number,
    //     PropTypes.string,
    // ]),
    // downloadsAmount: PropTypes.oneOfType([
    //     PropTypes.number,
    //     PropTypes.string,
    // ]),
    liveUrl: PropTypes.string,
    previewUrl: PropTypes.string,
    imageSrc: PropTypes.string,
};

DesignDetails.defaultProps = {
    title: undefined,
    description: undefined,
    children: null,
    viewsAmount: 0,
    downloadsAmount: 0,
    liveUrl: undefined,
    previewUrl: undefined,
    imageSrc: undefined,
};
