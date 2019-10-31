##### accordion base

```js
import React from 'react';
import { Card, Accordion, AccordionSection, Input } from 'react-rainbow-components';

<div className="rainbow-m-around_xx-large">
    <Card>
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
    </Card>
</div>
```

##### accordion with icons

```js
import React from 'react';
import { Card, Accordion, AccordionSection } from 'react-rainbow-components';

// more details about how to use react-font-awesome
// visit https://github.com/FortAwesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';

<div className="rainbow-m-around_xx-large">
    <Card>
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
    </Card>
</div>
```

##### accordion with multiple sections opened

```js
import React from 'react';
import { Card, Accordion, AccordionSection } from 'react-rainbow-components';

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
                <Card>
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
                </Card>
            </div>
        );
    }
}

<AccordionExample />;
```

##### accordions disabled

```js
import React from 'react';
import { Card, Accordion, AccordionSection } from 'react-rainbow-components';

<div className="rainbow-m-around_xx-large">
    <Card>
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
    </Card>
</div>
```
