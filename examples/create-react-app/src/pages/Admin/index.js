import React from 'react';
import Header from './header';
import SideNavigation from './sideNavigation';
import AccountPage from './accountPage';
import './styles.css';
import './media-queries.css';

export default function AdminExample() {
    return (
        <main className="rainbow-admin_view-port rainbow-background-color_gray-1">
            <Header />
            <SideNavigation />
            <article className="rainbow-admin_main-inner">
                <AccountPage />
            </article>
        </main>
    );
}
