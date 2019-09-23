##### modal base empty

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faCog } = require('@fortawesome/free-solid-svg-icons');

class EmptyModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnClose = this.handleOnClose.bind(this);
    }

    handleOnClick() {
        return this.setState({ isOpen: true });
    }

    handleOnClose() {
        return this.setState({ isOpen: false });
    }

    render() {
        return (
            <div>
                <Button
                    id="button-1"
                    variant="neutral"
                    label="Open Modal"
                    onClick={this.handleOnClick}
                />
                <Modal id="modal-1" isOpen={this.state.isOpen} onRequestClose={this.handleOnClose}>
                    <img
                        src="images/illustrations/Illustration-rainbow-1.svg"
                        className="rainbow-p-vertical_x-large rainbow-m_auto rainbow-align-content_center"
                        alt="landscape with rainbows, birds and colorful balloons"
                    />
                </Modal>
            </div>
        );
    }
}

const { faPlus, faEllipsisV } = require('@fortawesome/free-solid-svg-icons');

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
        <div className="rainbow-m-right_medium">
            <EmptyModal />
        </div>
        <ButtonGroup>
            <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
            <ButtonIcon
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
                variant="border-filled"
                disabled
            />
        </ButtonGroup>
    </GlobalHeader>
</div>;
```

##### modal with header

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faCog } = require('@fortawesome/free-solid-svg-icons');

class ModalWHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnClose = this.handleOnClose.bind(this);
    }

    handleOnClick() {
        return this.setState({ isOpen: true });
    }

    handleOnClose() {
        return this.setState({ isOpen: false });
    }

    render() {
        return (
            <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
                <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
                    <Button
                        variant="neutral"
                        label="Modal with header"
                        onClick={this.handleOnClick}
                    />
                </GlobalHeader>
                <Modal
                    isOpen={this.state.isOpen}
                    onRequestClose={this.handleOnClose}
                    title="Modal Header"
                >
                    <p>
                        A rainbow is a meteorological phenomenon that is caused by reflection,
                        refraction and dispersion of light in water droplets resulting in a spectrum
                        of light appearing in the sky. It takes the form of a multicoloured circular
                        arc. Rainbows caused by sunlight always appear in the section of sky
                        directly opposite the sun. Rainbows can be full circles. However, the
                        observer normally sees only an arc formed by illuminated droplets above the
                        ground, and centered on a line from the sun to the observer's eye.
                    </p>
                </Modal>
            </div>
        );
    }
}

<ModalWHeader />;
```

##### modal with footer

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faCog } = require('@fortawesome/free-solid-svg-icons');

class ModalWFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnClose = this.handleOnClose.bind(this);
    }

    handleOnClick() {
        return this.setState({ isOpen: true });
    }

    handleOnClose() {
        return this.setState({ isOpen: false });
    }

    render() {
        return (
            <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
                <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
                    <Button
                        id="button-2"
                        variant="neutral"
                        label="Modal with footer"
                        onClick={this.handleOnClick}
                    />
                </GlobalHeader>
                <Modal
                    id="modal-2"
                    isOpen={this.state.isOpen}
                    onRequestClose={this.handleOnClose}
                    title="Modal Header"
                    footer={
                        <div className="rainbow-flex rainbow-justify_end">
                            <Button
                                className="rainbow-m-right_large"
                                label="Cancel"
                                variant="neutral"
                            />
                            <Button label="Save" variant="brand" />
                        </div>
                    }
                >
                    <p>
                        A rainbow is a meteorological phenomenon that is caused by reflection,
                        refraction and dispersion of light in water droplets resulting in a spectrum
                        of light appearing in the sky. It takes the form of a multicoloured circular
                        arc. Rainbows caused by sunlight always appear in the section of sky
                        directly opposite the sun. Rainbows can be full circles. However, the
                        observer normally sees only an arc formed by illuminated droplets above the
                        ground, and centered on a line from the sun to the observer's eye.
                    </p>
                </Modal>
            </div>
        );
    }
}

<ModalWFooter />;
```

##### modal with footer directional

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faCog } = require('@fortawesome/free-solid-svg-icons');

class ModalWFooterDirectional extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnClose = this.handleOnClose.bind(this);
    }

    handleOnClick() {
        return this.setState({ isOpen: true });
    }

    handleOnClose() {
        return this.setState({ isOpen: false });
    }

    render() {
        return (
            <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
                <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
                    <Button
                        variant="neutral"
                        label="Modal with footer"
                        onClick={this.handleOnClick}
                    />
                </GlobalHeader>
                <Modal
                    isOpen={this.state.isOpen}
                    onRequestClose={this.handleOnClose}
                    title="Modal Header"
                    footer={
                        <div className="rainbow-flex rainbow-justify_spread">
                            <Button label="Previous" variant="neutral" />
                            <Button label="Save" variant="brand" />
                        </div>
                    }
                >
                    <p>
                        A rainbow is a meteorological phenomenon that is caused by reflection,
                        refraction and dispersion of light in water droplets resulting in a spectrum
                        of light appearing in the sky. It takes the form of a multicoloured circular
                        arc. Rainbows caused by sunlight always appear in the section of sky
                        directly opposite the sun. Rainbows can be full circles. However, the
                        observer normally sees only an arc formed by illuminated droplets above the
                        ground, and centered on a line from the sun to the observer's eye.
                    </p>
                </Modal>
            </div>
        );
    }
}

<ModalWFooterDirectional />;
```

##### modal with variant size

```js
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faTasks, faShareAlt, faAngleDown } = require('@fortawesome/free-solid-svg-icons');
const { faHeart } = require('@fortawesome/free-regular-svg-icons');

const iconContainerStyles = {
    width: '2.5rem',
    height: '2.5rem',
};

class ModalWSize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isOpenMedium: false,
            isOpenLarge: false,
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnClickMedium = this.handleOnClickMedium.bind(this);
        this.handleOnClickLarge = this.handleOnClickLarge.bind(this);
        this.handleOnClose = this.handleOnClose.bind(this);
    }

    handleOnClick() {
        return this.setState({ isOpen: true });
    }

    handleOnClickMedium() {
        return this.setState({ isOpenMedium: true });
    }

    handleOnClickLarge() {
        return this.setState({ isOpenLarge: true });
    }

    handleOnClose() {
        return this.setState({
            isOpen: false,
            isOpenMedium: false,
            isOpenLarge: false,
        });
    }

    render() {
        return (
            <div className="rainbow-m-around_large">
                <Card
                    icon={
                        <span
                            className="rainbow-background-color_yellow rainbow-border-radius_circle rainbow-align-content_center"
                            style={iconContainerStyles}
                        >
                            <FontAwesomeIcon
                                icon={faTasks}
                                size="lg"
                                className="rainbow-color_white"
                            />
                        </span>
                    }
                    title="Task"
                    actions={
                        <Button
                            onClick={this.handleOnClick}
                            variant="neutral"
                            label="Modal small"
                        />
                    }
                    footer={
                        <div className="rainbow-align-content_center">
                            <ButtonGroup>
                                <Button
                                    onClick={this.handleOnClickMedium}
                                    variant="outline-brand"
                                    label="Modal medium"
                                />
                                <Button
                                    onClick={this.handleOnClickLarge}
                                    variant="outline-brand"
                                    label="Modal large"
                                />
                            </ButtonGroup>
                        </div>
                    }
                >
                    <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_column">
                        <img
                            src="images/illustrations/Illustration-rainbow-2.svg"
                            alt="landscape with rainbows and colorful birds"
                        />
                    </div>
                </Card>
                <Modal
                    isOpen={this.state.isOpen}
                    onRequestClose={this.handleOnClose}
                    title="Modal Small"
                >
                    <p>
                        A rainbow is a meteorological phenomenon that is caused by reflection,
                        refraction and dispersion of light in water droplets resulting in a spectrum
                        of light appearing in the sky. It takes the form of a multicoloured circular
                        arc. Rainbows caused by sunlight always appear in the section of sky
                        directly opposite the sun. Rainbows can be full circles. However, the
                        observer normally sees only an arc formed by illuminated droplets above the
                        ground, and centered on a line from the sun to the observer's eye.
                    </p>
                </Modal>
                <Modal
                    isOpen={this.state.isOpenMedium}
                    onRequestClose={this.handleOnClose}
                    title="Modal Medium"
                    size="medium"
                >
                    <p>
                        A rainbow is a meteorological phenomenon that is caused by reflection,
                        refraction and dispersion of light in water droplets resulting in a spectrum
                        of light appearing in the sky. It takes the form of a multicoloured circular
                        arc. Rainbows caused by sunlight always appear in the section of sky
                        directly opposite the sun. Rainbows can be full circles. However, the
                        observer normally sees only an arc formed by illuminated droplets above the
                        ground, and centered on a line from the sun to the observer's eye.
                    </p>
                </Modal>
                <Modal
                    isOpen={this.state.isOpenLarge}
                    onRequestClose={this.handleOnClose}
                    title="Modal Large"
                    size="large"
                >
                    <p>
                        A rainbow is a meteorological phenomenon that is caused by reflection,
                        refraction and dispersion of light in water droplets resulting in a spectrum
                        of light appearing in the sky. It takes the form of a multicoloured circular
                        arc. Rainbows caused by sunlight always appear in the section of sky
                        directly opposite the sun. Rainbows can be full circles. However, the
                        observer normally sees only an arc formed by illuminated droplets above the
                        ground, and centered on a line from the sun to the observer's eye.
                    </p>
                </Modal>
            </div>
        );
    }
}

<ModalWSize />;
```

##### modal with redux form

```js
const { Field, reduxForm } = require('redux-form');
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faCog } = require('@fortawesome/free-solid-svg-icons');

const styles = {
    input: {
        marginTop: 24,
    },
    inputColumn: {
        width: '48%',
        marginTop: 24,
    },
};

const options = [
    { label: 'Paris' },
    { label: 'New York' },
    { label: 'San Fransisco' },
    { label: 'Madrid' },
    { label: 'Miami' },
    { label: 'London' },
    { label: 'Tokyo' },
    { label: 'Barcelona' },
    { label: 'La Habana' },
    { label: 'Buenos Aires' },
    { label: 'Sao Paulo' },
    { label: 'Toronto' },
];

function filter(query, options) {
    if (query) {
        return options.filter(item => {
            const regex = new RegExp(query, 'i');
            return regex.test(item.label);
        });
    }
    return [];
}

function SimpleForm(props) {
    const { handleSubmit, reset, onSubmit, onSearch, options, isLoading } = props;

    const submit = values => {
        onSubmit(values);
        reset();
    };

    return (
        <form id="redux-form-id" noValidate onSubmit={handleSubmit(submit)}>
            <Field
                component={Input}
                name="subject"
                required
                label="Company"
                placeholder="Enter company name"
            />

            <div className="rainbow-flex rainbow-justify_spread">
                <Field
                    style={styles.inputColumn}
                    component={DatePicker}
                    name="date"
                    required
                    label="Select a Date"
                    placeholder="Select a date"
                />

                <Field
                    style={styles.inputColumn}
                    component={TimePicker}
                    name="time"
                    required
                    label="Select a Time"
                />
            </div>

            <Field
                id="modal-lookup-11"
                debounce
                isLoading={isLoading}
                onSearch={onSearch}
                style={styles.input}
                component={Lookup}
                name="location"
                label="Location"
                placeholder="Enter location"
                options={options}
            />

            <Field
                className="rainbow-m-bottom_medium"
                style={styles.input}
                component={Textarea}
                name="description"
                label="Description"
                placeholder="Enter description"
            />
        </form>
    );
}

function validate(values) {
    const { subject, date, time } = values;
    const errors = {};
    if (!subject) {
        errors.subject = 'Title is a required field';
    }
    if (!date) {
        errors.date = 'Date is a required field';
    }
    if (!time) {
        errors.time = 'Time is a required field';
    }
    return errors;
}

const Form = reduxForm({
    form: 'create-issue-form',
    validate,
    touchOnBlur: false,
})(SimpleForm);

class FormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            options: null,
            initialValues: {
                subject: 'React Rainbow',
                description:
                    'React Rainbow is a collection of components that will reliably help you build your application in a snap.',
                date: new Date(),
                time: '00:00',
            },
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnClose = this.handleOnClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.search = this.search.bind(this);
    }

    handleOnClick() {
        return this.setState({
            isOpen: true,
        });
    }

    handleOnClose() {
        return this.setState({
            isOpen: false,
            options: null,
        });
    }

    handleSubmit(values) {
        console.log(values);
        this.setState({
            options: null,
        });
    }

    search(value) {
        if (this.state.options && this.state.value && value.length > this.state.value.length) {
            this.setState({
                options: filter(value, this.state.options),
                value,
            });
        } else if (value) {
            this.setState({
                isLoading: true,
                value,
            });
            setTimeout(
                () =>
                    this.setState({
                        options: filter(value, options),
                        isLoading: false,
                    }),
                500,
            );
        } else {
            this.setState({
                isLoading: false,
                value: '',
                options: null,
            });
        }
    }

    render() {
        const { isOpen, initialValues, isLoading, options } = this.state;
        return (
            <div>
                <Button
                    id="button-11"
                    variant="neutral"
                    label="Open Modal"
                    onClick={this.handleOnClick}
                />
                <Modal
                    id="modal-11"
                    title="Modal Header"
                    isOpen={isOpen}
                    onRequestClose={this.handleOnClose}
                    footer={
                        <div className="rainbow-flex rainbow-justify_end">
                            <Button
                                form="redux-form-id"
                                className="rainbow-m-right_large"
                                label="Cancel"
                                variant="neutral"
                                onClick={this.handleOnClose}
                            />
                            <Button
                                form="redux-form-id"
                                label="Save"
                                variant="brand"
                                type="submit"
                            />
                        </div>
                    }
                >
                    <Form
                        onSubmit={this.handleSubmit}
                        onSearch={this.search}
                        isLoading={isLoading}
                        options={options}
                        initialValues={initialValues}
                    />
                </Modal>
            </div>
        );
    }
}

const { faPlus, faEllipsisV } = require('@fortawesome/free-solid-svg-icons');

<div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
    <GlobalHeader className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
        <div className="rainbow-m-right_medium">
            <FormModal />
        </div>
        <ButtonGroup>
            <ButtonIcon icon={<FontAwesomeIcon icon={faPlus} />} variant="border-filled" disabled />
            <ButtonIcon
                icon={<FontAwesomeIcon icon={faEllipsisV} />}
                variant="border-filled"
                disabled
            />
        </ButtonGroup>
    </GlobalHeader>
</div>;
```
