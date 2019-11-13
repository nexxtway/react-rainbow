/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Prismic, QueryAt } from 'react-prismic-cms';
import CarbonAds from '../components/CarbonAds';
import ExperienceExample from './experienceExample';
import './styles.css';

export default function ExperienceExamplesPage() {
    return (
        <Prismic repo="rainbow-doc">
            <div className="react-rainbow-experience-examples-view-port">
                <div className="react-rainbow-experience-examples_header-container">
                    <h1 className="react-rainbow-experience-examples-header-title">
                        Experience examples
                    </h1>
                    <CarbonAds className="react-rainbow-experience-examples_carbon-ad" />
                </div>
                <div className="react-rainbow-experience-examples-container">
                    <QueryAt
                        component={ExperienceExample}
                        path="document.type"
                        value="experience-examples"
                    />
                </div>
            </div>
        </Prismic>
    );
}
