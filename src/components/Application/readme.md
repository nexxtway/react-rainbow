##### example

```js
import React from 'react';
import {
    Application,
    ButtonGroup,
    ButtonIcon,
    ButtonMenu,
    MenuDivider,
    MenuItem,
    Avatar,
    Card,
    Button,
    Input,
} from 'react-rainbow-components';

// more details about how to use react-font-awesome
// visit https://github.com/FortAwesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faTasks,
    faShareAlt,
    faHeart,
    faAngleDown,
    faPencilAlt,
    faBell,
} from '@fortawesome/free-solid-svg-icons';

const iconContainerStyles = {
    width: '2rem',
    height: '2rem',
};

const inputStyles = {
    width: 260,
};

<Application>
    <section>
        <header className="rainbow-align-content_space-between rainbow-background-color_white rainbow-p-vertical_medium react-rainbow-global-header">
            <img
                src="images/rainbow-logo.svg"
                alt="rainbow logo"
                className="rainbow-m-left_medium react-rainbow-global-header_logo"
            />

            <article className="rainbow-flex rainbow-align_center">
                <ButtonGroup>
                    <ButtonIcon
                        variant="border"
                        disabled
                        icon={<FontAwesomeIcon icon={faPencilAlt} />}
                    />
                    <ButtonIcon
                        variant="border"
                        disabled
                        icon={<FontAwesomeIcon icon={faBell} />}
                    />
                    <ButtonMenu
                        menuSize="x-small"
                        menuAlignment="right"
                        icon={<FontAwesomeIcon icon={faAngleDown} />}
                    >
                        <MenuItem label="Options" variant="header" />
                        <MenuItem label="Menu Item" />
                        <MenuItem label="Menu Item" />
                        <MenuDivider variant="space" />
                        <MenuItem
                            label="Right Icon"
                            icon={<FontAwesomeIcon icon={faTasks} />}
                            iconPosition="right"
                        />
                    </ButtonMenu>
                </ButtonGroup>

                <Avatar
                    src="images/user/user2.jpg"
                    variant="circle"
                    className="rainbow-m-horizontal_medium"
                />
            </article>
        </header>
        <section className="rainbow-m-horizontal_large rainbow-m-top_large rainbow-m-bottom_xx-large">
            <Card
                title="Tasks"
                icon={
                    <span
                        className="rainbow-background-color_brand rainbow-border-radius_circle rainbow-align-content_center"
                        style={iconContainerStyles}
                    >
                        <FontAwesomeIcon icon={faTasks} size="lg" className="rainbow-color_white" />
                    </span>
                }
                footer={
                    <div className="rainbow-align-content_space-between">
                        <div className="rainbow-flex">
                            <ButtonIcon
                                icon={<FontAwesomeIcon icon={faHeart} />}
                                className="rainbow-m-right_xx-small"
                            />
                            <ButtonIcon icon={<FontAwesomeIcon icon={faShareAlt} />} />
                        </div>
                        <ButtonIcon icon={<FontAwesomeIcon icon={faAngleDown} />} />
                    </div>
                }
                actions={<Button variant="neutral" label="New" />}
            >
                <div className="rainbow-p-bottom_large">
                    <Input
                        label="aplication component search"
                        hideLabel
                        placeholder="Search"
                        icon={<FontAwesomeIcon icon={faSearch} className="rainbow-color_gray-3" />}
                        type="search"
                        className="rainbow-p-around_small"
                        style={inputStyles}
                    />
                    <div className="rainbow-p-horizontal_xx-large rainbow-flex_column rainbow-align-content_center">
                        <img
                            src="images/illustrations/Illustration-rainbow-1.svg"
                            className="rainbow-p-top_x-large rainbow-align_absolute-center"
                            alt="the rainbow"
                        />
                        <p className="rainbow-p-top_medium rainbow-font-size-heading_small rainbow-color_gray-4">
                            No new tasks
                        </p>
                    </div>
                </div>
            </Card>
        </section>
    </section>
</Application>;
```
