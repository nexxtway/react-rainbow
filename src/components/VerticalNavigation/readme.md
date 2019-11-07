##### VerticalNavigation

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';

const verticalNavigationContainerStyles = {
    width: '220px',
    borderBottomLeftRadius: '0.875rem',
    borderRight: '1px solid #e3e5ed',
};

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
    <div
        className="rainbow-background-color_white rainbow-p-top_small rainbow-p-bottom_medium"
        style={verticalNavigationContainerStyles}
    >
        <SimpleVerticalNavigation />
    </div>
</div>
```

##### compact VerticalNavigation compact with href

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';

const verticalNavigationContainerStyles = {
    width: '220px',
    borderBottomLeftRadius: '0.875rem',
    borderRight: '1px solid #e3e5ed',
};

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
    <div
        className="rainbow-background-color_white rainbow-p-top_small rainbow-p-vertical_medium"
        style={verticalNavigationContainerStyles}
    >
        <CompactVerticalNavigation />
    </div>
</div>
```

##### vertical navigation with headers

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';

const verticalNavigationContainerStyles = {
    width: '220px',
    borderBottomLeftRadius: '0.875rem',
    borderRight: '1px solid #e3e5ed',
};

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
    <div
        style={verticalNavigationContainerStyles}
        className="rainbow-background-color_white rainbow-p-top_small rainbow-p-vertical_medium"
    >
        <VerticalNavigationWithHeaders />
    </div>
</div>
```

##### vertical navigation with icons

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCog, faFolderOpen, faBook, faReceipt } from '@fortawesome/free-solid-svg-icons';

const verticalNavigationContainerStyles = {
    width: '220px',
    borderBottomLeftRadius: '0.875rem',
    borderRight: '1px solid #e3e5ed',
};

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
    <div
        style={verticalNavigationContainerStyles}
        className="rainbow-background-color_white rainbow-p-top_small rainbow-p-bottom_large"
    >
        <VerticalNavigationWithIcons />
    </div>
</div>
```

##### vertical navigation with header and icons

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCog, faFolderOpen, faBook, faReceipt } from '@fortawesome/free-solid-svg-icons';

const verticalNavigationContainerStyles = {
    width: '220px',
    borderBottomLeftRadius: '0.875rem',
    borderRight: '1px solid #e3e5ed',
};

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
    <div
        style={verticalNavigationContainerStyles}
        className="rainbow-background-color_white rainbow-p-vertical_medium rainbow-p-top_small"
    >
        <VerticalNavigationWithIcons />
    </div>
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

const containerStyles = {
    width: '220px',
    borderBottomLeftRadius: '0.875rem',
    borderRight: '1px solid #e3e5ed',
};

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
    <div
        className="rainbow-background-color_white rainbow-p-top_small rainbow-p-bottom_x-large"
        style={containerStyles}
    >
        <ShadedVerticalNavigation />
    </div>
</div>
```

##### vertical navigation with notifications

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem, Badge } from 'react-rainbow-components';

const containerStyles = {
    width: '220px',
    borderBottomLeftRadius: '0.875rem',
    borderRight: '1px solid #e3e5ed',
};

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
    <div
        className="rainbow-background-color_white rainbow-p-top_small rainbow-p-bottom_x-large"
        style={containerStyles}
    >
        <VerticalNavigationWithNotifications />
    </div>
</div>
```

##### VerticalNavigation shaded

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';

const verticalNavigationContainerStyles = {
    width: '220px',
    borderBottomLeftRadius: '0.875rem',
    borderRight: '1px solid #e3e5ed',
};

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
    <div
        className="rainbow-background-color_white rainbow-p-top_small rainbow-p-bottom_medium"
        style={verticalNavigationContainerStyles}
    >
        <SimpleVerticalNavigation />
    </div>
</div>
```
