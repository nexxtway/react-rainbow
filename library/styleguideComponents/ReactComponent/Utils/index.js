import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../../../src/components/RenderIf';
import ExperienceExampleCards from './../../ExperienceExampleCards';
import PageObjectCard from './pageObjectCard';
import ComponentCard from './../../ComponentCards';
import './styles.css';

export default function Util(props) {
    const { response, type } = props;
    if (response && Array.isArray(response.results) && response.results.length) {
        return (
            <>
                <RenderIf isTrue={type === 'related-component'}>
                    <div className="react-rainbow-utils_text rainbow-m-around_medium">
                        <h1 className="react-rainbow-utils_text-header">Components</h1>
                    </div>
                    <div className="rainbow-flex rainbow-flex_wrap">
                        <ComponentCard results={response.results} />
                    </div>
                </RenderIf>
                <RenderIf isTrue={type === 'experience-examples'}>
                    <div className="react-rainbow-utils_text rainbow-m-around_medium">
                        <h1 className="react-rainbow-utils_text-header">
                            Real experience examples
                        </h1>
                    </div>
                    <div className="rainbow-flex rainbow-flex_wrap">
                        <ExperienceExampleCards results={response.results} />
                    </div>
                </RenderIf>
                <RenderIf isTrue={type === 'page-object' || type === 'tutorials'}>
                    <div className="rainbow-flex rainbow-flex_wrap">
                        <PageObjectCard results={response.results} type={type} />
                    </div>
                </RenderIf>
            </>
        );
    }
    return null;
}

Util.propTypes = {
    response: PropTypes.object,
    type: PropTypes.string,
};

Util.defaultProps = {
    response: null,
    type: undefined,
};
