##### accordion base

```js
import React from 'react';
import { Accordion, AccordionSection, Input } from 'react-rainbow-components';

    <div className="rainbow-m-around_xx-large">
        <Accordion id="accordion-1">
            <AccordionSection label="Rainbow Accordion">
                <p>
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </p>
                <Input label="Input Text" placeholder="Placeholder text" type="text" />
            </AccordionSection>
            <AccordionSection label="Rainbow Accordion">
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
            <AccordionSection label="Rainbow Accordion">
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
        </Accordion>
    </div>
```

##### accordion with icons

```js
import React from 'react';
import { Accordion, AccordionSection } from 'react-rainbow-components';

// more details about how to use react-font-awesome
// visit https://github.com/FortAwesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

    <div className="rainbow-m-around_xx-large">
        <Accordion>
            <AccordionSection
                icon={<FontAwesomeIcon icon={faCog} className="rainbow-color_brand" />}
                label="General Settings"
            >
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
            <AccordionSection
                icon={<FontAwesomeIcon icon={faUsers} className="rainbow-color_brand" />}
                label="Users"
            >
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
            <AccordionSection
                icon={<FontAwesomeIcon icon={faUser} className="rainbow-color_brand" />}
                label="Personal data"
            >
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
        </Accordion>
    </div>
```

##### accordion with multiple sections opened

```js
import React from 'react';
import { Accordion, AccordionSection } from 'react-rainbow-components';

class AccordionExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNames: ['accordion-1', 'accordion-2'],
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(event, activeNames) {
        this.setState({ activeNames });
    }

    render() {
        const { activeNames } = this.state;

        return (
            <div className="rainbow-m-around_xx-large">
                <Accordion
                    id="accordion-multiple-1"
                    multiple
                    activeSectionNames={activeNames}
                    onToggleSection={this.handleOnSelect}
                >
                    <AccordionSection name="accordion-1" label="Rainbow Accordion">
                        A rainbow is a meteorological phenomenon that is caused by reflection,
                        refraction and dispersion of light in water droplets resulting in a
                        spectrum of light appearing in the sky.
                    </AccordionSection>

                    <AccordionSection name="accordion-2" label="Rainbow Accordion">
                        A rainbow is a meteorological phenomenon that is caused by reflection,
                        refraction and dispersion of light in water droplets resulting in a
                        spectrum of light appearing in the sky.
                    </AccordionSection>

                    <AccordionSection name="accordion-3" label="Rainbow Accordion">
                        A rainbow is a meteorological phenomenon that is caused by reflection,
                        refraction and dispersion of light in water droplets resulting in a
                        spectrum of light appearing in the sky.
                    </AccordionSection>
                </Accordion>
            </div>
        );
    }
}

    <AccordionExample />;
```

##### accordion with error variant

```js
import React from 'react';
import { Accordion, AccordionSection } from 'react-rainbow-components';
import styled from 'styled-components';
// more details about how to use react-font-awesome
// visit https://github.com/FortAwesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;

    > span {
        font-weight: normal;
        color: red;
        font-size: 14px;
    }
`;

const Header = () => (
    <StyledHeader>
        General settings
        <span>One error</span>
    </StyledHeader>
);

const AccordionWithError = () => (
    <div className="rainbow-m-around_xx-large">
        <Accordion>
            <AccordionSection
                icon={<FontAwesomeIcon icon={faExclamationCircle} className="rainbow-color_error" />}
                label={<Header />}
                variant="error"
            >
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
        </Accordion>
    </div>
);

    <AccordionWithError />
```

##### accordions disabled

```js
import React from 'react';
import { Accordion, AccordionSection } from 'react-rainbow-components';

    <div className="rainbow-m-around_xx-large">
        <Accordion>
            <AccordionSection label="Rainbow Accordion">
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
            <AccordionSection disabled label="Rainbow Accordion">
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
            <AccordionSection disabled label="Rainbow Accordion">
                A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                and dispersion of light in water droplets resulting in a spectrum of light appearing
                in the sky.
            </AccordionSection>
        </Accordion>
    </div>
```

##### Accordion with AccordionSection  changed dynamically

```js
import React from 'react';
import {
    Accordion,
    AccordionSection,
    ButtonGroup,
    ButtonIcon,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisV,
    faSync
} from '@fortawesome/free-solid-svg-icons';


class AccordionExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdvancedSettingsAdded: false,
        };
    }

    addNewAdvancedSettings() {
        const { isAdvancedSettingsAdded } = this.state;
        this.setState({ isAdvancedSettingsAdded: !isAdvancedSettingsAdded  });
    }

    renderNewAdvancedSettings() {
        const { isAdvancedSettingsAdded } = this.state;
        if (isAdvancedSettingsAdded) {
            return (
                <AccordionSection
                    icon={<AdvancedSettingsIcon />}
                    label="Advanced Settings"
                >
                    A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                    and dispersion of light in water droplets resulting in a spectrum of light appearing
                    in the sky.
                </AccordionSection>
            );
        }
        return null;
    }

    render() {
        return (
            <div className="rainbow-m-bottom_xx-large">
                <GlobalHeader src="images/user/user3.jpg">

                    <ButtonGroup>
                        <ButtonIcon
                            variant="border"
                            disabled
                            icon={<FontAwesomeIcon icon={faPlus} />}
                        />
                        <ButtonIcon
                            variant="border"
                            disabled
                            icon={<FontAwesomeIcon icon={faEllipsisV} />}
                        />
                    </ButtonGroup>

                    <ButtonIcon
                        id="button-icon_add-new-advanced-settings"
                        className="rainbow-m-left_small"
                        onClick={() => this.addNewAdvancedSettings()}
                        variant="border"
                        icon={<FontAwesomeIcon icon={faSync} />}
                    />
                </GlobalHeader>
                <div className="rainbow-m-around_xx-large">
                    <Accordion id="accordion-11">
                        <AccordionSection
                            icon={<SettingsIcon/>}
                            label="General Settings"
                        >
                            A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                            and dispersion of light in water droplets resulting in a spectrum of light appearing
                            in the sky.
                        </AccordionSection>
                        {this.renderNewAdvancedSettings()}
                        <AccordionSection
                            icon={<UserIcon />}
                            label="Personal Profile"
                        >
                            A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                            and dispersion of light in water droplets resulting in a spectrum of light appearing
                            in the sky.
                        </AccordionSection>
                        <AccordionSection
                            icon={<CompanyIcon />}
                            label="Company Profile"
                        >
                            A rainbow is a meteorological phenomenon that is caused by reflection, refraction
                            and dispersion of light in water droplets resulting in a spectrum of light appearing
                            in the sky.
                        </AccordionSection>
                    </Accordion>
                </div>
            </div>
        );
    }
}
    <AccordionExample/>
```
