import React from 'react';
import Header from './header';
import SideNavigation from './sideNavigation';
import AccountPage from './accountPage';
import './styles.css';
import './media-queries.css';

export default function AdminExample() {
    return (
        <section className="rainbow-admin_view-port rainbow-background-color_gray-1">

            <Header />

            <SideNavigation />

            <article className="rainbow-admin_work-space">

                <AccountPage />

            </article>

        </section>
    );
}
