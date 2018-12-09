/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Prismic } from 'react-prismic-cms';
import Query from './query';
import './styles.css';

export default function ExperienceExamplesPage() {
    return (
        <Prismic repo="rainbow-doc">
            <div className="react-rainbow-experience-examples-view-port">
                <h1 className="react-rainbow-experience-examples-header-title">
                    Experience examples
                </h1>
                <div className="react-rainbow-experience-examples-container">
                    <Query value="experience-examples" />
                </div>
            </div>
        </Prismic>
    );
}
