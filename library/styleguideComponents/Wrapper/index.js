/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import Application from '../../../src/components/Application';
import MenuItem from '../../../src/components/MenuItem';
import RenderIf from '../../../src/components/RenderIf';
import isNotComponentPage from '../utils';
import ColorBox from './colorBox';
import {
    StyledWrapper,
    StyledTopBar,
    StyledLeftElement,
    StyledContent,
    StyledPickerTheme,
    StyledColorCircle,
    StyledCheckIcon,
} from './styled';
import useCachedState from '../../hooks/useCachedState';
import HelpText from './../../../src/components/HelpText/index';

const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(rootReducer);

const orangeTheme = {
    rainbow: {
        palette
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
            mainBackground: '#f2f2f2',
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
            mainBackground: '#303030',
        },
    },
};

export default function Wrapper(props) {
    const { children } = props;
    const [theme, setTheme] = useCachedState('theme');
    const pageName = window.location.hash.split('/')[1];
    const isCustimizationPage = pageName === 'Customization';

    if (isNotComponentPage(pageName) && !isCustimizationPage) {
        return children;
    }

    return (
        <Application theme={theme}>
            <StyledWrapper>
                <StyledTopBar>
                    <StyledLeftElement>
                        <HelpText
                            title="Information"
                            text={
                                <>
                                    The theme support is <strong>BETA</strong>
                                </>
                            }
                        />
                    </StyledLeftElement>
                    <RenderIf isTrue={!isCustimizationPage}>
                        <StyledPickerTheme
                            menuAlignment="right"
                            menuSize="x-small"
                            icon={<StyledColorCircle />}
                        >
                            <MenuItem label="THEME SELECTOR" variant="header" />
                            <MenuItem
                                label={<ColorBox label="Default" />}
                                icon={!theme && <StyledCheckIcon />}
                                iconPosition="right"
                                onClick={() => setTheme()}
                            />
                            <MenuItem
                                label={<ColorBox label="Orange" color={orangeTheme.rainbow} />}
                                icon={theme === orangeTheme && <StyledCheckIcon />}
                                iconPosition="right"
                                onClick={() => setTheme(orangeTheme)}
                            />
                            <MenuItem
                                label={<ColorBox label="Yellow" color={yellowTheme.rainbow} />}
                                icon={theme === yellowTheme && <StyledCheckIcon />}
                                iconPosition="right"
                                onClick={() => setTheme(yellowTheme)}
                            />
                            <MenuItem
                                label={
                                    <ColorBox label="Deep Purple" color={deepPurpleTheme.rainbow} />
                                }
                                icon={theme === deepPurpleTheme && <StyledCheckIcon />}
                                iconPosition="right"
                                onClick={() => setTheme(deepPurpleTheme)}
                            />
                            <MenuItem
                                label={<ColorBox label="Cyan Dark" color={cyanDarkTheme.rainbow} />}
                                icon={theme === cyanDarkTheme && <StyledCheckIcon />}
                                iconPosition="right"
                                onClick={() => setTheme(cyanDarkTheme)}
                            />
                        </StyledPickerTheme>
                    </RenderIf>
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
