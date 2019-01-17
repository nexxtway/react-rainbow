/* eslint-disable react/prop-types, react/no-multi-comp */
import React from 'react';
import Card from './../../../src/components/Card';
import { libraryPages, websitePages } from '../components/DesignDetails/pagesData';
import './styles.css';
import './media-queries.css';

function CategoryCards({ pages }) {
    return pages.map((page, index) => {
        const key = `page-${index}`;
        const { name, icon, href } = page;

        return (
            <a key={key} className="react-rainbow-designs_anchor" href={href}>
                <Card className="react-rainbow-designs_card" footer={name}>
                    <span className="react-rainbow-designs_card-image">
                        {icon}
                    </span>
                </Card>
            </a>
        );
    });
}

function CategorySection({ title, pages }) {
    return (
        <div className="react-rainbow-designs_category">
            <h2 className="react-rainbow-designs_sub-header">
                {title}
            </h2>
            <section className="react-rainbow-designs_cards-container">
                <CategoryCards pages={pages} />
            </section>
        </div>
    );
}

export default function Designs() {
    return (
        <div className="react-rainbow-designs_view-port">
            <h1 className="react-rainbow-designs_header">
                Discover our designs
            </h1>
            <CategorySection title="Libraries" pages={libraryPages} />
            <CategorySection title="Websites" pages={websitePages} />
        </div>
    );
}
