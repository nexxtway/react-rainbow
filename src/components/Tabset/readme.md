##### Tabset base

```js
import React from 'react';
import { Tabset, Tab, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledHeader = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const StyledTabContent = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    color: ${props => props.text.label};
    height: 200px;
    border-radius: 0 0 0.875rem 0.875rem;
`;

class TabsetExample extends React.Component {
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
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
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
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows caused by sunlight always appear in the section of sky directly
                    opposite the sun.
                </StyledTabContent>
            );
        } else if (selected === 'shared') {
            return (
                <StyledTabContent
                    aria-labelledby="shared"
                    id="sharedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows can be full circles. However, the observer normally sees only an arc
                    formed by illuminated droplets above the ground, and centered on a line from the
                    sun to the observer's eye.
                </StyledTabContent>
            );
        } else if (selected === 'locked') {
            return (
                <StyledTabContent
                    aria-labelledby="locked"
                    id="lockedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows can be full circles. However, the observer normally sees only an arc
                    formed by illuminated droplets above the ground.
                </StyledTabContent>
            );
        }
        return (
            <StyledTabContent
                aria-labelledby="forums"
                id="forumsTab"
                className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
            >
                In a primary rainbow, the arc shows red on the outer part and violet on the inner
                side. This rainbow is caused by light being refracted when entering a droplet of
                water.
            </StyledTabContent>
        );
    }

    render() {
        const { selected } = this.state;

        return (
            <div>
                <GlobalHeader>
                    <ButtonIcon icon={<FontAwesomeIcon icon={faCog} />} disabled />
                </GlobalHeader>
                <div className="rainbow-p-around_large rainbow-align-content_space-between">
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
                </div>
                <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                    <Tabset
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

                        <Tab label="LOCKED" name="locked" id="locked" ariaControls="lockedTab" />

                        <Tab label="FORUMS" name="forums" id="forums" ariaControls="forumsTab" />
                    </Tabset>
                    {this.getTabContent()}
                </div>
            </div>
        );
    }
}

<TabsetExample />;
```

##### Tabset fullWidth

```js
import React from 'react';
import { Tabset, Tab, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV, faFolderOpen, faLock } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const StyledHeader = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const StyledTabContent = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    color: ${props => props.text.label};
    height: 200px;
    border-radius: 0 0 0.875rem 0.875rem;
`;

class TabsetExample extends React.Component {
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
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
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
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows caused by sunlight always appear in the section of sky directly
                    opposite the sun.
                </StyledTabContent>
            );
        } else if (selected === 'shared') {
            return (
                <StyledTabContent
                    aria-labelledby="shared"
                    id="sharedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows can be full circles. However, the observer normally sees only an arc
                    formed by illuminated droplets above the ground, and centered on a line from the
                    sun to the observer's eye.
                </StyledTabContent>
            );
        }
        return (
            <StyledTabContent
                aria-labelledby="locked"
                id="sharedTab"
                className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
            >
                In a primary rainbow, the arc shows red on the outer part and violet on the inner
                side. This rainbow is caused by light being refracted when entering a droplet of
                water, then reflected inside on the back of the droplet and refracted again when
                leaving it.
            </StyledTabContent>
        );
    }

    render() {
        const { selected } = this.state;
        return (
            <div>
                <GlobalHeader>
                    <ButtonIcon icon={<FontAwesomeIcon icon={faCog} />} disabled />
                </GlobalHeader>
                <div className="rainbow-p-around_large rainbow-align-content_space-between">
                    <StyledHeader className="rainbow-font-size-heading_medium rainbow-color_dark-1">
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
                </div>
                <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                    <Tabset
                        fullWidth
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

                        <Tab
                            name="locked"
                            label={
                                <span>
                                    <FontAwesomeIcon icon={faLock} /> LOCKED
                                </span>
                            }
                        />
                    </Tabset>
                    {this.getTabContent()}
                </div>
            </div>
        );
    }
}

<TabsetExample />;
```

##### Tabset with multi Tabs

```js
import React from 'react';
import { Tabset, Tab, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledHeader = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const StyledTabContent = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    color: ${props => props.text.label};
    height: 200px;
    border-radius: 0 0 0.875rem 0.875rem;
`;

class TabsetExample extends React.Component {
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
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
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
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows caused by sunlight always appear in the section of sky directly
                    opposite the sun.
                </StyledTabContent>
            );
        } else if (selected === 'locked') {
            return (
                <StyledTabContent
                    aria-labelledby="recents"
                    id="recentsTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows caused by sunlight always appear in the section of sky directly
                    opposite the sun.
                </StyledTabContent>
            );
        } else if (selected === 'saved') {
            return (
                <StyledTabContent
                    aria-labelledby="shared"
                    id="sharedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows can be full circles. However, the observer normally sees only an arc
                    formed by illuminated droplets above the ground, and centered on a line from the
                    sun to the observer's eye.
                </StyledTabContent>
            );
        } else if (selected === 'drafts') {
            return (
                <StyledTabContent
                    aria-labelledby="shared"
                    id="sharedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows caused by sunlight always appear in the section of sky directly
                    opposite the sun.
                </StyledTabContent>
            );
        } else if (selected === 'trash') {
            return (
                <StyledTabContent
                    aria-labelledby="shared"
                    id="sharedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows can be full circles. However, the observer normally sees only an arc
                    formed by illuminated droplets above the ground, and centered on a line from the
                    sun to the observer's eye.
                </StyledTabContent>
            );
        } else if (selected === 'spam') {
            return (
                <StyledTabContent
                    aria-labelledby="shared"
                    id="sharedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </StyledTabContent>
            );
        } else if (selected === 'imported') {
            return (
                <StyledTabContent
                    aria-labelledby="shared"
                    id="sharedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows caused by sunlight always appear in the section of sky directly
                    opposite the sun.
                </StyledTabContent>
            );
        } else if (selected === 'promoted') {
            return (
                <StyledTabContent
                    aria-labelledby="shared"
                    id="sharedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </StyledTabContent>
            );
        } else if (selected === 'verified') {
            return (
                <StyledTabContent
                    aria-labelledby="shared"
                    id="sharedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows can be full circles. However, the observer normally sees only an arc
                    formed by illuminated droplets above the ground, and centered on a line from the
                    sun to the observer's eye.
                </StyledTabContent>
            );
        }
        return (
            <StyledTabContent
                aria-labelledby="locked"
                id="sharedTab"
                className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
            >
                In a primary rainbow, the arc shows red on the outer part and violet on the inner
                side. This rainbow is caused by light being refracted when entering a droplet of
                water, then reflected inside on the back of the droplet and refracted again when
                leaving it.
            </StyledTabContent>
        );
    }

    render() {
        const { selected } = this.state;

        return (
            <div>
                <GlobalHeader>
                    <ButtonIcon icon={<FontAwesomeIcon icon={faCog} />} disabled />
                </GlobalHeader>
                <div className="rainbow-p-around_large rainbow-align-content_space-between">
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
                </div>
                <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                    <Tabset
                        id="tabset-3"
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

                        <Tab label="LOCKED" name="locked" id="locked" ariaControls="lockedTab" />

                        <Tab label="SAVED" name="saved" id="saved" ariaControls="savedTab" />

                        <Tab label="DRAFTS" name="drafts" id="drafts" ariaControls="draftsTab" />

                        <Tab
                            label="STARRED"
                            name="starred"
                            id="starred"
                            ariaControls="starredTab"
                        />

                        <Tab label="TRASH" name="trash" id="trash" ariaControls="trashTab" />

                        <Tab label="SENT" name="sent" id="sent" ariaControls="sentTab" />

                        <Tab label="SPAM" name="spam" id="spam" ariaControls="spamTab" />

                        <Tab
                            label="IMPORTED"
                            name="imported"
                            id="imported"
                            ariaControls="importedTab"
                        />

                        <Tab
                            label="PROMOTED"
                            name="promoted"
                            id="promoted"
                            ariaControls="promotedTab"
                        />

                        <Tab
                            label="VERIFIED"
                            name="verified"
                            id="verified"
                            ariaControls="verifiedTab"
                        />

                        <Tab
                            label="RELATED"
                            name="related"
                            id="related"
                            ariaControls="relatedTab"
                        />
                    </Tabset>
                    {this.getTabContent()}
                </div>
            </div>
        );
    }
}

<TabsetExample />;
```

##### Tabset with Tabs changed dynamically

```js
import React from 'react';
import {
    Tabset,
    Tab,
    ButtonGroup,
    ButtonIcon
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faCog
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledHeader = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.main};
`;

const StyledTabContent = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    background: ${props => props.background.main};
    color: ${props => props.text.label};
    height: 200px;
    border-radius: 0 0 0.875rem 0.875rem;
`;

class TabsetExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'primary',
            isRecentsAdded: false
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    addRecents() {
        const { isRecentsAdded, selected } = this.state;
        this.setState({ isRecentsAdded: !isRecentsAdded });
        if (selected === 'recents')
            this.setState({ selected: 'primary' });
    }

    renderRecents() {
        const { isRecentsAdded } = this.state;
        if (isRecentsAdded) {
            return (
                <Tab
                    label="RECENTS"
                    name="recents"
                    id="recents"
                    ariaControls="recentsTab"
                />
            );
        }
        return null;
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
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
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
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows caused by sunlight always appear in the section of sky directly
                    opposite the sun.
                </StyledTabContent>
            );
        } else if (selected === 'shared') {
            return (
                <StyledTabContent
                    aria-labelledby="shared"
                    id="sharedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows can be full circles. However, the observer normally sees only an arc
                    formed by illuminated droplets above the ground, and centered on a line from the
                    sun to the observer's eye.
                </StyledTabContent>
            );
        } else if (selected === 'locked') {
            return (
                <StyledTabContent
                    aria-labelledby="locked"
                    id="lockedTab"
                    className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
                >
                    Rainbows can be full circles. However, the observer normally sees only an arc
                    formed by illuminated droplets above the ground.
                </StyledTabContent>
            );
        }
        return (
            <StyledTabContent
                aria-labelledby="forums"
                id="forumsTab"
                className="rainbow-p-around_xx-large rainbow-font-size-text_large rainbow-align-text-center"
            >
                In a primary rainbow, the arc shows red on the outer part and violet on the inner
                side. This rainbow is caused by light being refracted when entering a droplet of
                water.
            </StyledTabContent>
        );
    }

    render() {
        const { selected } = this.state;

        return (
            <div>
                <GlobalHeader>
                    <ButtonIcon icon={<FontAwesomeIcon icon={faCog} />} disabled />
                </GlobalHeader>
                <div className="rainbow-p-around_large rainbow-align-content_space-between">
                    <StyledHeader className="rainbow-font-size-heading_medium">
                        This is the header
                    </StyledHeader>
                    <ButtonIcon
                        id="button-icon_add-recents"
                        variant="border"
                        icon={<FontAwesomeIcon icon={faPlus} />}
                        onClick={() => this.addRecents()}
                    />
                </div>
                <div className="rainbow-flex rainbow-flex_column rainbow_vertical-stretch">
                    <Tabset
                        id="tabset-7"
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
                        {this.renderRecents()}
                        <Tab
                            label="SHARED"
                            name="shared"
                            id="shared"
                            ariaControls="sharedTab"
                        />
                        <Tab
                            label="LOCKED"
                            name="locked"
                            id="locked"
                            ariaControls="lockedTab"
                        />
                        <Tab
                            label="FORUMS"
                            name="forums"
                            id="forums"
                            ariaControls="forumsTab"
                        />
                    </Tabset>
                    {this.getTabContent()}
                </div>
            </div>
        );
    }
}

<TabsetExample />;
```
