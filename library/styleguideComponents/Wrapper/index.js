/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import Application from '../../../src/components/Application';
import MenuItem from '../../../src/components/MenuItem';
import ButtonMenu from '../../../src/components/ButtonMenu';
import InfoFilled from '../../exampleComponents/Icons/infoFilled';
import logo from './../../../assets/images/rainbow-logo.svg';
import isNotComponentPage from '../utils';
import {
    StyledTopBar,
    StyledLeftElement,
    StyledTitle,
    StyledInfoContent,
    StyledContentText,
    StyledBadge,
    StyledLogo,
    StyledPickerTheme,
    StyledColorBox,
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

const greenTheme = {
    rainbow: {
        palette: {
            brand: '#1AD1A3',
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
            brand: '#FFCC00',
            success: '#aeea00',
            error: '#ff5252',
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

export default function Wrapper(props) {
    const { children } = props;
    const [theme, setTheme] = useState();
    const pageName = window.location.hash.split('/')[1];

    if (isNotComponentPage(pageName)) {
        return children;
    }

    return (
        <Application theme={theme}>
            <StyledTopBar>
                <StyledLeftElement>
                    <ButtonMenu buttonVariant="base" icon={<InfoFilled />}>
                        <StyledInfoContent>
                            <StyledContentText>
                                The theme support is
                                <StyledBadge label="BETA" />
                                and
                                <StyledBadge label="WIP" />
                            </StyledContentText>
                        </StyledInfoContent>
                    </ButtonMenu>
                    <StyledTitle>Info</StyledTitle>
                </StyledLeftElement>
                <StyledPickerTheme
                    menuAlignment="right"
                    menuSize="x-small"
                    icon={<StyledLogo src={logo} alt="rainbow logo" />}
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
                        label="Green"
                        icon={<StyledColorBox rainbowTheme={greenTheme.rainbow} />}
                        onClick={() => setTheme(greenTheme)}
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
                        label="Cyan"
                        icon={<StyledColorBox rainbowTheme={cyanTheme.rainbow} />}
                        onClick={() => setTheme(cyanTheme)}
                    />
                </StyledPickerTheme>
            </StyledTopBar>
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
