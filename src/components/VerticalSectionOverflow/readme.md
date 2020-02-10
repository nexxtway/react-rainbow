##### VerticalSectionOverflow

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
