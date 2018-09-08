##### select basic
    const options = [
        { value: "option 1", label: "option 1" },
        { value: "option 2", label: "option 2" },
        { value: "option 3", label: "option 3" },
    ];
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
            <Select label="test" options={options} />
    </div>

##### select required
    const options = [
        { value: "option 1", label: "option 1" },
        { value: "option 2", label: "option 2" },
        { value: "option 3", label: "option 3" },
    ];
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
            <Select label="test" required options={options} />
    </div>

##### select disabled
    const options = [
        { value: "option 1", label: "option 1" },
        { value: "option 2", label: "option 2" },
        { value: "option 3", label: "option 3" },
    ];
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
            <Select label="test" disabled options={options} />
    </div>

##### select with error
    const options = [
        { value: "option 1", label: "option 1" },
        { value: "option 2", label: "option 2" },
        { value: "option 3", label: "option 3" },
    ];
    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
            <Select label="test" required error="this field is required" options={options} />
    </div>
