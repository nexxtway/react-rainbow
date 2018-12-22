##### textarea base

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Textarea
            id="textarea-1"
            label="Textarea Label"
            rows={4}
            placeholder="Placeholder Text" />
    </div>


##### textarea required

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Textarea
            label="Textarea Label"
            required
            rows={4}
            placeholder="Placeholder Text Required" />
    </div>


##### textarea disabled

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Textarea
            label="Textarea Label"
            disabled
            rows={4}
            placeholder="Textarea disabled" />
    </div>


##### textarea with bottom help

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Textarea
            label="Textarea Label Error"
            bottomHelpText="This is the bottom help"
            placeholder="Placeholder Text"
            rows={4} />
    </div>


##### textarea error

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Textarea
            label="Textarea Label Error"
            error="This Field is Required"
            rows={4}
            placeholder="Placeholder Text Error" />
    </div>


##### textarea read only

    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
        <Textarea
            label="Textarea read only Label"
            rows={4}
            value="A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum of light appearing in the sky. It takes the form of a multicoloured circular arc. Rainbows caused by sunlight always appear in the section of sky directly opposite the sun."
            readOnly />
    </div>