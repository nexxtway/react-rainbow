import CheckboxList from '../checkboxList';

const options = [
    { value: 'admin', label: 'Admin', disabled: false },
    { value: 'user', label: 'User', disabled: false },
    { value: 'nobody', label: 'Anonymus', disabled: true },
];

describe('<CheckboxList />', () => {
    it('should return the right amount of checkboxes ', () => {
        const component = CheckboxList({
            options,
            checkIfSelected: () => {},
            onChange: () => {},
            describedBy: 'checkboxGroupId',
        });
        expect(component.length).toBe(3);
    });

    it('should pass the right props to the Checkbox component', () => {
        const component = CheckboxList({
            options,
            checkIfSelected: () => {},
            onChange: () => {},
            describedBy: 'checkboxGroupId',
        });
        const checkbox = component[0];
        expect(checkbox.props.value).toBe('admin');
        expect(checkbox.props.label).toBe('Admin');
        expect(checkbox.props.disabled).toBe(false);
    });
});
