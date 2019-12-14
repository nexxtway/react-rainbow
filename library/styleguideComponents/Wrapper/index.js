/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import Application from '../../../src/components/Application';
import MenuItem from '../../../src/components/MenuItem';
import InfoFilled from '../../exampleComponents/Icons/infoFilled';
import isNotComponentPage from '../utils';
import {
    StyledWrapper,
    StyledTopBar,
    StyledLeftElement,
    StyledTitle,
    StyledContent,
    StyledBadge,
    StyledPickerTheme,
    StyledColorBox,
    StyledColorCircle,
} from './styled';

const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(rootReducer);

const orangeTheme = {
    rainbow: {
        palette: {
            brand: '#f8752d',
            success: '#00a042',
            error: '#e53935',
        },
    },
};

const cyanTheme = {
    rainbow: {
        palette: {
            brand: '#80deea',
            success: '#b9f6ca',
            error: '#ff5252',
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

const yellowTheme = {
    rainbow: {
        palette: {
            brand: '#ffcc00',
            success: '#aeea00',
            error: '#ff5252',
        },
    },
};

const orangeDarkTheme = {
    rainbow: {
        palette: {
            brand: '#f8752d',
            success: '#00a042',
            error: '#e53935',
            background: {
                primary: '#242424',
                secondary: '#333333',
            },
            divider: '#333333',
        },
    },
};

export default function Wrapper(props) {
    const { children, preview } = props;
    const [theme, setTheme] = useState();
    const pageName = window.location.hash.split('/')[1];

    console.log(props);

    if (isNotComponentPage(pageName)) {
        return children;
    }

    return (
        <Application theme={theme}>
            <StyledWrapper>
                <StyledTopBar>
                    <StyledLeftElement>
                        {preview}
                        <InfoFilled />
                        <StyledTitle>
                            The theme support is <StyledBadge label="BETA" /> and{' '}
                            <StyledBadge label="WIP" />
                        </StyledTitle>
                    </StyledLeftElement>
                    <StyledPickerTheme
                        menuAlignment="right"
                        menuSize="x-small"
                        icon={<StyledColorCircle />}
                    >
                        <MenuItem label="THEME SELECTOR" variant="header" />
                        <MenuItem
                            label="Default"
                            icon={<StyledColorBox />}
                            onClick={() => setTheme()}
                        />
                        <MenuItem
                            label="Orange"
                            icon={<StyledColorBox rainbowTheme={orangeTheme.rainbow} />}
                            onClick={() => setTheme(orangeTheme)}
                        />
                        <MenuItem
                            label="Cyan"
                            icon={<StyledColorBox rainbowTheme={cyanTheme.rainbow} />}
                            onClick={() => setTheme(cyanTheme)}
                        />
                        <MenuItem
                            label="Yellow"
                            icon={<StyledColorBox rainbowTheme={yellowTheme.rainbow} />}
                            onClick={() => setTheme(yellowTheme)}
                        />
                        <MenuItem
                            label="Deep Purple"
                            icon={<StyledColorBox rainbowTheme={deepPurpleTheme.rainbow} />}
                            onClick={() => setTheme(deepPurpleTheme)}
                        />
                        <MenuItem
                            label="Orange Dark"
                            icon={<StyledColorBox rainbowTheme={orangeDarkTheme.rainbow} />}
                            onClick={() => setTheme(orangeDarkTheme)}
                        />
                    </StyledPickerTheme>
                </StyledTopBar>
                <StyledContent>
                    <Provider store={store}>{children}</Provider>
                </StyledContent>
            </StyledWrapper>
        </Application>
    );
}

Wrapper.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

Wrapper.defaultProps = {
    children: [],
};
