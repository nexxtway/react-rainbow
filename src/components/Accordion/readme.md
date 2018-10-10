##### accordion with input

    const inputContainerStyles = {width: '50%',};
    <div className="rainbow-m-around_xx-large">
        <Card>
            <Accordion>
                <AccordionSection label="Rainbow Accordion">
                    <div className="rainbow-flex rainbow-p-bottom_medium">
                        <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                            <Input
                                label="Input Text"
                                placeholder="Placeholder text"
                                type="text" />

                        </div>
                        <div className="rainbow-p-horizontal_small" style={inputContainerStyles}>
                            <Input
                                label="Input Paassword"
                                placeholder="**********"
                                type="password" />

                        </div>
                    </div>
                </AccordionSection>
                <AccordionSection
                    label="Rainbow Accordion">
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum
                    of light appearing in the sky.
                </AccordionSection>
                <AccordionSection
                    label="Rainbow Accordion">
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum
                    of light appearing in the sky.
                </AccordionSection>
            </Accordion>
        </Card>
    </div>


##### accordion with icons
    // more details about how to use react-font-awesome
    // visit https://github.com/FortAwesome/react-fontawesome
    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faUser,
        faUsers,
        faCog,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-m-around_xx-large">
        <Card>
            <Accordion>
                <AccordionSection
                    icon={<FontAwesomeIcon icon={faCog} className="rainbow-color_brand" />}
                    label="General Settings">
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum
                    of light appearing in the sky.
                </AccordionSection>
                <AccordionSection
                    icon={<FontAwesomeIcon icon={faUsers} className="rainbow-color_brand" />}
                    label="Users">
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum
                    of light appearing in the sky.
                </AccordionSection>
                <AccordionSection
                    icon={<FontAwesomeIcon icon={faUser} className="rainbow-color_brand" />}
                    label="Personal data">
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum
                    of light appearing in the sky.
                </AccordionSection>
            </Accordion>
        </Card>
    </div>


##### accordion with multiple sections opened

    class AccordionExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                activeNames: ['accordion-1','accordion-2',],
                accordionInserted: false,
            };
            this.handleOnSelect = this.handleOnSelect.bind(this);
            this.handleOnClick = this.handleOnClick.bind(this);
            this.newAccordion = this.newAccordion.bind(this);
        }

        handleOnSelect(event, activeNames) {
            this.setState({ activeNames });
        }

        handleOnClick() {
            this.setState({ accordionInserted: !this.state.accordionInserted });
        }

        newAccordion() {
            const { accordionInserted } = this.state;
            if (accordionInserted) {
                return <AccordionSection
                            name="accordion-4"
                            label="New Rainbow Accordion">
                            A rainbow is a meteorological phenomenon that is caused by reflection,
                            refraction and dispersion of light in water droplets resulting in a spectrum
                            of light appearing in the sky.
                        </AccordionSection>;
            }
            return null;
        }

        render() {

            const { activeNames } = this.state;

            return (
                <div className="rainbow-m-around_xx-large">

                    <div className="rainbow-m-bottom_large">
                        <Card
                            title="Insert a new item"
                            actions={
                                <Button
                                    onClick={this.handleOnClick}
                                    variant="neutral"
                                    label="New"
                                    variant="outline-brand" />
                            } />
                    </div>

                    <Card>
                        <Accordion
                            multiple
                            activeSectionNames={activeNames}
                            onToggleSection={this.handleOnSelect}>
                            <AccordionSection
                                name="accordion-1"
                                label="Rainbow Accordion">
                                A rainbow is a meteorological phenomenon that is caused by reflection,
                                refraction and dispersion of light in water droplets resulting in a spectrum
                                of light appearing in the sky.
                            </AccordionSection>

                            {this.newAccordion()}

                            <AccordionSection
                                name="accordion-2"
                                label="Rainbow Accordion">
                                A rainbow is a meteorological phenomenon that is caused by reflection,
                                refraction and dispersion of light in water droplets resulting in a spectrum
                                of light appearing in the sky.
                            </AccordionSection>

                            <AccordionSection
                                name="accordion-3"
                                label="Rainbow Accordion">
                                A rainbow is a meteorological phenomenon that is caused by reflection,
                                refraction and dispersion of light in water droplets resulting in a spectrum
                                of light appearing in the sky.
                            </AccordionSection>
                        </Accordion>
                    </Card>
                </div>
            );
        }
    }

    <AccordionExample />


##### accordions disabled

    <div className="rainbow-m-around_xx-large">
        <Card>
            <Accordion>
                <AccordionSection
                    label="Rainbow Accordion">
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum
                    of light appearing in the sky.
                </AccordionSection>
                <AccordionSection
                    disabled
                    label="Rainbow Accordion">
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum
                    of light appearing in the sky.
                </AccordionSection>
                <AccordionSection
                    disabled
                    label="Rainbow Accordion">
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum
                    of light appearing in the sky.
                </AccordionSection>
            </Accordion>
        </Card>
    </div>
