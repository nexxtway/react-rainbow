##### Tab base

```js
import React from 'react';
import { Tabset, Tab, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const StyledContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    border-radius: 0 0 0.875rem 0.875rem;
`;

const StyledHeaderContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.secondary};
`;

const StyledHeader = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const StyledTabset = styled(Tabset).attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.secondary};
`;

const StyledTabContent = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    color: ${props => props.text.label};
`;

class TabExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: 'recents' };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(event, selected) {
        this.setState({ selected });
    }

    getTabContent() {
        const { selected } = this.state;

        if (selected === 'primary') {
            return (
                <StyledTabContent
                    aria-labelledby="primary"
                    id="primaryTab"
                    className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </StyledTabContent>
            );
        } else if (selected === 'recents') {
            return (
                <StyledTabContent
                    aria-labelledby="recents"
                    id="recentsTab"
                    className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows caused by sunlight always appear in the section of sky directly
                    opposite the sun.
                </StyledTabContent>
            );
        }
        return (
            <StyledTabContent
                aria-labelledby="shared"
                id="sharedTab"
                className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center"
            >
                Rainbows can be full circles. However, the observer normally sees only an arc formed
                by illuminated droplets above the ground, and centered on a line from the sun to the
                observer's eye.
            </StyledTabContent>
        );
    }

    render() {
        const { selected } = this.state;
        return (
            <StyledContainer className="rainbow-p-bottom_xx-large">
                <GlobalHeader>
                    <ButtonIcon icon={<FontAwesomeIcon icon={faCog} />} disabled />
                </GlobalHeader>
                <StyledHeaderContainer className="rainbow-p-around_large rainbow-align-content_space-between">
                    <StyledHeader className="rainbow-font-size-heading_medium">
                        This is the header
                    </StyledHeader>
                    <ButtonGroup>
                        <ButtonIcon
                            variant="border"
                            icon={<FontAwesomeIcon icon={faCog} />}
                            disabled
                        />
                        <ButtonIcon
                            variant="border"
                            icon={<FontAwesomeIcon icon={faEllipsisV} />}
                            disabled
                        />
                    </ButtonGroup>
                </StyledHeaderContainer>
                <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                    <StyledTabset
                        id="tabset-1"
                        onSelect={this.handleOnSelect}
                        activeTabName={selected}
                        className="rainbow-p-horizontal_x-large"
                    >
                        <Tab
                            label="PRIMARY"
                            name="primary"
                            id="primary"
                            ariaControls="primaryTab"
                        />

                        <Tab
                            label="RECENTS"
                            name="recents"
                            id="recents"
                            ariaControls="recentsTab"
                        />

                        <Tab label="SHARED" name="shared" id="shared" ariaControls="sharedTab" />
                    </StyledTabset>
                    {this.getTabContent()}
                </div>
            </StyledContainer>
        );
    }
}

<TabExample />;
```

##### Tab with icon

```js
import React from 'react';
import { Tabset, Tab, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const StyledContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    border-radius: 0 0 0.875rem 0.875rem;
`;

const StyledHeaderContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.secondary};
`;

const StyledHeader = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const StyledTabset = styled(Tabset).attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.secondary};
`;

const StyledTabContent = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    color: ${props => props.text.label};
`;

class TabExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: 'recents' };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(event, selected) {
        this.setState({ selected });
    }

    getTabContent() {
        const { selected } = this.state;

        if (selected === 'primary') {
            return (
                <StyledTabContent
                    aria-labelledby="primary"
                    id="primaryTab"
                    className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </StyledTabContent>
            );
        } else if (selected === 'recents') {
            return (
                <StyledTabContent
                    aria-labelledby="recents"
                    id="recentsTab"
                    className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows caused by sunlight always appear in the section of sky directly
                    opposite the sun.
                </StyledTabContent>
            );
        }
        return (
            <StyledTabContent
                aria-labelledby="shared"
                id="sharedTab"
                className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center"
            >
                Rainbows can be full circles. However, the observer normally sees only an arc formed
                by illuminated droplets above the ground, and centered on a line from the sun to the
                observer's eye.
            </StyledTabContent>
        );
    }

    render() {
        const { selected } = this.state;
        return (
            <StyledContainer className="rainbow-p-bottom_xx-large">
                <GlobalHeader>
                    <ButtonIcon icon={<FontAwesomeIcon icon={faCog} />} disabled />
                </GlobalHeader>
                <StyledHeaderContainer className="rainbow-p-around_large rainbow-align-content_space-between">
                    <StyledHeader className="rainbow-font-size-heading_medium">
                        This is the header
                    </StyledHeader>
                    <ButtonGroup>
                        <ButtonIcon
                            variant="border"
                            icon={<FontAwesomeIcon icon={faCog} />}
                            disabled
                        />
                        <ButtonIcon
                            variant="border"
                            icon={<FontAwesomeIcon icon={faEllipsisV} />}
                            disabled
                        />
                    </ButtonGroup>
                </StyledHeaderContainer>
                <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                    <StyledTabset
                        id="tabset-2"
                        onSelect={this.handleOnSelect}
                        activeTabName={selected}
                        className="rainbow-p-horizontal_x-large"
                    >
                        <Tab
                            name="primary"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faFolderOpen} /> PRIMARY
                                </span>
                            }
                        />

                        <Tab
                            name="recents"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faClock} /> RECENTS
                                </span>
                            }
                        />

                        <Tab
                            name="shared"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faStar} /> SHARED
                                </span>
                            }
                        />
                    </StyledTabset>
                    {this.getTabContent()}
                </div>
            </StyledContainer>
        );
    }
}

<TabExample />;
```

##### Tab disabled

```js
import React from 'react';
import { Tabset, Tab, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const StyledContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    border-radius: 0 0 0.875rem 0.875rem;
`;

const StyledHeaderContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.secondary};
`;

const StyledHeader = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const StyledTabset = styled(Tabset).attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.secondary};
`;

const StyledTabContent = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    color: ${props => props.text.label};
`;

class TabExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: 'recents' };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(event, selected) {
        this.setState({ selected });
    }

    getTabContent() {
        const { selected } = this.state;

        if (selected === 'primary') {
            return (
                <StyledTabContent
                    aria-labelledby="primary"
                    id="primaryTab"
                    className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </StyledTabContent>
            );
        } else if (selected === 'recents') {
            return (
                <StyledTabContent
                    aria-labelledby="recents"
                    id="recentsTab"
                    className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows caused by sunlight always appear in the section of sky directly
                    opposite the sun.
                </StyledTabContent>
            );
        }
        return (
            <StyledTabContent
                aria-labelledby="shared"
                id="sharedTab"
                className="rainbow-p-around_xx-large rainbow-m-bottom_xx-large rainbow-font-size-text_large rainbow-align-text-center"
            >
                Rainbows can be full circles. However, the observer normally sees only an arc formed
                by illuminated droplets above the ground, and centered on a line from the sun to the
                observer's eye.
            </StyledTabContent>
        );
    }

    render() {
        const { selected } = this.state;
        return (
            <StyledContainer className="rainbow-p-bottom_xx-large">
                <GlobalHeader>
                    <ButtonIcon icon={<FontAwesomeIcon icon={faCog} />} disabled />
                </GlobalHeader>
                <StyledHeaderContainer className="rainbow-p-around_large rainbow-align-content_space-between">
                    <StyledHeader className="rainbow-font-size-heading_medium">
                        This is the header
                    </StyledHeader>
                    <ButtonGroup>
                        <ButtonIcon
                            variant="border"
                            icon={<FontAwesomeIcon icon={faCog} />}
                            disabled
                        />
                        <ButtonIcon
                            variant="border"
                            icon={<FontAwesomeIcon icon={faEllipsisV} />}
                            disabled
                        />
                    </ButtonGroup>
                </StyledHeaderContainer>
                <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                    <StyledTabset
                        id="tabset-3"
                        onSelect={this.handleOnSelect}
                        activeTabName={selected}
                        className="rainbow-p-horizontal_x-large"
                    >
                        <Tab
                            name="primary"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faFolderOpen} /> PRIMARY
                                </span>
                            }
                        />

                        <Tab
                            name="recents"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faClock} /> RECENTS
                                </span>
                            }
                        />

                        <Tab
                            name="shared"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faStar} /> SHARED
                                </span>
                            }
                            disabled
                        />
                    </StyledTabset>
                    {this.getTabContent()}
                </div>
            </StyledContainer>
        );
    }
}

<TabExample />;
```
