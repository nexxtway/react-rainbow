/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Application from '../../../src/components/Application';
import MenuItem from '../../../src/components/MenuItem';
import InfoFilled from '../../exampleComponents/Icons/infoFilled';
import isNotComponentPage from '../utils';
import ColorBox from './colorBox';
import {
    StyledWrapper,
    StyledTopBar,
    StyledLeftElement,
    StyledTitle,
    StyledContent,
    StyledBadge,
    StyledPickerTheme,
    StyledColorCircle,
    StyledCheckIcon,
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

const cyanDarkTheme = {
    rainbow: {
        palette: {
            brand: '#80deea',
            success: '#b9f6ca',
            error: '#ff5252',
            background: {
                primary: '#242424',
                secondary: '#333333',
            },
        },
    },
};

const pageStatus = {
    pageName: window.location.hash.split('/')[1],
    examplesCount: 0,
    examplesThemes: [],
};

function registerExample() {
    const registeredExamplesCount = pageStatus.examplesCount;
    pageStatus.examplesThemes.push(undefined);
    pageStatus.examplesCount += 1;
    return registeredExamplesCount * 2 + 1;
}

function reset() {
    pageStatus.examplesThemes = [];
    pageStatus.examplesCount = 0;
}

function getThemeFromCache(id) {
    const index = (Number(id) - 1) / 2;
    return pageStatus.examplesThemes[index] || undefined;
}

function updateThemeInCache(id, theme) {
    const index = (Number(id) - 1) / 2;
    pageStatus.examplesThemes[index] = theme;
}

function urlChanged() {
    const pageName = window.location.hash.split('/')[1];
    if (pageStatus.pageName !== pageName) {
        pageStatus.pageName = pageName;
        reset();
    }
    pageStatus.examplesCount = 0;
}

window.addEventListener('hashchange', urlChanged, false);

export default function Wrapper(props) {
    const { children } = props;
    const [theme, setTheme] = useState();
    const pageName = window.location.hash.split('/')[1];
    const exampleId = useRef();

    useEffect(() => {
        exampleId.current = window.location.hash.split('/')[2] || registerExample();
        const cachedTheme = getThemeFromCache(exampleId.current);
        if (cachedTheme) setTheme(cachedTheme);
    }, []);

    useEffect(() => {
        const cachedTheme = getThemeFromCache(exampleId.current);
        if (cachedTheme !== theme) updateThemeInCache(exampleId.current, theme);
    }, [theme]);

    if (isNotComponentPage(pageName)) {
        return children;
    }

    return (
        <Application theme={theme}>
            <StyledWrapper>
                <StyledTopBar>
                    <StyledLeftElement>
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
                            label={<ColorBox label="Default" />}
                            icon={!theme && <StyledCheckIcon icon={faCheck} />}
                            iconPosition="right"
                            onClick={() => setTheme()}
                        />
                        <MenuItem
                            label={<ColorBox label="Orange" color={orangeTheme.rainbow} />}
                            icon={theme === orangeTheme && <StyledCheckIcon icon={faCheck} />}
                            iconPosition="right"
                            onClick={() => setTheme(orangeTheme)}
                        />
                        <MenuItem
                            label={<ColorBox label="Yellow" color={yellowTheme.rainbow} />}
                            icon={theme === yellowTheme && <StyledCheckIcon icon={faCheck} />}
                            iconPosition="right"
                            onClick={() => setTheme(yellowTheme)}
                        />
                        <MenuItem
                            label={<ColorBox label="Deep Purple" color={deepPurpleTheme.rainbow} />}
                            icon={theme === deepPurpleTheme && <StyledCheckIcon icon={faCheck} />}
                            iconPosition="right"
                            onClick={() => setTheme(deepPurpleTheme)}
                        />
                        <MenuItem
                            label={<ColorBox label="Cyan Dark" color={cyanDarkTheme.rainbow} />}
                            icon={theme === cyanDarkTheme && <StyledCheckIcon icon={faCheck} />}
                            iconPosition="right"
                            onClick={() => setTheme(cyanDarkTheme)}
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
