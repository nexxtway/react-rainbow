import React, { Component } from 'react';
import './styles.css';

const SRC = process.env.REACT_APP_CARBON_ADS_SRC;

export default class CarbonAds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        };
    }

    render() {
        return (
            <span className="react-rainbow-carbonads">
                <script async type="text/javascript" src={SRC} id="_carbonads_js" />
            </span>
        );
    }
}
