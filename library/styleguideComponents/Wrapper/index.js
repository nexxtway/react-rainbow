/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import Application from '../../../src/components/Application';
import Picklist from '../../../src/components/Picklist';
import PicklistOption from '../../../src/components/PicklistOption';

const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(rootReducer);

const StyledPicklistContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const StyledPicklist = styled(Picklist)`
    width: 200px;
    margin-top: 24px;
    margin-right: 24px;
`;

const defaultValue = {
    name: 'rainbow',
    label: 'Rainbow',
};

const orangeTheme = {
    rainbow: {
        palette: {
            brand: '#ff6d00',
            success: '#02cc3b',
            error: '#d81204',
        },
    },
};

const deepPurpleTheme = {
    rainbow: {
        palette: {
            brand: '#6860db',
        },
    },
};

const cyanTheme = {
    rainbow: {
        palette: {
            brand: '#80deea',
        },
    },
};

export default function Wrapper({ children }) {
    const [theme, setTheme] = useState(defaultValue);

    return (
        <Application theme={theme.value}>
            <StyledPicklistContainer>
                <StyledPicklist label="Select theme" onChange={setTheme} value={theme}>
                    <PicklistOption name="rainbow" label="Rainbow" />
                    <PicklistOption name="orange" label="Orange" value={orangeTheme} />
                    <PicklistOption
                        name="deep-purple"
                        label="Deep Purple"
                        value={deepPurpleTheme}
                    />
                    <PicklistOption name="cyan" label="Cyan" value={cyanTheme} />
                </StyledPicklist>
            </StyledPicklistContainer>
            <Provider store={store}>{children}</Provider>
        </Application>
    );
}

Wrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

Wrapper.defaultProps = {
    children: [],
};
