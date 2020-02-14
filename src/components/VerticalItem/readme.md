##### VerticalItem

```js
import React from 'react';
import { VerticalNavigation, VerticalSection, VerticalItem } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faTh } from '@fortawesome/free-solid-svg-icons';
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
                <VerticalSection label="REPORTS">
                    <VerticalItem
                        name="item-1"
                        label="Folders"
                        icon={<FontAwesomeIcon icon={faFolderOpen} />}
                    />
                    <VerticalItem
                        name="item-2"
                        label="Components"
                        icon={<FontAwesomeIcon icon={faFolderOpen} />}
                    />
                    <VerticalItem
                        name="item-3"
                        label="Apps"
                        icon={<FontAwesomeIcon icon={faTh} />}
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
    <StyledContainer className="rainbow-p-vertical_small">
        <SimpleVerticalNavigation />
    </StyledContainer>
</div>
```
