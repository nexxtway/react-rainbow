import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.css';

const SRC = process.env.REACT_APP_CARBON_ADS_SRC;

export default class CarbonAds extends Component {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = SRC;
        script.id = '_carbonads_js';

        this.containerRef.current.appendChild(script);
    }

    getClassName() {
        const { className } = this.props;
        return classnames('react-rainbow-carbonads', className);
    }

    render() {
        const { style } = this.props;

        return <span className={this.getClassName()} style={style} ref={this.containerRef} />;
    }
}

CarbonAds.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

CarbonAds.defaultProps = {
    className: undefined,
    style: undefined,
};
