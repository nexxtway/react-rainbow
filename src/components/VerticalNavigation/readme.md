##### VerticalNavigation

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    width: 220px;
    background: ${props => props.background.main};
    border-bottom-left-radius: 0.875rem;
    border-right: 1px solid ${props => props.border.divider};
`;

class SimpleVerticalNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'item 1',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        return (
            <VerticalNavigation
                selectedItem={this.state.selectedItem}
                onSelect={this.handleOnSelect}
            >
                <VerticalSection>
                    <VerticalItem name="item-1" label="Recent" />
                    <VerticalItem name="item-2" label="Projects" />
                    <VerticalItem name="item-3" label="Folders" />
                    <VerticalItem name="item-4" label="Settings" />
                    <VerticalItem name="item-5" label="Reports" />
                </VerticalSection>
            </VerticalNavigation>
        );
    }
}

<div>
    <GlobalHeader src="images/user/user3.jpg" />
    <StyledContainer className="rainbow-p-top_small rainbow-p-bottom_medium">
        <SimpleVerticalNavigation />
    </StyledContainer>
</div>
```

##### compact VerticalNavigation compact with href

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    width: 220px;
    background: ${props => props.background.main};
    border-bottom-left-radius: 0.875rem;
    border-right: 1px solid ${props => props.border.divider};
`;

class CompactVerticalNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: '',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        return (
            <VerticalNavigation
                id="vertical-navigation-3"
                compact
                selectedItem={this.state.selectedItem}
                onSelect={this.handleOnSelect}
            >
                <VerticalSection>
                    <VerticalItem name="item-1" label="Avatar" href="/#/Components/Avatar" />
                    <VerticalItem name="item-2" label="Button" href="/#/Components/Button" />
                    <VerticalItem
                        name="item-3"
                        label="ButtonMenu"
                        href="/#/Components/ButtonMenu"
                    />
                    <VerticalItem
                        name="item-4"
                        label="VerticalItem"
                        href="/#/Components/VerticalItem"
                    />
                    <VerticalItem
                        name="item-5"
                        label="VerticalNavigation"
                        href="/#/Components/VerticalNavigation"
                    />
                </VerticalSection>
            </VerticalNavigation>
        );
    }
}

<div>
    <GlobalHeader src="images/user/user2.jpg" />
    <StyledContainer className="rainbow-p-top_small rainbow-p-vertical_medium">
        <CompactVerticalNavigation />
    </StyledContainer>
</div>
```

##### vertical navigation with headers

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    width: 220px;
    background: ${props => props.background.main};
    border-bottom-left-radius: 0.875rem;
    border-right: 1px solid ${props => props.border.divider};
`;

class VerticalNavigationWithHeaders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'item 1',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        return (
            <VerticalNavigation
                selectedItem={this.state.selectedItem}
                onSelect={this.handleOnSelect}
            >
                <VerticalSection label="GETTING STARTED">
                    <VerticalItem name="item-1" label="Recent" />
                    <VerticalItem name="item-2" label="Projects" />
                    <VerticalItem name="item-3" label="Settings" />
                </VerticalSection>
                <VerticalSection label="FOLDERS">
                    <VerticalItem name="item-5" label="Created by Me" />
                    <VerticalItem name="item-6" label="Shared with Me" />
                </VerticalSection>
            </VerticalNavigation>
        );
    }
}

<div>
    <GlobalHeader src="images/user/user3.jpg" />
    <StyledContainer className="rainbow-p-top_small rainbow-p-vertical_medium">
        <VerticalNavigationWithHeaders />
    </StyledContainer>
</div>
```

##### vertical navigation with icons

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCog, faFolderOpen, faBook, faReceipt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    width: 220px;
    background: ${props => props.background.main};
    border-bottom-left-radius: 0.875rem;
    border-right: 1px solid ${props => props.border.divider};
`;

class VerticalNavigationWithIcons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'item 5',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        return (
            <VerticalNavigation
                selectedItem={this.state.selectedItem}
                onSelect={this.handleOnSelect}
            >
                <VerticalSection>
                    <VerticalItem
                        name="item-1"
                        label="Folders"
                        icon={<FontAwesomeIcon icon={faFolderOpen} />}
                    />
                    <VerticalItem
                        name="item-2"
                        label="Recents"
                        icon={<FontAwesomeIcon icon={faClock} />}
                    />
                    <VerticalItem
                        name="item-3"
                        label="Settings"
                        icon={<FontAwesomeIcon icon={faCog} />}
                    />
                    <VerticalItem
                        name="item-4"
                        label="Projects"
                        icon={<FontAwesomeIcon icon={faBook} />}
                    />
                    <VerticalItem
                        name="item-5"
                        label="Reports"
                        icon={<FontAwesomeIcon icon={faReceipt} />}
                    />
                </VerticalSection>
            </VerticalNavigation>
        );
    }
}

<div>
    <GlobalHeader />
    <StyledContainer className="rainbow-p-top_small rainbow-p-bottom_large">
        <VerticalNavigationWithIcons />
    </StyledContainer>
</div>
```

##### vertical navigation with header and icons

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCog, faFolderOpen, faBook, faReceipt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    width: 220px;
    background: ${props => props.background.main};
    border-bottom-left-radius: 0.875rem;
    border-right: 1px solid ${props => props.border.divider};
`;

class VerticalNavigationWithIcons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'item 5',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        return (
            <VerticalNavigation
                selectedItem={this.state.selectedItem}
                onSelect={this.handleOnSelect}
            >
                <VerticalSection label="GETTING STARTED">
                    <VerticalItem
                        name="item-1"
                        label="Folders"
                        icon={<FontAwesomeIcon icon={faFolderOpen} />}
                    />
                    <VerticalItem
                        name="item-2"
                        label="Recents"
                        icon={<FontAwesomeIcon icon={faClock} />}
                    />
                </VerticalSection>

                <VerticalSection label="ACCOUNT">
                    <VerticalItem
                        name="item-3"
                        label="Settings"
                        icon={<FontAwesomeIcon icon={faCog} />}
                    />
                    <VerticalItem
                        name="item-4"
                        label="Projects"
                        icon={<FontAwesomeIcon icon={faBook} />}
                    />
                    <VerticalItem
                        name="item-5"
                        label="Reports"
                        icon={<FontAwesomeIcon icon={faReceipt} />}
                    />
                </VerticalSection>
            </VerticalNavigation>
        );
    }
}

<div>
    <GlobalHeader src="images/user/user2.jpg" />
    <StyledContainer className="rainbow-p-vertical_medium rainbow-p-top_small">
        <VerticalNavigationWithIcons />
    </StyledContainer>
</div>
```

##### vertical navigation expandable

```js
import React from 'react';
import {
    VerticalNavigation,
    VerticalItem,
    VerticalSectionOverflow,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTh, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    width: 220px;
    background: ${props => props.background.main};
    border-bottom-left-radius: 0.875rem;
    border-right: 1px solid ${props => props.border.divider};
`;

class ShadedVerticalNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'item 1',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        return (
            <VerticalNavigation
                id="vertical-navigation-11"
                selectedItem={this.state.selectedItem}
                onSelect={this.handleOnSelect}
            >
                <VerticalSectionOverflow label="Folders" description="Folders created, shared...">
                    <VerticalItem
                        name="item-3"
                        label="Apps"
                        icon={<FontAwesomeIcon icon={faTh} />}
                    />
                    <VerticalItem
                        name="item-4"
                        label="Folder shared with Me"
                        icon={<FontAwesomeIcon icon={faFolderOpen} />}
                    />
                </VerticalSectionOverflow>

                <VerticalSectionOverflow label="Recents" description="Folders created, shared...">
                    <VerticalItem name="item-1" label="Shared with Me" />
                    <VerticalItem name="item-2" label="Created by Me" />
                </VerticalSectionOverflow>

                <VerticalSectionOverflow
                    label="Documents"
                    description="Document created, shared..."
                >
                    <VerticalItem name="item-5" label="Recents" />
                    <VerticalItem name="item-6" label="Folder created by Me" />
                    <VerticalItem name="item-7" label="Folder shared with Me" />
                </VerticalSectionOverflow>
            </VerticalNavigation>
        );
    }
}

<div>
    <GlobalHeader />
    <StyledContainer className="rainbow-p-top_small rainbow-p-bottom_x-large">
        <ShadedVerticalNavigation />
    </StyledContainer>
</div>
```

##### vertical navigation with notifications

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem, Badge } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    width: 220px;
    background: ${props => props.background.main};
    border-bottom-left-radius: 0.875rem;
    border-right: 1px solid ${props => props.border.divider};
`;

class VerticalNavigationWithNotifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'item 1',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        return (
            <VerticalNavigation
                selectedItem={this.state.selectedItem}
                onSelect={this.handleOnSelect}
            >
                <VerticalSection>
                    <VerticalItem name="item-1" label="Recent" />
                    <VerticalItem
                        name="item-2"
                        label="Projects"
                        notification={<Badge label="NEW" variant="default" />}
                    />
                    <VerticalItem name="item-3" label="Folders" />
                    <VerticalItem name="item-4" label="Settings" />
                    <VerticalItem
                        name="item-5"
                        label="Reports"
                        notification={<Badge label="5" variant="inverse" />}
                    />
                    <VerticalItem name="item-6" label="Apps" />
                </VerticalSection>
            </VerticalNavigation>
        );
    }
}

<div>
    <GlobalHeader src="images/user/user3.jpg" />
    <StyledContainer className="rainbow-p-top_small rainbow-p-bottom_x-large">
        <VerticalNavigationWithNotifications />
    </StyledContainer>
</div>
```

##### VerticalNavigation shaded

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import styled from 'styled-components';

const StyledContainer = styled.div.attrs(props => {
    return props.theme.rainbow.palette;
})`
    width: 220px;
    background: ${props => props.background.main};
    border-bottom-left-radius: 0.875rem;
    border-right: 1px solid ${props => props.border.divider};
`;

class SimpleVerticalNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'item 1',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        return (
            <VerticalNavigation
                selectedItem={this.state.selectedItem}
                onSelect={this.handleOnSelect}
                shaded
            >
                <VerticalSection>
                    <VerticalItem name="item-1" label="Recent" />
                    <VerticalItem name="item-2" label="Projects" />
                    <VerticalItem name="item-3" label="Folders" />
                    <VerticalItem name="item-4" label="Settings" />
                    <VerticalItem name="item-5" label="Reports" />
                </VerticalSection>
            </VerticalNavigation>
        );
    }
}

<div>
    <GlobalHeader src="images/user/user3.jpg" />
    <StyledContainer className="rainbow-p-top_small rainbow-p-bottom_medium">
        <SimpleVerticalNavigation />
    </StyledContainer>
</div>
```
